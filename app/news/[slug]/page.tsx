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
    id: "5",
    slug: "kollekcioner-dom-s-pinakotekoy",
    title: "Клубный дом «Коллекционер»: дом с картинной галереей на Петроградской стороне",
    excerpt:
      "«Коллекционер» — камерный клубный дом в сердце Петроградской стороны, где архитектура эклектики соединена с живым искусством: в лобби создана полноценная пинакотека с работами современных художников.",
    content: `
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": "https://kollektsioner-dom.ru/news/kollekcioner-dom-s-pinakotekoy#post",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://kollektsioner-dom.ru/news/kollekcioner-dom-s-pinakotekoy"
        },
        "headline": "Клубный дом «Коллекционер»: дом с картинной галереей на Петроградской стороне",
        "alternativeHeadline": "Пинакотека, эклектика и приватные пространства: арт‑концепция «Коллекционера»",
        "description": "«Коллекционер» — камерный клубный дом, где архитектура эклектики объединена с живым искусством: в лобби создана пинакотека с работами современных художников, а общественные пространства — от витражной анфилады до приватного патио — спроектированы как продолжение художественной экспозиции и комфортной городской жизни.",
        "articleSection": [
          "Арт‑концепция и пинакотека",
          "Архитектура эклектики",
          "Приватные пространства",
          "Для кого проект",
          "Ключевые преимущества"
        ],
        "keywords": [
          "Клубный дом Коллекционер",
          "дом с картинной галереей",
          "пинакотека",
          "Петроградская сторона",
          "эклектика",
          "витражная анфилада",
          "приватный двор‑патио",
          "арт‑концепция"
        ],
        "datePublished": "2025-09-19T19:56:00+03:00",
        "dateModified": "2025-09-19T19:56:00+03:00",
        "author": {
          "@type": "Organization",
          "@id": "https://kollektsioner-dom.ru/#org",
          "name": "Редакция блога «Коллекционер»"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://kollektsioner-dom.ru/#org",
          "name": "Коллекционер — официальный сайт",
          "logo": {
            "@type": "ImageObject",
            "url": "https://kollektsioner-dom.ru/images/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "image": [
          "https://kollektsioner-dom.ru/images/art-gallery-interior.png",
          "https://kollektsioner-dom.ru/images/building-facade.webp",
          "https://kollektsioner-dom.ru/images/courtyard-1.jpeg"
        ],
        "about": [
          {
            "@type": "Place",
            "name": "Клубный дом «Коллекционер»",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Чапыгина, 4",
              "addressLocality": "Санкт-Петербург",
              "postalCode": "197022",
              "addressCountry": "RU"
            }
          }
        ],
        "mentions": [
          { "@type": "Thing", "name": "Петроградская сторона" },
          { "@type": "CreativeWork", "name": "Живопись и скульптура в пинакотеке" },
          { "@type": "ArchitecturalStructure", "name": "Витражная анфилада" },
          { "@type": "ArchitecturalStructure", "name": "Приватный двор‑патио" }
        ],
        "articleBody": "«Коллекционер» — дом, который перешагивает границы классического девелопмента, превращая общее пространство в продуманный арт‑маршрут. Лобби встречает пинакотекой — полноценной экспозицией современного искусства. Витражная анфилада объединяет корпуса и продолжает галерейный сценарий, а эклектичные фасады из натурального камня с рустами, карнизами и латунными деталями задают архитектурный тон. Входная площадь, зелёный двор‑патио без машин, вечерняя подсветка и камерные зоны отдыха формируют частный городской «салон». Такой формат выбирают те, для кого культура и эстетика — часть повседневной жизни, а также инвесторы, ориентированные на редкое предложение клубных домов в историческом центре."
      }
      </script>

      <p><strong>«Коллекционер» — камерный клубный дом в сердце Петроградской стороны, где архитектура эклектики соединена с живым искусством:</strong> в лобби создана полноценная пинакотека с работами современных художников, а общественные пространства спроектированы как продолжение художественной экспозиции и комфортной городской жизни.</p>

      <h3>Почему это событие важно</h3>
      <ul>
        <li><strong>Уникальность формата:</strong> редкий для Петербурга дом, где галерея искусства встроена в повседневный маршрут жителей.</li>
        <li><strong>Усиление ценности локации:</strong> проект делает Петроградскую сторону не только местом для жизни, но и точкой притяжения культурной среды.</li>
        <li><strong>Новый стандарт клубных домов:</strong> синтез авторской архитектуры, приватных пространств и кураторского подхода к искусству.</li>
      </ul>

      <h3>Арт‑концепция: пинакотека как «сердце» дома</h3>
      <ul>
        <li>В лобби разместили пинакотеку — выставочное пространство с коллекцией живописи и скульптуры; это не декоративный элемент, а ядро проектной идеи.</li>
        <li>Экспозиция формирует эмоциональный сценарий входа: от площади у парадного входа — к светлой анфиладе и далее к приватным зонам.</li>
        <li>Вечерняя подсветка и витражные проёмы усиливают экспозиционный эффект: искусство «работает» и как атмосферный свет.</li>
      </ul>

      <h3>Архитектура эклектики и детали уровня коллекционного жилья</h3>
      <ul>
        <li>Натуральный камень, русты, карнизы, башенки, латунные инкрустации — пластика фасадов рассчитана на «считывание» вблизи.</li>
        <li>Витражная анфилада объединяет корпуса и визуально продолжает галерейную линию интерьеров.</li>
        <li>На верхних уровнях — мансарды с люкарнами, в части лотов — второй свет и террасы: архитектура поддерживает экспозиционность видов.</li>
      </ul>

      <h3>Приватные пространства и городские «салоны»</h3>
      <ul>
        <li>У входа — небольшая «итальянская» площадь, внутри — закрытый зелёный двор‑патио в испанской традиции: места встреч, чтения и камерных событий.</li>
        <li>В лобби помимо пинакотеки — две переговорные и кофе‑поинт: «дневной салон» для жителей и гостей.</li>
        <li>Двор без машин, ландшафтный сад и мягкие вечерние сценарии освещения поддерживают клубную камерность.</li>
      </ul>

      <h3>Для кого этот проект</h3>
      <ul>
        <li>Для коллекционеров впечатлений и ценителей искусства: здесь искусство — часть повседневности, а не редкое событие.</li>
        <li>Для семей, кому важна приватность и статус небольшого дома в историческом центре.</li>
        <li>Для инвесторов, ориентированных на «редкость» предложения и устойчивый спрос на Петроградской стороне.</li>
      </ul>

      <h3>Ключевые преимущества «Коллекционера»</h3>
      <ul>
        <li><strong>Уникальная арт‑идентичность:</strong> пинакотека и кураторский подход к общим пространствам.</li>
        <li><strong>Камерность вместо «мегакварталов»:</strong> ограниченное число лотов в центральной локации.</li>
        <li><strong>Сценарии жизни «от двери до двора»:</strong> парадная площадь, анфилада, лобби‑галерея, приватное патио.</li>
        <li><strong>Архитектура, «собирающая» классику и современность:</strong> эклектика, натуральный камень, вечерняя подсветка.</li>
      </ul>

      <p>Хочется увидеть, как пинакотека работает в реальном пространстве? <a href="tel:+78126605650" class="text-[#a8996e] hover:text-[#c4b896] font-medium">Закажите презентацию</a> и подбор планировок: на старте продаж действует приоритетная запись на показы и спецусловия.</p>
    `,
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
    content: `
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": "https://kollektsioner-dom.ru/news/zastroishchik-razreshenie-kollekcioner#post",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://kollektsioner-dom.ru/news/zastroishchik-razreshenie-kollekcioner"
        },
        "headline": "Застройщик получил разрешение на строительство клубного дома «Коллекционер» на Петроградской стороне",
        "alternativeHeadline": "Разрешение на строительство: старт флагманского проекта «Коллекционер» на ул. Чапыгина, 4",
        "description": "Госстройнадзор Санкт‑Петербурга выдал разрешение на строительство клубного дома «Коллекционер»: 69 камерных квартир 43–222 м², авторская эклектичная архитектура, лобби‑пинакотека, приватный двор‑патио и двухуровневый паркинг на Петроградской стороне.",
        "articleSection": [
          "Ключевые параметры проекта",
          "Локация и окружение",
          "Кому подходит",
          "Конкурентные преимущества",
          "Возможные сроки",
          "Старт продаж"
        ],
        "keywords": [
          "Клубный дом Коллекционер",
          "разрешение на строительство",
          "Петроградская сторона",
          "ул. Чапыгина 4",
          "элитная недвижимость СПб",
          "пинакотека",
          "двухуровневые квартиры",
          "мансардный этаж",
          "второй свет"
        ],
        "datePublished": "2025-09-19T19:45:00+03:00",
        "dateModified": "2025-09-19T19:45:00+03:00",
        "author": {
          "@type": "Organization",
          "@id": "https://kollektsioner-dom.ru/#org",
          "name": "Редакция блога «Коллекционер»"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://kollektsioner-dom.ru/#org",
          "name": "Коллекционер — официальный сайт",
          "logo": {
            "@type": "ImageObject",
            "url": "https://kollektsioner-dom.ru/images/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "image": [
          "https://kollektsioner-dom.ru/images/building-facade.webp",
          "https://kollektsioner-dom.ru/images/art-gallery-interior.png",
          "https://kollektsioner-dom.ru/images/courtyard-1.jpeg"
        ],
        "about": [
          {
            "@type": "Place",
            "name": "Клубный дом «Коллекционер»",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Чапыгина, 4",
              "addressLocality": "Санкт-Петербург",
              "postalCode": "197022",
              "addressCountry": "RU"
            }
          },
          {
            "@type": "Organization",
            "name": "Застройщик"
          }
        ]
      }
      </script>

      <p><strong>Госстройнадзор Санкт‑Петербурга выдал разрешение на строительство клубного дома «Коллекционер» по адресу ул. Чапыгина, 4</strong> — камерного проекта премиум‑класса на 69 квартир с авторской эклектичной архитектурой, лобби‑пинакотекой, приватным двор‑патио и двухуровневым паркингом.</p>

      <h3>Почему это важно</h3>
      <ul>
        <li><strong>Дефицит клубных домов в центре:</strong> ограниченное предложение на Петроградской стороне традиционно поддерживает ликвидность и рост стоимости квадратного метра.</li>
        <li><strong>Старт нового флагманского проекта:</strong> застройщик закрепляет экспертизу в премиальном сегменте и архитектуре «для коллекционеров».</li>
        <li><strong>Уникальная концепция:</strong> интеграция жилой среды и искусства (пинакотека), что редкость для рынка элитного жилья.</li>
      </ul>

      <h3>Ключевые параметры проекта</h3>
      <ul>
        <li><strong>Адрес:</strong> Санкт‑Петербург, ул. Чапыгина, 4</li>
        <li><strong>Формат:</strong> 2 секции на 6 и 8 этажей, витражная анфилада между корпусами</li>
        <li><strong>Объем:</strong> 69 квартир площадью от 43 до 222 м² (от компактных европланировок до резиденций с 4–5 спальнями)</li>
        <li><strong>Особенности:</strong> мансардный этаж с люкарнами, двухуровневые лоты, квартиры со вторым светом (высота до 6,4 м), террасы</li>
        <li><strong>Общественные пространства:</strong> авторское лобби с пинакотекой, две переговорные, кофе‑поинт</li>
        <li><strong>Двор:</strong> приватный курдонер и патио без машин, ландшафтный сад, детская зона, Wi‑Fi</li>
        <li><strong>Паркинг:</strong> встроенно‑пристроенный двухуровневый, 57 машино‑мест, кладовые</li>
      </ul>

      <h3>Архитектура и инженерия</h3>
      <p>Архитектура выполнена в эклектичном стиле с использованием натурального камня, башенок, рустов, латунных инкрустаций и выразительных карнизов. Инженерные системы включают индивидуальную вентиляцию в квартирах, ИТП, энергосберегающие фасады, усиление сотовой связи в паркинге, систему контроля доступа и видеонаблюдение.</p>

      <h3>Локация и окружение</h3>
      <p>Петроградская сторона — исторический центр культурной и деловой жизни: рядом гимназии и вузы, рестораны, бутики, набережные и скверы. Удобный доступ к Каменноостровскому и Большому проспектам, близость метро Петроградской стороны обеспечивают мобильность без отказа от камерности.</p>

      <h3>Кому подходит «Коллекционер»</h3>
      <ul>
        <li>Семьям, ценящим приватность, статус и редкий формат клубного дома вместо «мегакварталов»</li>
        <li>Инвесторам, ориентированным на стабильный спрос и ограниченное предложение в центральной локации</li>
        <li>Ценителям архитектуры и искусства: пинакотека, анфилада, вечерняя подсветка фасадов формируют уникальную атмосферу</li>
      </ul>

      <h3>Конкурентные преимущества</h3>
      <ul>
        <li><strong>Камерность:</strong> всего 69 квартир — редкая планка для центра</li>
        <li><strong>Арт‑ДНК:</strong> собственная галерея и архитектура, «собирающая» эстетику Петербурга</li>
        <li><strong>Гибкая квартирография:</strong> от одноместных городских форматов до семейных резиденций и двухуровневых лотов</li>
        <li><strong>Технологичность:</strong> энергоэффективность, инженерия «премиум», цифровая инфраструктура и безопасность</li>
      </ul>

      <h3>Возможные сроки</h3>
      <p>Разрешение на строительство получено; завершение проекта ориентировочно заявляется к концу 2028 года. Конкретные даты и этапы могут уточняться по мере реализации.</p>

      <h3>Что будет на старте продаж</h3>
      <p>Старт продаж скоро. При появлении прайсов будет добавление цен в структурированную разметку предложений для карточек квартир. Специальные условия ранним покупателям и подбор «ликвидных» планировок с минимальной площадью в каждом типе.</p>

      <p><a href="tel:+78126605650" class="text-[#a8996e] hover:text-[#c4b896] font-medium">Оставить заявку</a> — чтобы получить закрытую презентацию, набор планировок и зафиксировать условия на старте.</p>
    `,
    date: "2025-09-19",
    readTime: "7 мин",
    image: "/images/building-facade.webp",
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
      title: "Новость не найдена | Клубный дом Коллекционер - Domfy",
    }
  }

  return {
    title: `${article.title} | Клубный дом Коллекционер - Domfy`,
    description: article.excerpt,
    keywords: `Клубный дом Коллекционер, ${article.title}, новости недвижимости, Петроградская сторона, Санкт-Петербург`,
    alternates: {
      canonical: `https://kollektsioner-dom.ru/news/${params.slug}`,
    },
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

  const fullUrl = `https://kollektsioner-dom.ru/news/${article.slug}`

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
              className="article-content prose prose-lg max-w-none 
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed
                prose-li:text-gray-700 prose-li:mb-2
                prose-ul:mb-6 prose-ul:space-y-2
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-a:text-[#a8996e] prose-a:no-underline hover:prose-a:text-[#c4b896]
                [&>script]:hidden"
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
