"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "Сколько квартир в доме и когда планируется сдача?",
    answer:
      "В клубном доме «Коллекционер» всего 69 коллекционных лотов в 2 секциях. Точные сроки сдачи уточняются — следите за обновлениями на сайте.",
  },
  {
    question: "Какие типы квартир доступны и их площади?",
    answer:
      "Представлены квартиры от 1 до 5 комнат площадью от 43 до 222 м². Есть уникальные двухуровневые планировки с люкарнами, мансарды с террасами и квартиры с потолками второго света до 6,4 м.",
  },
  {
    question: "Что такое пинакотека в лобби дома?",
    answer:
      "Пинакотека — это галерея живописи и скульптуры в лобби дома с произведениями художников Латифа Казбекова и Виктора Грачёва. Это уникальная особенность проекта, создающая атмосферу арт-клуба.",
  },
  {
    question: "Есть ли парковка и сколько машино-мест?",
    answer:
      "Да, в доме предусмотрен подземный паркинг с лифтом на 57 машино-мест, а также кладовые помещения и усилители мобильной связи.",
  },
  {
    question: "Можно ли использовать общие пространства для работы?",
    answer:
      "Да, в доме есть две переговорные комнаты, которые можно забронировать на reception, а во дворе-патио организованы work-зоны с Wi-Fi для работы на свежем воздухе.",
  },
  {
    question: "Какая система безопасности предусмотрена?",
    answer:
      "Дом оборудован круглосуточным видеонаблюдением, системой контроля доступа, противопожарной системой. Территория закрыта от посторонних.",
  },
  {
    question: "Что входит в инфраструктуру двора?",
    answer:
      "Приватный двор-патио без машин с ландшафтным садом, детской площадкой, зонами отдыха, беседкой, кофе-поинтом и качелями-гнездами для чтения.",
  },
  {
    question: "Какие инженерные системы используются?",
    answer:
      "Индивидуальный тепловой пункт, система индивидуальной вентиляции в каждой квартире, теплосберегающие фасады, раздельный сбор мусора, высокоскоростной интернет.",
  },
  {
    question: "В каком состоянии сдаются квартиры?",
    answer:
      "Квартиры сдаются с подготовкой под индивидуальный дизайн, что позволяет реализовать любые интерьерные решения под требования покупателя.",
  },
  {
    question: "Можно ли посмотреть квартиры до покупки?",
    answer:
      "Да, доступны показы планировок и презентационные материалы. Записаться на просмотр можно через сайт или по телефону +7 (812) 660-56-50.",
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
              Ответы на самые популярные вопросы о клубном доме «Коллекционер»
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
