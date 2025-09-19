import Image from "next/image"
import Head from "next/head"

export default function LifeScenarios() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VisualArtwork",
              name: "Коллекция произведений искусства в клубном доме «Коллекционер»",
              description:
                "Пинакотека с работами Латифа Казбекова и Виктора Грачёва, ставшая центральным элементом общественных пространств дома. Современное искусство, гармонично интегрированное в архитектуру и атмосферу жилого комплекса.",
              artMedium: "живопись, скульптура",
              inProject: {
                "@type": "Project",
                name: "Клубный дом «Коллекционер», Санкт-Петербург",
              },
              locationCreated: {
                "@type": "Place",
                name: "Клубный дом «Коллекционер»",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "ул. Чапыгина, 4",
                  addressLocality: "Санкт-Петербург",
                  addressCountry: "RU",
                },
              },
            }),
          }}
        />
      </Head>

      <section id="life-scenarios" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-700 uppercase font-history-pro">
              ГАЛЛЕРЕЯ И АРТ-КОНЦЕПЦИЯ
            </h2>
            <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/art-gallery.png"
                  alt="Пинакотека клубного дома «Коллекционер» с произведениями искусства Латифа Казбекова и Виктора Грачёва в современном интерьере лобби"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Клубный дом «Коллекционер» — это уникальное пространство, где современное жилье переплетается с живым
                искусством и культурой. В лобби расположена собственная пинакотека — место хранения произведений
                живописи и скульптуры, вдохновленная традициями знатных домов древней Греции. Здесь собраны работы
                современных художников Латифа Казбекова и Виктора Грачёва, создавая атмосферу настоящего арт-клуба.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Анфилада дома представляет собой архитектурный объект с витражами и панорамными окнами, которые
                дополняют художественную концепцию проекта. Испанское приватное патио и итальянская площадь у входа
                становятся местами гармоничного отдыха и общения. Каждая деталь здесь продумана для эстетического
                удовольствия и комфортной жизни, объединяя культурное наследие с современным комфортом.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Это жилой комплекс, ориентированный на ценителей искусства и тонкого вкуса, где каждая квартира
                становится частью собственной коллекции впечатлений и вдохновения.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
