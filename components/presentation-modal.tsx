"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import Link from "next/link"

interface PresentationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PresentationModal({ isOpen, onClose }: PresentationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.phone.trim()) {
      return
    }

    setIsSubmitting(true)

    try {
      console.log("[v0] Presentation form submitting:", {
        name: formData.name || "Не указано",
        phone: formData.phone,
        source: "Презентация",
        formId: "презентация",
      })

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name || "Не указано",
          phone: formData.phone,
          email: "",
          source: "Презентация",
          formId: "презентация", // Added unique form identifier
          timestamp: new Date().toISOString(),
        }),
      })

      console.log("[v0] API response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("[v0] API response error:", errorText)
        throw new Error("Failed to submit form")
      }

      const responseData = await response.json()
      console.log("[v0] API response data:", responseData)

      // Start PDF download after successful webhook submission
      const link = document.createElement("a")
      link.href = "https://6ce3ab7d-ca19-4563-89f5-bf0d195953bc.selstorage.ru/%D0%91%D1%83%D0%BA%D0%BB%D0%B5%D1%82.pdf"
      link.download = "ЖК-Гений-Презентация.pdf"
      link.target = "_blank" // Open in new tab as fallback
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      console.log("[v0] PDF download initiated")

      // Close modal after download starts
      setTimeout(() => {
        onClose()
        setFormData({ name: "", phone: "" })
      }, 1000)
    } catch (error) {
      console.error("[v0] Error submitting presentation form:", error)
      // Still allow download even if webhook fails
      const link = document.createElement("a")
      link.href = "https://6ce3ab7d-ca19-4563-89f5-bf0d195953bc.selstorage.ru/%D0%91%D1%83%D0%BA%D0%BB%D0%B5%D1%82.pdf"
      link.download = "ЖК-Гений-Презентация.pdf"
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setTimeout(() => {
        onClose()
        setFormData({ name: "", phone: "" })
      }, 1000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-history-pro font-medium mb-2">Скачать презентацию</h2>
          <p className="text-gray-600">Заполните форму, и презентация автоматически начнет загружаться</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a8996e] focus:border-transparent"
            />
          </div>

          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Телефон *"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a8996e] focus:border-transparent"
            />
          </div>

          <Button
            type="submit"
            disabled={!formData.phone.trim() || isSubmitting}
            className="w-full h-12 bg-[#a8996e] hover:bg-[#9a8a5f] text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Загружается..." : "Скачать презентацию"}
          </Button>

          {/* Privacy agreement text */}
          <p className="text-xs text-gray-500 text-center">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <Link href="/privacy" className="text-[#a8996e] hover:text-[#9d8f5f] underline">
              обработкой персональных данных
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
