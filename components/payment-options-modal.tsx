"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

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
  const dialogRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
          formId: "способы-оплаты", // Added unique form identifier
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl max-h-[80vh] overflow-y-auto"
        ref={dialogRef}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-[#a8996e] font-history-pro mb-4">Способы оплаты</DialogTitle>
          <div className="w-24 h-px bg-[#a8996e] mb-6"></div>
        </DialogHeader>

        <div className="space-y-6 text-gray-700">
          {/* 100% Payment */}
          <div className="border-l-4 border-[#a8996e] pl-4">
            <h3 className="text-lg font-medium text-[#a8996e] mb-2">100% оплата</h3>
            <p className="leading-relaxed">Полная оплата стоимости квартиры единовременно с максимальной выгодой.</p>
          </div>

          {/* Interest-free installment */}
          <div className="border-l-4 border-[#a8996e] pl-4">
            <h3 className="text-lg font-medium text-[#a8996e] mb-2">Беспроцентная рассрочка от застройщика</h3>
            <p className="leading-relaxed">
              Разбитая на удобные суммы выплата стоимости квартиры без переплат на срок до 2,5 лет. Обычно первый взнос
              составляет 20-30%, остальная сумма оплачивается равными ежемесячными или ежеквартальными платежами до
              марта 2028 года.
            </p>
          </div>

          {/* Mortgage and government programs */}
          <div className="border-l-4 border-[#a8996e] pl-4">
            <h3 className="text-lg font-medium text-[#a8996e] mb-2">Ипотечное кредитование</h3>
            <p className="leading-relaxed">
              Работаем с ведущими банками. Доступны программы с использованием материнского капитала и военной ипотеки.
            </p>
          </div>

          {/* Trade-in program */}
          <div className="border-l-4 border-[#a8996e] pl-4">
            <h3 className="text-lg font-medium text-[#a8996e] mb-2">Программа Trade-in</h3>
            <p className="leading-relaxed">
              Обмен имеющейся недвижимости с первым взносом от 10% и остатком оплаты позже, по цене 100%-й оплаты без
              скидок.
            </p>
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
            <Input
              name="phone"
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isLoading}
              autoComplete="off"
              tabIndex={-1}
              onFocus={(e) => (e.target.tabIndex = 0)}
              className="bg-gray-50 border-gray-200 focus:border-[#a8996e] rounded-[22px]"
            />
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
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#a8996e] hover:bg-[#9d8f5f] text-white font-light tracking-wide py-4 text-lg transition-all duration-300 disabled:opacity-50 rounded-[22px]"
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
