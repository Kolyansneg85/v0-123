"use client"

import { useState } from "react"
import Link from "next/link"

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image?: string
}

interface RelatedNewsCarouselProps {
  currentArticleId: string
  articles: Article[]
}

const ChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

export default function RelatedNewsCarousel({ currentArticleId, articles }: RelatedNewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Фильтруем статьи, исключая текущую
  const relatedArticles = articles.filter((article) => article.id !== currentArticleId)

  if (relatedArticles.length === 0) {
    return null
  }

  const itemsPerPage = 2
  const maxIndex = Math.max(0, relatedArticles.length - itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const visibleArticles = relatedArticles.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Похожие новости</h2>

        {relatedArticles.length > itemsPerPage && (
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Предыдущие новости"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Следующие новости"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visibleArticles.map((article) => (
          <Link key={article.id} href={`/news/${article.slug}`}>
            <article className="group cursor-pointer">
              {article.image && (
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

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

              <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-[#a8996e] transition-colors line-clamp-2 text-balance">
                {article.title}
              </h3>

              <p className="text-gray-600 line-clamp-2 text-pretty text-sm">{article.excerpt}</p>

              <div className="mt-3">
                <span className="text-[#a8996e] font-medium group-hover:text-[#c4b896] transition-colors text-sm">
                  Читать далее →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {relatedArticles.length > itemsPerPage && (
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(relatedArticles.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerPage) === index ? "bg-[#a8996e]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Перейти к странице ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
