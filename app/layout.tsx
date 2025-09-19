import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import ChatWidget from "../components/chat-widget"

// Подключение Google Fonts
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  display: "swap",
})

// Подключение локального шрифта HistoryPro-Two для заголовков
const historyPro = localFont({
  src: "../public/fonts/HistoryPro-Two.ttf",
  variable: "--font-history-pro",
  display: "swap",
})

// Подключение локального шрифта CeraPro-Regular для основного текста
const ceraPro = localFont({
  src: "../public/fonts/CeraPro-Regular.woff",
  variable: "--font-cera-pro",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'ЖК "Гений" - Элитное жилье в центре города | FAQ',
  description:
    "Современный жилой комплекс с квартирами от 1 до 4 комнат. Ответы на частые вопросы о покупке, ипотеке, инфраструктуре. Звоните!",
  keywords: "жилой комплекс, квартиры, недвижимость, новостройка, ипотека, FAQ, вопросы ответы",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${historyPro.variable} ${ceraPro.variable} ${roboto.variable}`}>
      <body className="overflow-x-hidden">
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
