"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import ContactModal from "./contact-modal"

const apartmentTypes = [
  { id: 0, label: "С", name: "Студии" },
  { id: 1, label: "1", name: "1-комнатные" },
  { id: 2, label: "2", name: "2-комнатные" },
  { id: 3, label: "3", name: "3-комнатные" },
]

const apartments = {
  0: [
    {
      id: 10,
      type: "Студия 22,8 м²",
      area: "23,2",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: 1C-2A",
      floorPlan: "/images/studio-plan-3.png",
    },
    {
      id: 11,
      type: "Студия 22,9 м²",
      area: "22,9",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: 1C-2A",
      floorPlan: "/images/studio-plan-2.png",
    },
    {
      id: 12,
      type: "Студия 23,2 м²",
      area: "22,9",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: 1C-2B",
      floorPlan: "/images/studio-plan-1.png",
    },
  ],
  1: [
    {
      id: 13,
      type: "1-ком. квартира 29,4 м²",
      area: "29,4",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: 1-1В",
      floorPlan: "/images/floor-plan-1d.png",
    },
    {
      id: 14,
      type: "1-ком. квартира 35,7 м²",
      area: "35,7",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: 1-9",
      floorPlan: "/images/floor-plan-1e.png",
    },
    {
      id: 15,
      type: "1-ком. квартира 38,8 м²",
      area: "41,5",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: 1-17",
      floorPlan: "/images/floor-plan-1f.png",
    },
  ],
  2: [
    {
      id: 4,
      type: "2-ком. квартира 56,2 м²",
      area: "56,2",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: 2-6",
      floorPlan: "/images/floor-plan-2a.png",
    },
    {
      id: 5,
      type: "2-ком. квартира 67,6 м²",
      area: "67,6",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: 2-14",
      floorPlan: "/images/floor-plan-2b.png",
    },
    {
      id: 6,
      type: "2-ком. квартира 61,7 м²",
      area: "76,6",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: 2-11",
      floorPlan: "/images/floor-plan-2c.png",
    },
  ],
  3: [
    {
      id: 7,
      type: "3-ком. квартира 70,3 м²",
      area: "70,3",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: А1/3-1",
      floorPlan: "/images/floor-plan-3a.png",
    },
    {
      id: 8,
      type: "3-ком. квартира 76,1 м²",
      area: "76,1",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: Б2/3-3",
      floorPlan: "/images/floor-plan-3b.png",
    },
    {
      id: 9,
      type: "3-ком. квартира 76,3 м²",
      area: "76,3",
      deliveryDate: "Срок сдачи – II квартал 2028",
      planType: "Тип планировки: В1/3-5",
      floorPlan: "/images/floor-plan-3c.png",
    },
  ],
}

export default function Apartments() {
  const [activeType, setActiveType] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedApartment, setSelectedApartment] = useState("")

  const openModal = (apartmentType: string) => {
    setSelectedApartment(apartmentType)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="apartments" className="pt-32 pb-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Изменил цвет заголовка с text-gray-900 на text-gray-800 для лучшего контраста */}
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide text-gray-800 font-history-pro">
              ПЛАНИРОВКИ
            </h2>
            <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
            <div className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed space-y-6 text-left">
              <p>
                В ЖК «Гений» представлены квартиры от студий 23 м² до четырехкомнатных квартир 85 м². Все помещения
                сдаются с отделкой White Box — идеальная основа для воплощения любых дизайнерских идей.
              </p>

              <div>
                <p className="mb-4 font-medium">Особенности планировок:</p>
                <ul className="text-left max-w-2xl space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>Высокие потолки 2,73 м на типовых этажах, 3,03 м — на верхних</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>Панорамные окна и лоджии с видами на город</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>6 квартир с террасами до 12,8 м²</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>Европланировки с оптимальным зонированием</span>
                  </li>
                </ul>
              </div>

              <p>
                Все квартиры оборудованы качественными инженерными системами: четырехступенчатая очистка воды,
                коллекторное отопление, приточно-вытяжная вентиляция.
              </p>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-16">
            <div className="flex bg-gray-100 rounded-[20px] p-1">
              {apartmentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`px-8 py-3 rounded-[18px] text-lg font-medium transition-all duration-300 ${
                    activeType === type.id ? "bg-[#a8996e] text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Apartments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {apartments[activeType as keyof typeof apartments].map((apartment) => (
              <Card key={apartment.id} className="overflow-hidden border-0 shadow-lg">
                <div className={`relative bg-white flex items-center justify-center p-4 h-80`}>
                  <Image
                    src={apartment.floorPlan || "/placeholder.svg"}
                    alt={`Планировка ${apartment.type} в ЖК Гений - ${apartment.planType} с оптимальным зонированием пространства`}
                    width={400}
                    height={300}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>

                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-medium mb-2 text-gray-900">{apartment.type}</h3>
                  <p className="text-gray-600 text-sm mb-1">{apartment.deliveryDate}</p>
                  <p className="text-gray-600 text-sm mb-6">{apartment.planType}</p>

                  <button
                    onClick={() => openModal(apartment.type)}
                    className="w-full bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors"
                  >
                    Узнать цену
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        buttonText={`Узнать цену - ${selectedApartment}`}
      />
    </>
  )
}
