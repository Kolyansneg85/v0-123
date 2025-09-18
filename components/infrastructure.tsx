"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

export default function Infrastructure() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <>
      <section id="infrastructure" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-700 uppercase font-history-pro">
              ИНФРАСТРУКТУРА
            </h2>
            <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/infrastructure-area.jpeg"
                  alt="Инфраструктура ЖК Гений"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Невский район отличается развитой социальной и бытовой инфраструктурой: поблизости функционируют школы,
                детские сады, супермаркеты, фитнес-центры, медицинские учреждения, крупные торговые комплексы и
                разнообразные зоны отдыха. Особое внимание уделяется гармонии городской среды и комфорту — кроме уже
                существующих парков и скверов, в непосредственной близости от ЖК развивается собственная инфраструктура:
                коммерческие помещения, современный детский сад, приватный двор без машин с ландшафтным дизайном и
                зонами для спорта и досуга.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Весь район обладает статусом одного из ключевых транспортных и логистических узлов города, а вложения в
                местное развитие делают локацию привлекательной как для постоянного проживания, так и для инвестиций.
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
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-[#a8996e] uppercase font-history-pro">ОКРУЖЕНИЕ</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-2xl">
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Text */}
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    Невский район считается одним из самых комфортных для жизни. Его правая часть активно застраивалась
                    в 70-е годы прошлого века, когда идеи гармоничной городской среды становились важным направлением в
                    градостроительстве. Тогда в каждом микрорайоне предусматривали парки, магазины и детские учреждения
                    в шаговой доступности.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Сегодня жилой комплекс «Гений» окружён школами и детскими садами, удобными торговыми центрами,
                    спортивными клубами, маршрутами для прогулок и приятными местами для отдыха.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    При желании за 20 минут можно доехать по прямой линии метро до Невского проспекта или за несколько
                    минут пешком выйти к Неве — главному украшению района.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Хотите ближе познакомиться с этой локацией?{" "}
                    <a href="tel:+78126605651" className="text-[#a8996e] hover:underline">
                      Запишитесь на экскурсию
                    </a>{" "}
                    в ЖК «Гений».
                  </p>

                  {/* Distance Info */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-8">
                      <div>
                        <div className="text-3xl font-light text-[#a8996e] italic">790 метров</div>
                        <div className="text-sm text-gray-500">Ст. «Улица Дыбенко»</div>
                      </div>
                      <div>
                        <div className="text-3xl font-light text-[#a8996e] italic">3 км</div>
                        <div className="text-sm text-gray-500">КАД</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Map */}
                <div className="relative">
                  <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0847-UmWIWzoJVYfCC9sboAjxuFsqO57n2u.jpeg"
                      alt="Карта окружения ЖК Гений"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
