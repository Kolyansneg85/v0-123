"use client"

import Image from "next/image"
import { useState } from "react"
import PresentationModal from "./presentation-modal"

export default function Hero() {
  const [isPresentationModalOpen, setIsPresentationModalOpen] = useState(false)

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "ЖК Коллекционер",
    description: "Клубный дом «Коллекционер» в Петроградском районе Санкт-Петербурга",
    address: {
      "@type": "PostalAddress",
      streetAddress: "улица Чапыгина 4",
      addressLocality: "Санкт-Петербург",
      addressRegion: "Санкт-Петербург",
      addressCountry: "RU",
    },
    url: "https://kollektsioner-dom.ru",
    telephone: "+7 (812) 660-56-50",
    priceRange: "От 30792000 до 79276000",
    areaServed: "Петроградский район",
    serviceType: "Продажа недвижимости",
  }

  const realEstateJsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Клубный дом «Коллекционер»",
    description: "Премиальный жилой комплекс в историческом центре Санкт-Петербурга",
    address: {
      "@type": "PostalAddress",
      streetAddress: "улица Чапыгина 4",
      addressLocality: "Санкт-Петербург",
      addressRegion: "Санкт-Петербург",
      postalCode: "197046",
      addressCountry: "RU",
    },
    numberOfAccommodationUnits: 69,
    floorSize: {
      "@type": "QuantitativeValue",
      minValue: 42.8,
      unitCode: "MTK",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Подземный паркинг", value: true },
      { "@type": "LocationFeatureSpecification", name: "Консьерж-сервис", value: true },
      { "@type": "LocationFeatureSpecification", name: "Пинакотека", value: true },
      { "@type": "LocationFeatureSpecification", name: "Приватный двор", value: true },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateJsonLd) }} />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-building-light.webp"
            alt="ЖК Коллекционер"
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-history-pro font-medium mb-8 leading-tight tracking-wide">
            Клубный дом «Коллекционер»
          </h1>

          <div className="space-y-4 mb-8 md:mb-12 text-lg md:text-xl font-light">
            <p className="opacity-90">В Петроградском районе Санкт-Петербурга</p>
            <p className="opacity-90">На улице Чапыгина 4</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 text-center max-w-4xl mx-auto">
            <div className="space-y-2">
              <p className="text-sm opacity-75 uppercase tracking-wide">Срок сдачи</p>
              <p className="text-xl font-medium">III кв. 2028</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm opacity-75 uppercase tracking-wide">Стоимость</p>
              <p className="text-xl font-medium">от 30.79 млн руб.</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm opacity-75 uppercase tracking-wide">Площадь</p>
              <p className="text-xl font-medium">от 42.8 м²</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-0">
            <button
              onClick={() => setIsPresentationModalOpen(true)}
              style={{
                background: "rgba(255, 255, 255, 0.2) !important",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.8)",
                borderRadius: "22px",
                padding: "16px 48px",
                color: "white !important",
                fontSize: "18px",
                fontWeight: "300",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty("background", "rgba(0, 0, 0, 0.8)", "important")
                e.currentTarget.style.setProperty("color", "white", "important")
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty("background", "rgba(255, 255, 255, 0.2)", "important")
                e.currentTarget.style.setProperty("color", "white", "important")
              }}
            >
              ПРЕЗЕНТАЦИЯ
            </button>
          </div>
        </div>
      </section>

      <PresentationModal isOpen={isPresentationModalOpen} onClose={() => setIsPresentationModalOpen(false)} />
    </>
  )
}
