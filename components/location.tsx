import Image from "next/image"

export default function Location() {
  return (
    <section id="location" className="py-16 bg-gray-50 scroll-mt-20">
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
              ЖК «Гений» занимает удачное расположение на пересечении проспекта Большевиков и улицы Крыленко в динамично
              развивающейся правобережной части Невского района Санкт-Петербурга. Благодаря этой локации жильцы получают
              сочетание всех преимуществ современной городской инфраструктуры и близости зелёных зон: буквально в десяти
              минутах пешком находится станция метро «Улица Дыбенко», что позволяет быстро добираться в любой район
              города и до центра за 20 минут на метро.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Рядом с комплексом расположены несколько крупных транспортных магистралей: удобный выезд на КАД
              обеспечивает мобильность для автомобилистов, поездка по нему до основных деловых и культурных точек
              Северной столицы занимает около 20 минут. В шаговой доступности множество остановок наземного
              общественного транспорта, включая автобусы, маршрутки, трамваи и троллейбусы, что облегчает передвижение
              даже без личного автомобиля.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/aerial-view.jpeg" alt="Аэросъемка ЖК Гений" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
