"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { validatePhoneNumber, formatPhoneError } from "@/lib/phone-validation"

interface PaymentOptionsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PaymentOptionsModal({ isOpen, onClose }: PaymentOptionsModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    wishes: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [phoneError, setPhoneError] = useState("")
  const dialogRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validatePhoneNumber(formData.phone)) {
      setPhoneError(formatPhoneError())
      return
    }

    setPhoneError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          wishes: formData.wishes,
          source: "Способы оплаты",
          formId: "способы-оплаты",
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", phone: "", wishes: "" })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        throw new Error("Ошибка отправки")
      }
    } catch (error) {
      console.error("Ошибка отправки формы:", error)
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-3xl max-h-[85vh] overflow-y-auto"
        ref={dialogRef}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-[#a8996e] font-history-pro mb-4">Способы оплаты</DialogTitle>
          <div className="w-24 h-px bg-[#a8996e] mb-6"></div>
        </DialogHeader>

        <div className="space-y-8 text-gray-700">
          {/* Promotions Section */}
          <div className="bg-gradient-to-br from-[#a8996e]/10 to-[#a8996e]/5 rounded-[20px] p-6 border border-[#a8996e]/20">
            <h3 className="text-lg font-medium text-[#a8996e] mb-4">Акции на квартиры</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#a8996e] mt-2 flex-shrink-0"></div>
                <p className="text-sm leading-relaxed">
                  <span className="font-medium">Скидка 100 000 руб.</span> для иногородних покупателей
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#a8996e] mt-2 flex-shrink-0"></div>
                <p className="text-sm leading-relaxed">
                  <span className="font-medium">Скидка 2%</span> при повторной покупке
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#a8996e] mt-2 flex-shrink-0"></div>
                <p className="text-sm leading-relaxed">
                  <span className="font-medium">Скидка 1%</span> по рекомендации
                </p>
              </div>
            </div>
          </div>

          {/* Payment Plans Section */}
          <div>
            <h3 className="text-lg font-medium text-[#a8996e] mb-4">Программы рассрочки</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Беспроцентная рассрочка от застройщика RBI — это стоимость квартиры, разбитая на комфортные суммы, которые
              можно выплачивать через различные промежутки времени. Ипотечные программы позволяют выбирать наиболее
              подходящую среди предложений по кредитным лимитам, процентным ставкам и срокам выплат.
            </p>

            <div className="space-y-4">
              {/* Plan 1: 30% down payment */}
              <div className="border border-gray-200 rounded-[20px] p-5 hover:border-[#a8996e]/40 transition-colors">
                <h4 className="font-medium text-[#a8996e] mb-3">Рассрочка с первым взносом 30%</h4>
                <p className="text-xs text-gray-500 mb-3">Предложение действительно по базовой цене</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">30%</span>
                    <span className="text-gray-700">3 (10) дня со дня заключения договора</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">70%</span>
                    <span className="text-gray-700">равными платежами до сентября 2028 года</span>
                  </div>
                </div>
              </div>

              {/* Plan 2: 50% down payment with discount */}
              <div className="border border-gray-200 rounded-[20px] p-5 hover:border-[#a8996e]/40 transition-colors bg-[#a8996e]/5">
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="font-medium text-[#a8996e]">Рассрочка с первым взносом 50%</h4>
                  <span className="text-xs bg-[#a8996e] text-white px-2 py-1 rounded-full">-10%</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">Базовая цена минус 10%</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">50%</span>
                    <span className="text-gray-700">3 (10) дня со дня заключения договора</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">50%</span>
                    <span className="text-gray-700">через 12 месяцев со дня заключения договора</span>
                  </div>
                </div>
              </div>

              {/* Plan 3: 25% installments */}
              <div className="border border-gray-200 rounded-[20px] p-5 hover:border-[#a8996e]/40 transition-colors">
                <h4 className="font-medium text-[#a8996e] mb-3">Рассрочка с первым взносом 25%</h4>
                <p className="text-xs text-gray-500 mb-3">По базовой цене</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">25%</span>
                    <span className="text-gray-700">3 (10) дня со дня заключения договора</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">25%</span>
                    <span className="text-gray-700">12 месяцев со дня заключения договора</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">25%</span>
                    <span className="text-gray-700">24 месяцев со дня заключения договора</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">25%</span>
                    <span className="text-gray-700">остаток</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium text-[#a8996e] mb-4">Получить консультацию</h3>

          {isSuccess && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-[20px]">
              <p className="text-green-600 text-center">
                Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <Input
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              autoComplete="off"
              tabIndex={-1}
              onFocus={(e) => (e.target.tabIndex = 0)}
              className="bg-gray-50 border-gray-200 focus:border-[#a8996e] rounded-[22px]"
            />
            <div>
              <label htmlFor="payment-phone" className="block text-sm font-medium text-gray-700 mb-2">
                Телефон <span className="text-red-500">*</span>
              </label>
              <Input
                id="payment-phone"
                name="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isLoading}
                autoComplete="off"
                tabIndex={-1}
                onFocus={(e) => (e.target.tabIndex = 0)}
                className={`bg-gray-50 border-gray-200 focus:border-[#a8996e] rounded-[22px] ${
                  phoneError ? "border-red-500" : ""
                }`}
              />
              {phoneError && <p className="text-red-500 text-sm mt-2">{phoneError}</p>}
            </div>
            <Textarea
              name="wishes"
              placeholder="Ваши пожелания"
              value={formData.wishes}
              onChange={handleChange}
              disabled={isLoading}
              autoComplete="off"
              tabIndex={-1}
              onFocus={(e) => (e.target.tabIndex = 0)}
              className="bg-gray-50 border-gray-200 focus:border-[#a8996e] rounded-[22px] min-h-[88px] resize-none"
            />
            <p className="text-xs text-gray-500 -mt-2">
              <span className="text-red-500">*</span> Обязательное поле
            </p>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#a8996e] hover:bg-[#9d8f5f] text-white font-light tracking-wide py-4 text-lg transition-all duration-300 disabled:opacity-50 rounded-[22px] hover:shadow-lg hover:scale-[1.02]"
            >
              {isLoading ? "ОТПРАВЛЯЕМ..." : "ОТПРАВИТЬ ЗАЯВКУ"}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <Link href="/privacy" className="text-[#a8996e] hover:text-[#9d8f5f] underline">
                обработкой персональных данных
              </Link>
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
