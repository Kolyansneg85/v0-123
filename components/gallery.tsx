"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/images/gallery/exterior-evening.jpg",
    alt: "Вечерний вид на жилой комплекс с современной архитектурой и золотистым освещением фасадов",
  },
  {
    src: "/images/gallery/aerial-view.jpg",
    alt: "Панорамный вид с высоты птичьего полета на весь жилой комплекс и окружающую инфраструктуру",
  },
  {
    src: "/images/gallery/sunset-towers.jpg",
    alt: "Жилые башни комплекса на фоне драматичного закатного неба с теплым освещением",
  },
  {
    src: "/images/gallery/playground.jpg",
    alt: "Современная детская игровая площадка во внутреннем дворе с безопасным покрытием и ландшафтным дизайном",
  },
  {
    src: "/images/gallery/commercial-street.jpg",
    alt: "Коммерческие помещения на первых этажах зданий с рестораном и удобной пешеходной зоной",
  },
  {
    src: "/images/gallery/evening-courtyard.jpg",
    alt: "Уютный внутренний двор с вечерним освещением, зелеными насаждениями и зонами отдыха для жителей",
  },
]

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const previousImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      setTimeout(() => setIsTransitioning(false), 100)
    }, 400)
  }

  const nextImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      setTimeout(() => setIsTransitioning(false), 100)
    }, 400)
  }

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentImage) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImage(index)
      setTimeout(() => setIsTransitioning(false), 100)
    }, 400)
  }

  return (
    <section id="gallery" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide text-gray-900 font-history-pro">ГАЛЕРЕЯ</h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Посмотрите, как будет выглядеть ваш новый дом и прилегающая территория.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Предыдущее изображение"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Следующее изображение"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Main Image */}
          <div className="relative h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-out h-full"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
                filter: isTransitioning ? "brightness(0.95)" : "brightness(1)",
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 ease-out"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm transition-opacity duration-300">
            {currentImage + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                currentImage === index ? "bg-[#a8996e] scale-125" : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
              aria-label={`Перейти к изображению ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors">
            Смотреть все фото
          </button>
        </div>
      </div>
    </section>
  )
}
