import { Building, Users, Car, TreePine } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="pt-32 pb-16 bg-white scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide text-gray-900 font-history-pro">
            О ПРОЕКТЕ
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Жилой комплекс «Гений» — это воплощение современной архитектуры и комфортной городской среды. Каждая деталь
            продумана для создания идеального пространства для жизни.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <Building className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">6 КОРПУСОВ</h3>
            <p className="text-gray-600 font-light">Современная архитектура с панорамными окнами</p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <Users className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">1211 КВАРТИР</h3>
            <p className="text-gray-600 font-light">От студий до 3-комнатных квартир</p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <Car className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">ПАРКИНГ</h3>
            <p className="text-gray-600 font-light">Подземная парковка на 601 место</p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <TreePine className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">ЗЕЛЕНАЯ ЗОНА</h3>
            <p className="text-gray-600 font-light">Благоустроенная территория с парком</p>
          </div>
        </div>
      </div>
    </section>
  )
}
