"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import ContactModal from "./contact-modal"

const apartmentTypes = [
  { id: 0, label: "1", name: "1-комнатные" },
  { id: 1, label: "2", name: "2-комнатные" },
  { id: 2, label: "3", name: "3-комнатные" },
  { id: 3, label: "4", name: "4-комнатные" },
  { id: 4, label: "5", name: "5-комнатные" },
]

const apartments = {
  0: [
    {
      id: 10,
      type: "1-ком. квартира 42,8 м²",
      area: "42,8",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 1-1А",
      floorPlan: "/images/1room-plan-1.png",
    },
    {
      id: 11,
      type: "1-ком. квартира 51,5 м²",
      area: "51,5",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 1-3",
      floorPlan: "/images/1room-plan-2.png",
    },
    {
      id: 12,
      type: "1-ком. квартира 62 м²",
      area: "62",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 1-6",
      floorPlan: "/images/1room-plan-3.png",
    },
  ],
  1: [
    {
      id: 13,
      type: "2-ком. квартира 70,9 м²",
      area: "66,9",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 2-1В",
      floorPlan: "/images/2room-plan-1.png",
    },
    {
      id: 14,
      type: "2-ком. квартира 93,6 м²",
      area: "88,8",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 2-7Т",
      floorPlan: "/images/2room-plan-2.png",
    },
    {
      id: 15,
      type: "2-ком. квартира 99,5 м²",
      area: "122,9",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 2-8Т",
      floorPlan: "/images/2room-plan-3.png",
    },
  ],
  2: [
    {
      id: 4,
      type: "3-ком. квартира 104,5 м²",
      area: "104,5",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 3-1",
      floorPlan: "/images/3room-plan-1.png",
    },
    {
      id: 5,
      type: "3-ком. квартира 105 м²",
      area: "105",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 3-2",
      floorPlan: "/images/3room-plan-2.png",
    },
    {
      id: 6,
      type: "3-к. двухуровневая 105,7 м²",
      area: "105,7",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 3-3TK",
      floorPlan: "/images/3room-plan-3.png",
    },
    {
      id: 19,
      type: "3-к. двухуровневая 110,9 м²",
      area: "110,9",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 3-4TK",
      floorPlan: "/images/3room-plan-4.png",
    },
    {
      id: 20,
      type: "3-ком. квартира 124 м²",
      area: "124",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 3-6",
      floorPlan: "/images/3room-plan-5.png",
    },
    {
      id: 21,
      type: "3-ком. квартира 128,8 м²",
      area: "128,8",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 3-7",
      floorPlan: "/images/3room-plan-6.png",
    },
  ],
  3: [
    {
      id: 22,
      type: "4-к. двухуровневая 154,9 м²",
      area: "154,9",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 4-1TK",
      floorPlan: "/images/4room-plan-1.png",
    },
  ],
  4: [
    {
      id: 23,
      type: "5-ком. двухуровневая 222 м²",
      area: "222",
      deliveryDate: "Срок сдачи – Скоро в продаже",
      planType: "Тип планировки: 5-1TK",
      floorPlan: "/images/5room-plan-1.png",
    },
  ],
}

const apartmentJsonLd = {
  0: [
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "1-комнатная квартира, тип 1-1A (42.8 м²)",
      description:
        "Функциональная европланировка: кухня-гостиная 17,7 м², спальня 14,4 м², гардероб 4,3 м²; два санузла, продуманное хранение и светлые комнаты — оптимально для первого жилья или аренды.",
      numberOfRooms: 1,
      numberOfBathroomsTotal: 2,
      numberOfBedrooms: 1,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 42.8,
        unitCode: "MTK",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Два санузла", value: true },
        { "@type": "LocationFeatureSpecification", name: "Гардеробная", value: true },
        { "@type": "LocationFeatureSpecification", name: "Европланировка", value: true },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "1-комнатная квартира, тип 1-1 (51.5 м²)",
      description:
        "Европланировка с кухней-гостиной 21,7 м² и изолированной спальней 19,2 м²; два санузла, отдельная гардеробная 3,8 м², увеличенные окна и удобное зонирование для home-офиса.",
      numberOfRooms: 1,
      numberOfBathroomsTotal: 2,
      numberOfBedrooms: 1,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 51.5,
        unitCode: "MTK",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Европланировка", value: true },
        { "@type": "LocationFeatureSpecification", name: "Гардеробная", value: true },
        { "@type": "LocationFeatureSpecification", name: "Два санузла", value: true },
        { "@type": "LocationFeatureSpecification", name: "Большие окна", value: true },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "1-комнатная квартира, тип 1-1 (62.0 м²)",
      description:
        "Резиденция с большой кухней-гостиной 22,4 м² и спальней 16,9 м²; мастер-зона с гардеробной 8,1 м² и ванной 5,6 м², отдельная постирочная/кладовая 6,5 м² и гостевой санузел.",
      numberOfRooms: 1,
      numberOfBathroomsTotal: 2,
      numberOfBedrooms: 1,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 62.0,
        unitCode: "MTK",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Мастер-спальня с гардеробной", value: true },
        { "@type": "LocationFeatureSpecification", name: "Постирочная/кладовая", value: true },
        { "@type": "LocationFeatureSpecification", name: "Большая кухня-гостиная", value: true },
        { "@type": "LocationFeatureSpecification", name: "Европланировка", value: true },
      ],
    },
  ],
  1: [
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "2-комнатная квартира, тип 2-1В (70.9 м²)",
      description:
        "Компактная двухкомнатная квартира с гостиной 19,0 м², спальней 14,9 м², кухней 13,5 м²; просторная прихожая 9,6 м², кладовая 5,1 м², ванная 5,0 м² и отдельный санузел 3,8 м² — оптимальное решение для семьи.",
      numberOfRooms: 2,
      numberOfBathroomsTotal: 2,
      numberOfBedrooms: 1,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 70.9,
        unitCode: "MTK",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Отдельная кухня", value: true },
        { "@type": "LocationFeatureSpecification", name: "Кладовая", value: true },
        { "@type": "LocationFeatureSpecification", name: "Два санузла", value: true },
        { "@type": "LocationFeatureSpecification", name: "Просторная прихожая", value: true },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "2-комнатная квартира, тип 2-7Т (93.6 м²)",
      description:
        "Просторная двухкомнатная квартира с большой кухней-гостиной 35,5 м², двумя спальнями по 16,0 м²; ванная 6,2 м², санузел 5,8 м², гардеробные, прихожая и балкон 20,7 м² — идеально для комфортной семейной жизни.",
      numberOfRooms: 2,
      numberOfBathroomsTotal: 2,
      numberOfBedrooms: 2,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 93.6,
        unitCode: "MTK",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Большая кухня-гостиная", value: true },
        { "@type": "LocationFeatureSpecification", name: "Две спальни", value: true },
        { "@type": "LocationFeatureSpecification", name: "Балкон", value: true },
        { "@type": "LocationFeatureSpecification", name: "Гардеробные", value: true },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "2-комнатная квартира, тип 2-8Т (99.5 м²)",
      description:
        "Премиальная двухкомнатная квартира с огромной кухней-гостиной 47,1 м², спальней 15,0 м², детской 13,5 м², кабинетом 10,6 м²; кухня 8,1 м², ванная 6,2 м², санузел 4,9 м², гардеробная, кладовая и балкон 5,5 м² — роскошное пространство для жизни.",
      numberOfRooms: 2,
      numberOfBathroomsTotal: 2,
      numberOfBedrooms: 2,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 99.5,
        unitCode: "MTK",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Огромная кухня-гостиная", value: true },
        { "@type": "LocationFeatureSpecification", name: "Кабинет", value: true },
        { "@type": "LocationFeatureSpecification", name: "Детская комната", value: true },
        { "@type": "LocationFeatureSpecification", name: "Премиальная планировка", value: true },
      ],
    },
  ],
  2: [
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "3-комнатная квартира, тип 3-1 (104.5 м²)",
      description:
        "Просторная гостиная-кухня и две изолированные спальни; два санузла, гардеробные и продуманные места хранения. Формат для семейного сценария с возможностью кабинета.",
      numberOfRooms: 3,
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 2,
      floorSize: { "@type": "QuantitativeValue", value: 104.5, unitCode: "MTK" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Просторная гостиная-кухня", value: true },
        { "@type": "LocationFeatureSpecification", name: "Две изолированные спальни", value: true },
        { "@type": "LocationFeatureSpecification", name: "Гардеробные", value: true },
        { "@type": "LocationFeatureSpecification", name: "Два санузла", value: true },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "3-комнатная квартира, тип 3-2 (105.0 м²)",
      description:
        "Большая кухня‑гостиная, мастер‑спальня с гардеробной, отдельная детская/кабинет; два полноценных санузла. Светлая угловая зона дневной активности.",
      numberOfRooms: 3,
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 2,
      floorSize: { "@type": "QuantitativeValue", value: 105.0, unitCode: "MTK" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Большая кухня-гостиная", value: true },
        { "@type": "LocationFeatureSpecification", name: "Мастер-спальня с гардеробной", value: true },
        { "@type": "LocationFeatureSpecification", name: "Детская/кабинет", value: true },
        { "@type": "LocationFeatureSpecification", name: "Угловая планировка", value: true },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "3-комнатная двухуровневая, тип 3-3TK (105.7 м²)",
      description:
        "Два уровня: внизу — кухня‑гостиная и мастер‑блок, наверху — вторая гостиная/кабинет и спальня с выходом на террасу. Два санузла, гардеробные, приватные видовые зоны.",
      numberOfRooms: 3,
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 2,
      floorSize: { "@type": "QuantitativeValue", value: 105.7, unitCode: "MTK" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Двухуровневая планировка", value: true },
        { "@type": "LocationFeatureSpecification", name: "Терраса", value: true },
        { "@type": "LocationFeatureSpecification", name: "Мастер-блок", value: true },
        { "@type": "LocationFeatureSpecification", name: "Вторая гостиная/кабинет", value: true },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "3-комнатная двухуровневая, тип 3-4TK (110.9 м²)",
      description:
        "Представительная двухуровневая резиденция: кухня‑гостиная 30+ м², комфортные спальни на втором уровне, два санузла и терраса. Формат для ценителей приватности и видов.",
      numberOfRooms: 3,
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 2,
      floorSize: { "@type": "QuantitativeValue", value: 110.9, unitCode: "MTK" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Представительная резиденция", value: true },
        { "@type": "LocationFeatureSpecification", name: "Двухуровневая планировка", value: true },
        { "@type": "LocationFeatureSpecification", name: "Терраса", value: true },
        { "@type": "LocationFeatureSpecification", name: "Приватность и виды", value: true },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "3-комнатная квартира, тип 3-6 (124.0 м²)",
      description:
        "Угловая планировка с гостиной 38+ м², мастер‑спальней и отдельной детской/кабинетом; три санузла и увеличенные системы хранения. Комфорт для семьи с разными режимами дня.",
      numberOfRooms: 3,
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 3,
      floorSize: { "@type": "QuantitativeValue", value: 124.0, unitCode: "MTK" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Угловая планировка", value: true },
        { "@type": "LocationFeatureSpecification", name: "Большая гостиная 38+ м²", value: true },
        { "@type": "LocationFeatureSpecification", name: "Три санузла", value: true },
        { "@type": "LocationFeatureSpecification", name: "Увеличенные системы хранения", value: true },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "3-комнатная квартира, тип 3-7 (128.8 м²)",
      description:
        "Панорамная гостиная 37+ м², мастер‑спальня 21+ м², две дополнительные комнаты; три санузла, гардеробные и хозяйственный блок. Для требовательного семейного сценария.",
      numberOfRooms: 3,
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 3,
      floorSize: { "@type": "QuantitativeValue", value: 128.8, unitCode: "MTK" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Панорамная гостиная 37+ м²", value: true },
        { "@type": "LocationFeatureSpecification", name: "Мастер-спальня 21+ м²", value: true },
        { "@type": "LocationFeatureSpecification", name: "Три санузла", value: true },
        { "@type": "LocationFeatureSpecification", name: "Хозяйственный блок", value: true },
      ],
    },
  ],
  3: [
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "4-комнатная двухуровневая, тип 4-1TK (154.9 м²)",
      description:
        "Представительная двухуровневая резиденция с гостиной-кухней 42,1 м², тремя спальнями, вторым светом и двумя террасами; четыре санузла, гардеробные и хозяйственные помещения для комфортной семейной жизни.",
      numberOfRooms: 4,
      numberOfBedrooms: 4,
      numberOfBathroomsTotal: 4,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 154.9,
        unitCode: "MTK",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Двухуровневая планировка", value: true },
        { "@type": "LocationFeatureSpecification", name: "Второй свет", value: true },
        { "@type": "LocationFeatureSpecification", name: "Две террасы", value: true },
        { "@type": "LocationFeatureSpecification", name: "Четыре санузла", value: true },
        { "@type": "LocationFeatureSpecification", name: "Представительная резиденция", value: true },
      ],
    },
  ],
  4: [
    {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "5-комнатная двухуровневая, тип 5-1TK (222 м²)",
      description:
        "Пентхаус формата townhouse: гостиная-кухня 68+ м² и дневная зона на первом уровне, на втором — семейная гостиная 34,3 м², четыре спальни, несколько санузлов, гардеробные и большие террасы. Второй свет и панорамное остекление создают эффект загородного дома в центре Петроградской стороны.",
      numberOfRooms: 5,
      numberOfBedrooms: 5,
      numberOfBathroomsTotal: 4,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 222,
        unitCode: "MTK",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Пентхаус формата townhouse", value: true },
        { "@type": "LocationFeatureSpecification", name: "Двухуровневая планировка", value: true },
        { "@type": "LocationFeatureSpecification", name: "Второй свет", value: true },
        { "@type": "LocationFeatureSpecification", name: "Панорамное остекление", value: true },
        { "@type": "LocationFeatureSpecification", name: "Большие террасы", value: true },
        { "@type": "LocationFeatureSpecification", name: "Семейная гостиная", value: true },
      ],
    },
  ],
}

const apartmentAltTexts = {
  0: [
    "Планировка 1-комнатной квартиры 42.8 м² тип 1-1A в ЖК Коллекционер - функциональная европланировка с кухней-гостиной 17.7 м², спальней 14.4 м², гардеробом и двумя санузлами",
    "Планировка 1-комнатной квартиры 51.5 м² тип 1-1 в ЖК Коллекционер - европланировка с кухней-гостиной 21.7 м², изолированной спальней 19.2 м², гардеробной и двумя санузлами",
    "Планировка 1-комнатной квартиры 62.0 м² тип 1-1 в ЖК Коллекционер - резиденция с кухней-гостиной 22.4 м², спальней 16.9 м², мастер-зоной с гардеробной 8.1 м² и постирочной",
  ],
  1: [
    "Планировка 2-комнатной квартиры 66.9 м² тип 2-1А в ЖК Коллекционер - компактная планировка с гостиной 19.0 м², спальней 14.9 м², кухней 13.5 м², прихожей 9.6 м² и кладовой",
    "Планировка 2-комнатной квартиры 88.8 м² тип 2-1В в ЖК Коллекционер - просторная планировка с кухней-гостиной 35.5 м², двумя спальнями по 16.0 м², балконом 20.7 м² и гардеробными",
    "Планировка 2-комнатной квартиры 122.9 м² тип 2-1С в ЖК Коллекционер - премиальная планировка с кухней-гостиной 47.1 м², спальней 15.0 м², детской 13.5 м², кабинетом 10.6 м² и балконом",
  ],
  2: [
    "Планировка 3-комнатной квартиры 104.5 м² тип 3-1 в ЖК Обь - просторная кухня-гостиная 38.3 м², две спальни (14.7 и 13.8 м²), два санузла и гардеробные",
    "Планировка 3-комнатной квартиры 105.0 м² тип 3-2 в ЖК Обь - большая кухня-гостиная 28.0 м², мастер-спальня 17.7 м², детская 14.0 м², два санузла",
    "Планировка 3-комнатной двухуровневой квартиры 105.7 м² тип 3-3TK в ЖК Обь - кухня-гостиная 30.6 м² на первом уровне, спальни 15.4 и 15.9 м² на втором уровне с террасой",
    "Планировка 3-комнатной двухуровневой квартиры 110.9 м² тип 3-4TK в ЖК Обь - кухня-гостиная 31.0 м² на первом уровне, спальни 19.6 и 12.0 м² на втором уровне с террасой",
    "Планировка 3-комнатной квартиры 124.0 м² тип 3-6 в ЖК Обь - угловая планировка с гостиной 40.8 м², спальнями 17.4 и 19.1 м², тремя санузлами и гардеробными",
    "Планировка 3-комнатной квартиры 128.8 м² тип 3-7 в ЖК Обь - панорамная гостиная 37.2 м², мастер-спальня 21.6 м², две дополнительные комнаты 13.6 и 16.3 м², три санузла",
  ],
  3: [
    "Планировка 4-комнатной двухуровневой квартиры 154.9 м² тип 4-1TK в ЖК Обь - представительная резиденция с кухней-гостиной 42.1 м², тремя спальнями (17.7, 12.6, 17.8, 14.6 м²), четырьмя санузлами, вторым светом и двумя террасами",
  ],
  4: [
    "Планировка 5-комнатной двухуровневой квартиры-пентхауса 222 м² тип 5-1TK в ЖК Обь - townhouse формат с кухней-гостиной 68.1 м² на первом уровне, семейной гостиной 34.3 м², четырьмя спальнями (26.8, 15.7, 12.8, 12.5 м²), большими террасами 41.3 м², вторым светом и панорамным остеклением",
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
      {activeType === 0 && (
        <>
          {apartmentJsonLd[0].map((jsonLd, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            />
          ))}
        </>
      )}

      {activeType === 1 && (
        <>
          {apartmentJsonLd[1].map((jsonLd, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            />
          ))}
        </>
      )}

      {activeType === 2 && (
        <>
          {apartmentJsonLd[2].map((jsonLd, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            />
          ))}
        </>
      )}

      {activeType === 3 && (
        <>
          {apartmentJsonLd[3].map((jsonLd, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            />
          ))}
        </>
      )}

      {activeType === 4 && (
        <>
          {apartmentJsonLd[4].map((jsonLd, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            />
          ))}
        </>
      )}

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
                В клубном доме «Коллекционер» представлены квартиры площадью от 43 до 222 м², включая функциональные
                европланировки, просторные одно- и многокомнатные квартиры, а также эксклюзивные двухуровневые и
                мансардные резиденции с высотой потолков до 6,4 м. Особое внимание уделено максимальному естественному
                освещению: панорамные окна и просторные террасы с видами на исторический центр Петербурга создают
                атмосферу уюта и простора.
              </p>

              <div>
                <p className="mb-4 font-medium">Особенности планировок:</p>
                <ul className="text-left max-w-2xl space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>Разнообразие форматов — от компактных до представительских с четырьмя и пятью спальнями</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>Двухуровневые квартиры с люкарнами и просторными террасами до 30 м²</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>Оптимальное зонирование для комфортной жизни и работы</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>
                      Высококачественные инженерные системы: индивидуальная вентиляция, эффективное отопление, чистая
                      вода и энергосбережение
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                Все квартиры сдаются с подготовкой под индивидуальный дизайн и современные технологии комфорта, что
                позволяет реализовать любые интерьерные решения и создать уникальное жилое пространство под ваши
                требования.
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
          <div
            className={`grid gap-8 max-w-7xl mx-auto ${
              activeType === 4 ? "grid-cols-1 justify-items-center" : "grid-cols-1 lg:grid-cols-3"
            }`}
          >
            {apartments[activeType as keyof typeof apartments].map((apartment, index) => (
              <Card
                key={apartment.id}
                className={`overflow-hidden border-0 shadow-lg ${activeType === 4 ? "w-full max-w-4xl" : ""}`}
              >
                <div
                  className={`relative bg-white flex items-center justify-center p-4 ${
                    activeType === 4 ? "h-96 md:h-80" : "h-80"
                  }`}
                >
                  <Image
                    src={apartment.floorPlan || "/placeholder.svg"}
                    alt={
                      (activeType === 0 && apartmentAltTexts[0][index]) ||
                      (activeType === 1 && apartmentAltTexts[1][index]) ||
                      (activeType === 2 && apartmentAltTexts[2][index]) ||
                      (activeType === 3 && apartmentAltTexts[3][index]) ||
                      (activeType === 4 && apartmentAltTexts[4][index])
                        ? activeType === 0
                          ? apartmentAltTexts[0][index]
                          : activeType === 1
                            ? apartmentAltTexts[1][index]
                            : activeType === 2
                              ? apartmentAltTexts[2][index]
                              : activeType === 3
                                ? apartmentAltTexts[3][index]
                                : apartmentAltTexts[4][index]
                        : `Планировка ${apartment.type} в ЖК Обь - ${apartment.planType} с оптимальным зонированием пространства`
                    }
                    width={activeType === 4 ? 800 : 400}
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
