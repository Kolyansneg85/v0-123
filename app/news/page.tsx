import Link from "next/link"

const ArrowLeft = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Calendar = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const Clock = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export const metadata = {
  title: "Новости | Клубный дом Коллекционер - Domfy",
  description:
    "Последние новости о клубном доме Коллекционер. Актуальная информация о ходе строительства, акциях и событиях.",
  keywords:
    "новости клубном доме Коллекционер, ход строительства клубнго дома Коллекционер, акции в клубном доме Коллекционер, недвижимость в петроградском районе СПб",
}

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image?: string
}

const articles: Article[] = [
  {
    id: "5",
    slug: "kollekcioner-dom-s-pinakotekoy",
    title: "Клубный дом «Коллекционер»: дом с картинной галереей на Петроградской стороне",
    excerpt:
      "«Коллекционер» — камерный клубный дом в сердце Петроградской стороны, где архитектура эклектики соединена с живым искусством: в лобби создана полноценная пинакотека с работами современных художников.",
    date: "2025-09-19",
    readTime: "8 мин",
    image: "/images/art-gallery-interior.png",
  },
  {
    id: "4",
    slug: "zastroishchik-razreshenie-kollekcioner",
    title: "Застройщик получил разрешение на строительство клубного дома «Коллекционер» на Петроградской стороне",
    excerpt:
      "Госстройнадзор Санкт‑Петербурга выдал разрешение на строительство клубного дома «Коллекционер» по адресу ул. Чапыгина, 4 — камерного проекта премиум‑класса на 69 квартир с авторской эклектичной архитектурой, лобби‑пинакотекой, приватным двор‑патио и двухуровневым паркингом.",
    date: "2025-09-19",
    readTime: "7 мин",
    image: "/images/building-facade.webp",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Новости</h1>
              <p className="text-gray-600 mt-2">Актуальная информация о клубном доме Коллекционер</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft />
              На главную
            </Link>
          </div>
        </div>
      </div>

      {/* Список статей */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`}>
              <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                {article.image && (
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}

                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar />
                      {new Date(article.date).toLocaleDateString("ru-RU")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock />
                      {article.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2 text-balance">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 line-clamp-3 text-pretty">{article.excerpt}</p>

                  <div className="mt-4">
                    <span className="text-[#a8996e] font-medium hover:text-[#c4b896] transition-colors">
                      Читать далее →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
