"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function PersonalDataClient() {
  const router = useRouter()

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      router.back()
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [router])

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("ru-RU")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 cursor-pointer" onClick={handleBackdropClick}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 cursor-default" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Назад
          </button>

          <h1 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">
            Согласие на обработку персональных данных
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <p>
                Настоящим я, далее – «Субъект Персональных Данных», во исполнение требований Федерального закона от
                27.07.2006 г. № 152-ФЗ «О персональных данных» (с изменениями и дополнениями) свободно, своей волей и в
                своем интересе даю свое согласие ИП Козлову Николаю Викторовичу (ИНН: 742304466345, ОГРНИП:
                324784700102452, зарегистрирован 05.02.2024 г. Межрайонной ИФНС России № 20 по Санкт-Петербургу),
                осуществляющему деятельность под брендом агентства недвижимости «Domfy», на обработку своих персональных
                данных, указанных при регистрации и/или оставлении заявки на получение предложения и/или подписании на
                получение рекламной информации путем заполнения веб-формы на сайте Оператора (далее – Сайт),
                направляемой (заполненной) с использованием Сайта.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">1. Персональные данные</h2>
              <p>
                Под персональными данными я понимаю любую информацию, относящуюся ко мне как к Субъекту Персональных
                Данных, в том числе мои фамилию, имя, отчество, адрес, образование, профессию, контактные данные
                (телефон, факс, электронная почта, почтовый адрес), фотографии, иную другую информацию. Под обработкой
                персональных данных я понимаю сбор, систематизацию, накопление, уточнение, обновление, изменение,
                использование, распространение, передачу, в том числе трансграничную, обезличивание, блокирование,
                уничтожение, бессрочное хранение, и любые другие действия (операции) с персональными данными.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">2. Цели обработки</h2>
              <p>
                Обработка персональных данных Субъекта Персональных Данных осуществляется в целях информирования об
                услугах, специальных акциях и предложениях, для получения консультаций по объектам недвижимости, для
                регистрации на мероприятия, для участия в проводимых Оператором акциях, опросах, исследованиях, для
                направления информационных материалов, для приглашения на мероприятия, для оказания услуг, для
                направления новостных рассылок, для обработки заявок, запросов и обращений.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">3. Срок действия согласия</h2>
              <p>
                Настоящее согласие действует до момента его отзыва путем направления соответствующего уведомления на
                электронный адрес info@kollektsioner-dom.ru. В случае отзыва мною согласия на обработку персональных
                данных Оператор вправе продолжить обработку персональных данных без моего согласия при наличии
                оснований, указанных в пунктах 2 – 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11
                Федерального закона №152-ФЗ «О персональных данных» от 27.07.2006 г.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">4. Порядок отзыва</h2>
              <p>
                Согласие может быть отозвано мною путем направления Оператору письменного заявления. В случае отзыва
                мною согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных
                без моего согласия при наличии оснований, указанных в пунктах 2-11 части 1 статьи 6, части 2 статьи 10 и
                части 2 статьи 11 Федерального закона от 27.07.2006 N 152-ФЗ "О персональных данных".
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">Дата последнего обновления: {getCurrentDate()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
