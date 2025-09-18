"use client"

import Image from "next/image"
import { useState } from "react"
import PaymentOptionsModal from "./payment-options-modal"

export default function ProjectIntro() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  return (
    <section className="py-16 bg-stone-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-xl md:text-2xl lg:text-2xl font-light text-[#a8996e] leading-tight font-history-pro">
              Жилой комплекс Гений в Невском районе
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                ЖК «Гений» — это больше чем жилой комплекс. Это пространство, созданное для тех, кто мыслит шире и живет
                осознанно. Архитектура проекта вдохновлена новаторскими идеями русских супрематистов — четкие формы,
                динамичные контрасты и световые акценты создают атмосферу, стимулирующую творческое мышление.
              </p>

              <p>
                3 корпуса переменной этажности от 8 до 17 этажей образуют гармоничный ансамбль, где каждая деталь
                продумана для комфортной жизни. Фасады выполнены из качественных материалов — натурального камня,
                клинкерного кирпича и декоративной штукатурки.
              </p>
            </div>

            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors"
            >
              Как купить
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/complex-exterior.jpeg" alt="ЖК Северная Звезда" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <PaymentOptionsModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </section>
  )
}
