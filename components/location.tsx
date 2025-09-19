import Image from "next/image"

export default function Location() {
  const locationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Клубный дом «Коллекционер»",
    description:
      "Петроградская сторона: престижное окружение с гимназиями, вузами, ресторанами, клиниками и музеями; рядом набережные и скверы. У дома — приватный двор‑патио ��ез машин с ландшафтным дизайном и рабочими зонами на воздухе. Удобные выезды к Каменноостровскому и Большому проспектам, близость метро и магистралей города.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Чапыгина, д. 4",
      addressLocality: "Санкт-Петербург",
      postalCode: "197022",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "59.969",
      longitude: "30.312",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Приватный двор‑патио без машин",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Ландшафтный дизайн и зоны отдыха",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Рабочие пространства на свежем воздухе",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Пешая доступность набережных и скверов",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Близость метро и ключевых проспектов",
        value: true,
      },
    ],
    keywords:
      "Петроградская сторона, Чапыгина 4, приватный двор, патио, клубный дом, эклектика, центр Санкт-Петербурга",
  }

  return (
    <section id="location" className="py-16 bg-gray-50 scroll-mt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.2em] text-gray-700 uppercase font-history-pro">
            ЛОКАЦИЯ
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Петроградская сторона — историческое и престижное сердце города с редкой атмосферой тишины, архитектуры и
              интеллигентного ритма жизни. Рядом с домом — лучшие гимназии и вузы, детские сады, авторские рестораны,
              бутики, частные клиники, фитнес‑клубы и музеи; в шаговой доступности набережные Невки, Ботанический сад и
              уютные скверы. Для повседневного комфорта формируется собственная камерная среда: приватный двор‑патио без
              машин с ландшафтным дизайном, зоны отдыха и работы на свежем воздухе, детская площадка и кафе‑поинт для
              резидентов.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Локация равновесна между центром и мобильностью: быстрый выезд к Каменноостровскому и Большому проспектам,
              удобная связь со станциями метро Петроградской стороны и магистралями города. Ограниченное предложение
              клубных домов, архитектурное наследие и редкая низкоэтажная застройка поддерживают устойчивую ликвидность:
              «Коллекционер» — место, где комфортная городская жизнь органично сочетается с инвестиционной
              привлекательностью.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/location-complex.webp"
                alt="ЖК Коллекционер в контексте Петроградской стороны - современная архитектура среди исторических зданий"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
