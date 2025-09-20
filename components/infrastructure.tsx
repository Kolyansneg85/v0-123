"use client"

import type React from "react"
import { validatePhoneNumber, formatPhoneError } from "@/lib/phone-validation"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Infrastructure() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    wishes: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [phoneError, setPhoneError] = useState("")

  const courtImages = [
    {
      src: "/images/courtyard-2.jpeg",
      alt: "Женщина в деловом костюме в круглом кресле-коконе на фоне зеленой стены",
    },
    {
      src: "/images/courtyard-3.jpeg",
      alt: "Вечерний вид двора с людьми под навесом и современным освещением",
    },
    {
      src: "/images/courtyard-4.jpeg",
      alt: "Семья с детьми в дневном дворе с детской площадкой и зонами отдыха",
    },
    {
      src: "/images/courtyard-5.jpeg",
      alt: "Вечерний двор с мужчиной, идущим по дорожке между зонами отдыха",
    },
    {
      src: "/images/courtyard-6.jpeg",
      alt: "Люди в круглых креслах-коконах среди пышной растительности двора",
    },
  ]

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

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
          source: "Инфраструктура и пространство",
          formId: "инфраструктура-двор",
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % courtImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + courtImages.length) % courtImages.length)
  }

  const infrastructureJsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Инфраструктура и пространства «Коллекционера»",
    description:
      "Камерная инфраструктура клубного дома: лобби с 4-метровыми потолками, welcome-зоной, две переговорные, кофе‑поинт и пинакотека; закрытый двор‑патио без машин с ландшафтным садом, рабочими зонами на воздухе и детской площадкой; подземный паркинг с лифтом и кладовыми; современные инженерные системы — индивидуальная вентиляция в квартирах, энергосберегающие фасады и ИТП; контроль доступа и видеонаблюдение, Wi-Fi на территории.",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Лобби с 4-метровыми потолками и welcome-зоной", value: true },
      { "@type": "LocationFeatureSpecification", name: "Две переговорные комнаты", value: true },
      { "@type": "LocationFeatureSpecification", name: "Кофе‑поинт для жителей и гостей", value: true },
      { "@type": "LocationFeatureSpecification", name: "Пинакотека — галерея искусств", value: true },
      { "@type": "LocationFeatureSpecification", name: "Приватный двор‑патио без машин", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ландшафтный сад и зоны тихого отдыха", value: true },
      { "@type": "LocationFeatureSpecification", name: "Рабочие пространства на свежем воздухе с Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Детская площадка", value: true },
      { "@type": "LocationFeatureSpecification", name: "Подземный паркинг с лифтом и кладовыми", value: true },
      { "@type": "LocationFeatureSpecification", name: "Индивидуальная вентиляция в квартирах", value: true },
      { "@type": "LocationFeatureSpecification", name: "Энергосберегающие фасады и ИТП", value: true },
      { "@type": "LocationFeatureSpecification", name: "СКУД и видеонаблюдение 24/7", value: true },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(infrastructureJsonLd),
        }}
      />

      <section id="infrastructure" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-700 uppercase font-history-pro">
              ИНФРАСТРУКТУРА И ПРОСТРАНСТВО
            </h2>
            <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/courtyard-1.jpeg"
                  alt="Приватный двор-патио клубного дома Коллекционер с зонами отдыха и ландшафтным дизайном"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Камерный формат дома поддержан продуманной инфраструктурой, ориентированной на ежедневный комфорт и
                приватность резидентов. В лобби — 4-метровые потолки, welcome-зона, две переговорные комнаты для встреч
                и работы, кофе‑поинт для жителей и гостей. Центральный акцент — пинакотека с коллекцией живописи и
                скульптуры, которая создаёт атмосферу клуба и подчёркивает статус проекта.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Внутренний двор‑патио — закрытая от посторонних зелёная территория без машин с ландшафтным садом, зонами
                отдыха и тихой работы на воздухе. Для семей предусмотрены детская площадка с натуральными материалами и
                мягкими покрытиями, освещение двора в вечернее время и Wi-Fi на всей территории. В доме — подземный
                паркинг с лифтом, кладовые и помещения для велосипедов и колясок, единый узел доступа к
                высокоскоростному интернету, система контроля доступа и видеонаблюдения, а также современные инженерные
                решения: индивидуальная вентиляция в квартирах, энергосберегающие фасады и собственный тепловой пункт.
              </p>
            </div>
          </div>

          {/* Centered Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={openModal}
              className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors"
            >
              Подробнее
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-[#a8996e] uppercase font-history-pro">
                  ПРИВАТНЫЙ ДВОР-ПАТИО
                </h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-2xl">
                  ×
                </button>
              </div>

              {/* Gallery Section */}
              <div className="mb-8">
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={courtImages[currentImageIndex].src || "/placeholder.svg"}
                    alt={courtImages[currentImageIndex].alt}
                    fill
                    className="object-cover"
                  />

                  {/* Navigation arrows */}
                  {courtImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>

                {/* Image indicators */}
                {courtImages.length > 1 && (
                  <div className="flex justify-center space-x-2">
                    {courtImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-[#a8996e]" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Description Text */}
              <div className="mb-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Приватный двор-патио — это сердце клубного дома «Коллекционер», закрытое от городской суеты
                  пространство без автомобилей, где каждый элемент продуман для комфорта резидентов. Ландшафтный дизайн
                  создает атмосферу уединенного сада в центре Петроградской стороны.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Здесь расположены зоны для тихого отдыха с удобной мебелью, рабочие пространства на свежем воздухе с
                  Wi-Fi покрытием, детская площадка с натуральными материалами и мягкими покрытиями. Вечернее освещение
                  создает особую атмосферу для прогулок и встреч с соседями.
                </p>
              </div>

              {/* Contact Form */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-[#a8996e] mb-4">Узнать больше о доме</h3>

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
                    className="bg-gray-50 border-gray-200 focus:border-[#a8996e] rounded-[22px]"
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
                      autoComplete="off"
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
            </div>
          </div>
        </div>
      )}
    </>
  )
}
