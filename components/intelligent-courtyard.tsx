import Image from "next/image"

export default function IntelligentCourtyard() {
  return (
    <section id="intelligent-courtyard" className="py-16 bg-gray-50 scroll-mt-20">
      {/* JSON-LD разметка для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Инновации и технологии клубного дома «Коллекционер»",
            description:
              "Современные инженерные решения: металлопластиковые двери с шумоизоляцией, многослойные теплосберегающие фасады, индивидуальный тепловой пункт и вентиляция, система раздельного сбора мусора, энергосберегающее освещение в общих зонах, подземный паркинг с лифтом и усилителями связи, круглосуточное видеонаблюдение и контроль доступа, единый узел высокоскоростного интернета.",
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "Двери с усиленной шумоизоляцией", value: true },
              { "@type": "LocationFeatureSpecification", name: "Теплосберегающие фасады", value: true },
              { "@type": "LocationFeatureSpecification", name: "Индивидуальный тепловой пункт", value: true },
              { "@type": "LocationFeatureSpecification", name: "Индивидуальная система вентиляции", value: true },
              { "@type": "LocationFeatureSpecification", name: "Система раздельного сбора мусора", value: true },
              { "@type": "LocationFeatureSpecification", name: "Энергосберегающее освещение", value: true },
              { "@type": "LocationFeatureSpecification", name: "Подземный паркинг с лифтом", value: true },
              { "@type": "LocationFeatureSpecification", name: "Усилители мобильной связи", value: true },
              { "@type": "LocationFeatureSpecification", name: "Круглосуточное видеонаблюдение", value: true },
              { "@type": "LocationFeatureSpecification", name: "Система контроля доступа", value: true },
              { "@type": "LocationFeatureSpecification", name: "Высокоскоростной интернет", value: true },
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.2em] text-gray-700 uppercase font-history-pro">
            ИННОВАЦИИ И ТЕХНОЛОГИИ
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Клубный дом «Коллекционер» — это современное пространство, где инновационные инженерные решения тщательно
              интегрированы в классическую архитектуру эклектики. Каждая квартира оснащена металлопластиковой двери с
              усиленной шумоизоляцией, а фасады дома выполнены с применением многослойных теплосберегающих материалов,
              что обеспечивает энергосбережение и комфорт микроклимата.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Одним из ключевых технологических преимуществ является индивидуальный тепловой пункт и система
              индивидуальной вентиляции с клапанами в каждой квартире, позволяющая реализовать любые сценарии
              климат-контроля. В доме действует система раздельного сбора и утилизации мусора, а зоны общего пользования
              оборудованы энергоэффективным освещением.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Подземный паркинг с лифтом и усилителями мобильной связи обеспечивает комфорт и безопасность, а
              современная система противопожарной защиты и видеонаблюдения круглосуточно контролирует территорию. Для
              удобства жителей реализован единый узел доступа к высокоскоростному интернету, а современные коммуникации
              поддерживают все требования премиального жилого сегмента.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/intelligent-interior.png"
                alt="Современный интерьер с инновационными технологиями и дизайнерской мебелью в клубном доме Коллекционер"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
