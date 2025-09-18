"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "Когда планируется сдача жилого комплекса?",
    answer:
      "Сдача ЖК 'Гений' запланирована на 2 квартал 2028 года. Все разрешительные документы получены, строительство ведется согласно утвержденному графику.",
  },
  {
    question: "Какие способы оплаты доступны при покупке квартиры?",
    answer:
      "Предлагается несколько вариантов оплаты: 100% оплата. Беспроцентная рассрочка от застройщика — разбитая на удобные суммы выплата стоимости квартиры без переплат на срок до 2,5 лет. Обычно первый взнос составляет 20-30%, остальная сумма оплачивается равными ежемесячными или ежеквартальными платежами до марта 2028 года. Ипотечное кредитование (работаем с ведущими банками), материнский капитал, военная ипотека. Программа Trade-in — обмен имеющейся недвижимости с первым взносом от 10% и остатком оплаты позже, по цене 100%-й оплаты без скидок.",
  },
  {
    question: "Есть ли парковочные места и сколько они стоят?",
    answer:
      "В комплексе предусмотрена подземная парковка на 601 машиноместо. 32 из них, будут оснащены зарядками для элекроавтомобилей. Стоимость парковочного места будет известна позже. Они пока не продаются. Также имеются гостевые парковочные места на территории.",
  },
  {
    question: "Какая отделка предусмотрена в квартирах?",
    answer:
      "Все квартиры сдаются с предчистовой отделкой (White Box): полы будут залиты плавающей стяжкой, стены подготовлены под покраску — оштукатурены и ошпаклеваны, установлена электрическая разводка, розетки, выключатели, домофон, оконные откосы обшиты гипсокартоном, ошпаклеваны и покрашены. Отделка White Box позволяет быстро и удобно приступить к реализации собственного дизайн-проекта и выполнить финишный ремонт по своему вкусу и стилю.",
  },
  {
    question: "Можно ли получить ипотеку на льготных условиях?",
    answer:
      "Да, мы аккредитованы в крупнейших банках России. Доступны программы льготной ипотеки: семейная ипотека под 6%, IT-ипотека под 5%, дальневосточная ипотека под 2%. Наши специалисты помогут подобрать оптимальную программу.",
  },
  {
    question: "Какая инфраструктура будет на территории комплекса?",
    answer:
      "На территории комплекса: детские и спортивные площадки, зона отдыха с беседками, фитнес-центр, консьерж-сервис, магазины на первых этажах, кафе, медицинский центр, подземная парковка.",
  },
  {
    question: "Есть ли рядом школы и детские сады?",
    answer:
      "В шаговой доступности: детский сад №45 (300м), школа №12 с углубленным изучением английского языка (500м), гимназия №7 (800м). Планируется строительство нового детского сада в 2026 году.",
  },
  {
    question: "Какой класс энергоэффективности у здания?",
    answer:
      "Жилой комплекс имеет класс энергоэффективности A+. Установлены энергосберегающие окна, современная система отопления и вентиляции, что обеспечивает низкие коммунальные платежи.",
  },
  {
    question: "Можно ли посмотреть квартиру до покупки?",
    answer:
      "Да, у нас работает шоу-рум с образцами всех типов планировок. Также доступны виртуальные туры по квартирам. Запишитесь на просмотр по телефону +7 (812) 660-56-50.",
  },
  {
    question: "Какие документы нужны для покупки квартиры?",
    answer:
      "Для покупки потребуются: паспорт, СНИЛС, справка о доходах (для ипотеки), согласие супруга (при наличии), документы на материнский капитал (при использовании). Полный список предоставит менеджер.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  // Структурированные данные для поисковых систем
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section id="faq" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 font-history-pro">Часто задаваемые вопросы</h2>
            <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на самые популярные вопросы о покупке квартир в ЖК "Гений"
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                  aria-expanded={openItems.includes(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold pr-4 font-cera-pro">{item.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-[#a8996e] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#a8996e] flex-shrink-0" />
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <CardContent className="pt-0 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
            <a
              href="tel:+74951234567"
              className="inline-flex items-center px-6 py-3 bg-[#a8996e] text-white rounded-[22px] hover:bg-[#9d8f5f] transition-colors"
            >
              Позвонить консультанту
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
