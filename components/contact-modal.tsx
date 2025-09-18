"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
import Link from "next/link"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  buttonText?: string
}

export default function ContactModal({ isOpen, onClose, buttonText = "Кнопка" }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formId = buttonText.toLowerCase().replace(/\s+/g, "-")

      // Отправляем данные на webhook
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name || "Не указано",
          phone: formData.phone,
          source: buttonText,
          formId: formId, // Added unique form identifier based on button text
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", phone: "" })
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
        }, 2000)
      } else {
        throw new Error("Ошибка отправки")
      }
    } catch (error) {
      console.error("Ошибка:", error)
      alert("Произошла ошибка при отправке. Попробуйте еще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <Card className="relative w-full max-w-md mx-4 bg-white">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-[18px] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <CardTitle className="text-2xl font-light text-center text-gray-900">
            {isSuccess ? "Спасибо!" : "Оставить заявку"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-[18px] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-600">Ваша заявка отправлена!</p>
              <p className="text-sm text-gray-500 mt-2">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-[22px]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон <span className="text-red-500">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[22px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#a8996e] hover:bg-[#9d8f5f] text-white py-3 font-light tracking-wide transition-all duration-300 rounded-[22px]"
              >
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <Link href="/privacy" className="text-[#a8996e] hover:text-[#9d8f5f] underline">
                  обработкой персональных данных
                </Link>
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
