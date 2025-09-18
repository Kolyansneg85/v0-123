import Image from "next/image"

export default function IntelligentCourtyard() {
  return (
    <section id="intelligent-courtyard" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.2em] text-gray-700 uppercase font-history-pro">
            ИНТЕЛЛЕКТУАЛЬНЫЙ ДВОР
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Жилой комплекс «Гений» предлагает уникальный двор, разделённый на две концептуальные зоны — тихую,
              созерцательную для уединения и медитации, и активную, предназначенную для общения, спорта и творчества.
              Эти пространства объединяет пешеходный мост, создающий комфортное и функциональное пространство для
              жителей.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Двор является закрытой и охраняемой территорией без машин, что обеспечивает безопасность и тишину.
              Ландшафт от бюро AFA сочетает темные фактурные растения в зоне спокойствия и яркие цветущие композиции для
              стимулирования энергии и креативности. В комплексе предусмотрены детские площадки, тренажеры, зоны для
              чтения и отдыха, создавая комфортную и вдохновляющую среду для всей семьи.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/intelligent-courtyard.webp"
                alt="Интеллектуальный двор ЖК Гений"
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
