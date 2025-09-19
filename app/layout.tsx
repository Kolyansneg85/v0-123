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
  src: "./fonts/HistoryPro-Two.ttf",
  variable: "--font-history-pro",
  display: "swap",
})

// Подключение локального шрифта CeraPro-Regular для основного текста
const ceraPro = localFont({
  src: "./fonts/CeraPro-Regular.woff",
  variable: "--font-cera-pro",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Клубный дом «Коллекционер» — квартиры от 1 до 5 спален на Петроградской стороне",
  description:
    "Камерный дом с 69 коллекционными лотами: европланировки, мансарды и двухуровневые квартиры, лобби‑пинакотека, приватный двор‑патио и подземный паркинг. Выбор площадей от 43 до 222 м² — уточняйте наличие и условия!",
  keywords:
    "жилой комплекс коллекционер, квартиры дом коллекционер, пинакотека галерея жилой дом коллекционер, Латиф Казбеков Виктор Грачёв коллекция, люкарны мансарда терраса Петроградская, курдонер патио эклектика натуральный камень, двухуровневые квартиры второй свет 6.4 метра, Чапыгина 4 69 квартир камерность, art of living коллекционные лоты витражная анфилада, башенки русты латунная инкрустация карнизы эркеры, приватный двор переговорные лобби 4 метра",
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
