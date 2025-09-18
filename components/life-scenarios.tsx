import Image from "next/image"

export default function LifeScenarios() {
  return (
    <section id="life-scenarios" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-700 uppercase font-history-pro">
            СЦЕНАРИИ ЖИЗНИ
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/life-scenarios-lobby.jpeg"
                alt="Сценарии жизни в ЖК Гений"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Жилой комплекс «Гений» — это пространство для вдохновения и комфортной жизни, где расположатся зоны с
              библио-беседками и гамаками, профессиональными тренажёрами, коворкингом и детскими площадками.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Внутри дома — лобби и переговорные в стиле советского кабинетного шика 70-х годов с элементами
              авангардистской архитектуры, высокими потолками и панорамными окнами. Центральные парадные оформлены с
              отсылками к лабораториям гениальных учёных, создавая атмосферу комфорта и вдохновения. Для жителей
              доступны интеллектуальный клуб-гостиная, коворкинг, спортивная площадка, зоны для медитации,
              библиотеки-беседки и ресторанные зоны под навесами — всё для удобства и насыщенной жизни.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
