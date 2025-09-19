"use client"

import Image from "next/image"
import { useState } from "react"
import PaymentOptionsModal from "./payment-options-modal"

export default function ProjectIntro() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Клубный дом «Коллекционер»",
    alternateName: "Коллекционер — клубный дом на Петроградской стороне",
    description:
      "Камерный дом в сердце Петроградского района Санкт‑Петербурга, воплощающий эстетику коллекционного искусства и изысканного стиля. Эклектичные фасады из натурального камня с башенками, латунными инкрустациями и крупными карнизами. Для ценителей приватности: авторское лобби с пинакотекой, панорамные окна, приватный зелёный двор‑патио и современные инженерные решения.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Чапыгина, 4",
      addressLocality: "Санкт-Петербург",
      postalCode: "197022",
      addressCountry: "RU",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "69 коллекционных квартир", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Мансардные и двухуровневые форматы с террасами и высоким потолком",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Авторское лобби с пинакотекой", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Закрытый двор‑патио без машин, зоны отдыха и детские площадки",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Коворкинг‑зоны и Wi‑Fi на территории", value: true },
      { "@type": "LocationFeatureSpecification", name: "Подземный паркинг", value: true },
      { "@type": "LocationFeatureSpecification", name: "Индивидуальная вентиляция в квартирах", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Энергоэффективные фасады и высокий уровень безопасности",
        value: true,
      },
    ],
    keywords:
      "Клубный дом Коллекционер, Петроградская сторона, эклектика, пинакотека, мансардные квартиры, двухуровневые квартиры, террасы, приватный двор‑патио, подземный паркинг, высокие потолки",
    hasMap: "https://yandex.ru/maps/?text=Санкт-Петербург%2C%20ул.%20Чапыгина%204",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-16 bg-stone-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-light text-[#a8996e] leading-tight font-history-pro">
                Клубный дом Коллекционер в Петроградском районе
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Коллекционер расположился в самом сердце Петроградского района Санкт-Петербурга, воплощающая эстетику
                  коллекционного искусства и изысканного стиля. Архитектура комплекса выполнена в сложном эклектичном
                  стиле с использованием натурального камня, выразительных башенок, латунных инкрустаций и крупных
                  карнизов, что придает дому уникальный и запоминающийся облик. Каждая деталь продумана для ценителей
                  приватности и красивой жизни — авторский лобби с пинакотекой, панорамные окна, приватный зеленый
                  двор-патио, а также современные инженерные решения для максимального комфорта.
                </p>

                <p>
                  В клубном доме всего 69 коллекционных квартир, включая эксклюзивные мансардные и двухуровневые форматы
                  с террасами и увеличенной высотой потолков, а также продуманную инфраструктуру: закрытый двор с зонами
                  для отдыха, коворкинг с Wi-Fi, детские площадки и собственный кофе-поинт. Инновационные системы
                  вентиляции, энергоэффективные фасады, подземный паркинг и высокий уровень безопасности становятся
                  стандартом для нового поколения клубных домов, где каждый день — часть вашей личной коллекции
                  впечатлений.
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
                <Image src="/images/project-intro-building.webp" alt="ЖК Обь" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PaymentOptionsModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  )
}
