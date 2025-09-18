import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import SocialShareButtons from "@/components/social-share-buttons"
import RelatedNewsCarousel from "@/components/related-news-carousel"

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  image?: string
}

const articles: Article[] = [
  {
    id: "1",
    slug: "nachalo-stroitelstva-zhk-geniy",
    title: "Начало строительства ЖК Гений: новый этап развития Невского района",
    excerpt:
      "Официально стартовало строительство жилого комплекса Гений на Проспекте Большевиков. Узнайте о планах застройщика и сроках сдачи.",
    content: `
      <p>Сегодня мы рады сообщить о начале строительства жилого комплекса "Гений" в Невском районе Санкт-Петербурга. Проект расположится по адресу проспект Большевиков, д. 22 и станет новой точкой притяжения для жителей восточнлй части города.</p>
      
      <h3>Особенности проекта</h3>
      <p>ЖК "Гений" представляет собой современый жилой комплекс, который сочетает в себе комфорт городской жизни и близость к природе. Проект включает в себя:</p>
      <ul>
        <li>Квартиры различных планировок от студий до трёхкомнатных</li>
        <li>Развитую инфраструктуру для комфортной жизни</li>
        <li>Удобное транспортное сообщение с центром города</li>
        <li>Зелёные зоны и места для отдыха</li>
      </ul>
      
      <h3>Сроки реализации</h3>
      <p>Планируемый срок сдачи объекта — 2026 год. Все работы ведутся в соответствии с утверждённым графиком строительства.</p>
    `,
    date: "2025-06-15",
    readTime: "3 мин",
    image: "/images/hero-building.jpeg",
  },
  {
    id: "2",
    slug: "infrastruktura-zhk-geniy",
    title: "Инфраструктура ЖК Гений: всё для комфортной жизни",
    excerpt:
      "Рассказываем о планируемой инфраструктуре жилого комплекса: детские площадки, спортивные зоны, парковка и многое другое.",
    content: `
      <p>Одним из ключевых преимуществ ЖК "Гений" станет развитая инфраструктура, которая обеспечит жителям максимальный комфорт и удобство.</p>
      
      <h3>Детская инфраструктура</h3>
      <p>На территории комплекса будут оборудованы современные детские площадки с безопасным покрытием и качественным игровым оборудованием.</p>
      
      <h3>Спорт и активный отдых</h3>
      <p>Для любителей активного образа жизни предусмотрены спортивные площадки и зоны для занятий на свежем воздухе.</p>
      
      <h3>Парковка и транспорт</h3>
      <p>Подземная парковка обеспечит удобное размещение автомобилей жителей, а продуманная транспортная доступность позволит легко добираться в любую точку города.</p>
    `,
    date: "2025-07-10",
    readTime: "2 мин",
    image: "/images/infrastructure-area.jpeg",
  },
  {
    id: "3",
    slug: "lokaciya-zhk-geniy-primorskiy-rayon",
    title: "Локация ЖК Гений: преимущества Приморского района",
    excerpt:
      "Почему Приморский район — идеальное место для жизни? Разбираем все преимущества локации нашего жилого комплекса.",
    content: `
      <p>Приморский район Санкт-Петербурга традиционно считается одним из самых привлекательных для проживания. ЖК "Гений" расположен в особенно удачной части района.</p>
      
      <h3>Транспортная доступность</h3>
      <p>Близость к основным транспортным артериям обеспечивает быстрое сообщение с центром города и другими районами Петербурга.</p>
      
      <h3>Экология и природа</h3>
      <p>Район отличается хорошей экологической обстановкой, близостью к паркам и зелёным зонам, что особенно важно для семей с детьми.</p>
      
      <h3>Развитая инфраструктура</h3>
      <p>В шаговой доступности находятся школы, детские сады, медицинские учреждения, торговые центры и объекты культуры.</p>
    `,
    date: "2025-09-05",
    readTime: "4 мин",
  },
]

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return {
      title: "Новость не найдена | ЖК Гений - Domfy",
    }
  }

  return {
    title: `${article.title} | ЖК Гений - Domfy`,
    description: article.excerpt,
    keywords: `ЖК Гений, ${article.title}, новости недвижимости, Приморский район, Санкт-Петербург`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
      type: "article",
      publishedTime: article.date,
    },
  }
}

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

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://domfy.ru"}/news/${article.slug}`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигация */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft />
            Назад к новостям
          </Link>
        </div>
      </div>

      {/* Контент статьи */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {article.image && (
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          )}

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
              <div className="flex items-center gap-1">
                <Calendar />
                {new Date(article.date).toLocaleDateString("ru-RU")}
              </div>
              <div className="flex items-center gap-1">
                <Clock />
                {article.readTime}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-balance">{article.title}</h1>

            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Кнопки социальных сетей */}
            <div className="border-t border-gray-200 pt-8">
              <SocialShareButtons url={fullUrl} title={article.title} description={article.excerpt} />
            </div>
          </div>
        </div>

        {/* Карусель похожих новостей */}
        <div className="mt-12">
          <RelatedNewsCarousel currentArticleId={article.id} articles={articles} />
        </div>
      </article>
    </div>
  )
}
