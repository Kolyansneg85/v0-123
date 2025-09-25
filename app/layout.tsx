import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import ChatWidget from "../components/chat-widget"
import Script from "next/script"

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
  title: 'Клубный дом "Коллекционер" - Элитное жилье в Петроградском районе',
  description:
    "Клубный дом премиум-класса в Петроградском районе Санкт-Петербурга на улице Чапыгина 4. Квартиры от 42.8 м². Скоро в продаже.",
  keywords: "клубный дом, коллекционер, петроградский район, элитное жилье, санкт-петербург, чапыгина 4",
  generator: "v0.app",
  openGraph: {
    title: 'Клубный дом "Коллекционер" - Элитное жилье в Петроградском районе',
    description:
      "Клубный дом премиум-класса в Петроградском районе Санкт-Петербурга на улице Чапыгина 4. Квартиры от 42.8 м². Скоро в продаже.",
    url: "https://kollektsioner-dom.ru",
    siteName: "Клубный дом Коллекционер",
    images: [
      {
        url: "https://kollektsioner-dom.ru/images/hero-building-light.webp",
        width: 1200,
        height: 630,
        alt: "Клубный дом Коллекционер на Петроградской стороне",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Клубный дом "Коллекционер" - Элитное жилье в Петроградском районе',
    description:
      "Клубный дом премиум-класса в Петроградском районе Санкт-Петербурга на улице Чапыгина 4. Квартиры от 42.8 м². Скоро в продаже.",
    images: ["https://kollektsioner-dom.ru/images/hero-building-light.webp"],
  },
  alternates: {
    canonical: "https://kollektsioner-dom.ru",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${historyPro.variable} ${ceraPro.variable} ${roboto.variable}`}>
      <head>{/* Yandex Metrika script moved to body */}</head>
      <body className="overflow-x-hidden">
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
            ym(56852935, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/56852935" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
