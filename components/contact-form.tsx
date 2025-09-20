"use client"

import type React from "react"
import { validatePhoneNumber, formatPhoneError } from "@/lib/phone-validation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    wishes: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [phoneError, setPhoneError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validatePhoneNumber(formData.phone)) {
      setPhoneError(formatPhoneError())
      return
    }

    setPhoneError("")
    setIsLoading(true)

    try {
      console.log("[v0] Contact form submitting:", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        wishes: formData.wishes,
        source: "Контактная форма",
        formId: "контактная-форма",
      })

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          wishes: formData.wishes,
          source: "Контактная форма",
          formId: "контактная-форма", // Added unique form identifier
          timestamp: new Date().toISOString(),
        }),
      })

      console.log("[v0] Contact form API response status:", response.status)

      if (response.ok) {
        const responseData = await response.json()
        console.log("[v0] Contact form API response data:", responseData)

        setIsSuccess(true)
        setFormData({ name: "", phone: "", email: "", wishes: "" })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        const errorText = await response.text()
        console.error("[v0] Contact form API response error:", errorText)
        throw new Error("Ошибка отправки")
      }
    } catch (error) {
      console.error("[v0] Ошибка отправки контактной формы:", error)
      alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "phone" && phoneError) {
      setPhoneError("")
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide font-history-pro">СВЯЖИТЕСЬ С НАМИ</h2>
            <div className="w-24 h-px bg-[#a8996e] mb-8"></div>
            <p className="text-xl font-light leading-relaxed mb-12 opacity-90">
              Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут для консультации по всем вопросам.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#a8996e]/20 rounded-[18px] flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#a8996e]" />
                </div>
                <div>
                  <p className="font-light opacity-75 text-sm uppercase tracking-wide">Телефон</p>
                  <p className="text-xl">+7 (812) 660-56-50</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#a8996e]/20 rounded-[18px] flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#a8996e]" />
                </div>
                <div>
                  <p className="font-light opacity-75 text-sm uppercase tracking-wide">Email</p>
                  <p className="text-xl">info@domfy.ru</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-8">
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-[20px]">
                  <p className="text-green-400 text-center">
                    Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#a8996e] rounded-[22px]"
                />
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#a8996e] rounded-[22px] ${
                      phoneError ? "border-red-500" : ""
                    }`}
                  />
                  {phoneError && <p className="text-red-400 text-sm mt-2">{phoneError}</p>}
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#a8996e] rounded-[22px]"
                />
                <Textarea
                  name="wishes"
                  placeholder="Ваши пожелания"
                  value={formData.wishes}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#a8996e] rounded-[22px] min-h-[88px] resize-none"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#a8996e] hover:bg-[#9d8f5f] text-white font-light tracking-wide py-4 text-lg transition-all duration-300 disabled:opacity-50 rounded-[22px]"
                >
                  {isLoading ? "ОТПРАВЛЯЕМ..." : "ОТПРАВИТЬ ЗАЯВКУ"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
