"use client"

import Image from "next/image"
import { useState } from "react"
import PresentationModal from "./presentation-modal"

export default function Hero() {
  const [isPresentationModalOpen, setIsPresentationModalOpen] = useState(false)

  return (
    <>
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
          <div className="absolute inset-0 bg-black/10" />
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
              <p className="text-xl font-medium">Скоро в продаже</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm opacity-75 uppercase tracking-wide">Стоимость</p>
              <p className="text-xl font-medium">Цена по запросу</p>
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
