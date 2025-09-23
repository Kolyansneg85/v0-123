import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Home, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Страница не найдена — ЖК «Коллекционер»",
  description: "Запрашиваемая страница не найдена. Вернитесь на главную страницу ЖК «Коллекционер».",
  robots: "noindex, nofollow",
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center py-20">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-[#a8996e] opacity-20 leading-none">404</h1>
            </div>

            {/* Main Content */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-cera-pro">Страница не найдена</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                К сожалению, запрашиваемая страница не существует или была перемещена. Возможно, вы перешли по
                устаревшей ссылке или допустили ошибку в адресе.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-8 py-4 rounded-[22px] font-light tracking-wide transition-colors text-lg"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  На главную
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white px-8 py-4 rounded-[22px] font-light tracking-wide transition-colors text-lg bg-transparent"
              >
                <Link href="/news" className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />К новостям
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-16 p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 font-cera-pro">ЖК «Коллекционер»</h3>
              <p className="text-slate-600 mb-6">
                Премиальный жилой комплекс в центре Санкт-Петербурга — элитные квартиры с уникальной архитектурой и
                высоким уровнем комфорта для истинных ценителей качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#apartments" className="text-[#a8996e] hover:text-[#9d8f5f] transition-colors font-medium">
                  Посмотреть планировки
                </Link>
                <Link href="/#gallery" className="text-[#a8996e] hover:text-[#9d8f5f] transition-colors font-medium">
                  Галерея проекта
                </Link>
                <Link href="/#contact" className="text-[#a8996e] hover:text-[#9d8f5f] transition-colors font-medium">
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
