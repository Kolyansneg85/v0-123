import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Логотип и название */}
          <div>
            <div className="text-3xl font-bold text-white tracking-tight">
              D<span className="text-[#a8996e]">o</span>
              mfy
            </div>
            <p className="text-gray-400 text-lg">Агентство недвижимости</p>
          </div>

          {/* Основная информация */}
          <div className="text-gray-300 space-y-2">
            <p>Адрес: 197342, г. Санкт-Петербург, Приморский район, Белоостровская ул., д. 28</p>
            <p>Режим работы: Пн–Чт: 10:00–19:00, Пт–Сб: 10:00–18:00, Вс: 12:00–17:00</p>
          </div>

          <div className="text-gray-400">
            <p className="mb-2">Разделы:</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <a href="#about" className="hover:text-[#a8996e] transition-colors">
                О комплексе
              </a>
              <span className="text-gray-600">|</span>
              <a href="#apartments" className="hover:text-[#a8996e] transition-colors">
                Квартиры
              </a>
              <span className="text-gray-600">|</span>
              <a href="#location" className="hover:text-[#a8996e] transition-colors">
                Локация
              </a>
              <span className="text-gray-600">|</span>
              <a href="#infrastructure" className="hover:text-[#a8996e] transition-colors">
                Инфраструктура
              </a>
              <span className="text-gray-600">|</span>
              <a href="#faq" className="hover:text-[#a8996e] transition-colors">
                FAQ
              </a>
              <span className="text-gray-600">|</span>
              <Link href="/news" className="hover:text-[#a8996e] transition-colors">
                Новости
              </Link>
            </div>
          </div>

          {/* Документы */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="text-[#a8996e] hover:text-[#c4b896] transition-colors flex items-center">
              Политика конфиденциальности
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
            <Link
              href="/personal-data"
              className="text-[#a8996e] hover:text-[#c4b896] transition-colors flex items-center"
            >
              Согласие на обработку персональных данных
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>

          {/* Правовая информация */}
          <div className="text-gray-500 text-sm space-y-2">
            <p>На сайте используются cookies и российские системы аналитики.</p>
            <p>
              Сайт создан агентством недвижимости «Domfy». Не является официальным сайтом застройщика. Вся информация —
              для ознакомления и не является публичной офертой или рекламой.
            </p>
            <p>© 2020–2025 Domfy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
