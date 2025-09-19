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
            Клубный дом «Коллекционер» — воплощение изысканной архитектуры, приватности и арт-атмосферы для ценителей культурной жизни в центре Петроградского района. Каждый элемент дома отражает эстетику коллекционного произведения искусства: воздушные фасады из натурального камня, итальянская площадь у входа, приватный зеленый двор-патио, авторское лобби с пинакотекой и современными технологиями комфорта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <Building className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">2 СЕКЦИИ</h3>
            <p className="text-gray-600 font-light">Современная архитектура с панорамными окнами</p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <Users className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">69 КВАРТИР</h3>
            <p className="text-gray-600 font-light">Эксклюзивные форматы: мансардные, двухуровневые и квартиры с террасами</p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <Car className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">ПАРКИНГ</h3>
            <p className="text-gray-600 font-light">Подземный паркинг на 57 машино-мест с лифтом и кладовыми</p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <TreePine className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">ЗЕЛЕНАЯ ЗОНА</h3>
            <p className="text-gray-600 font-light">Закрытый двор-патио с ландшафтным садом, зоной отдыха, детской и work-территорией �� Wi-Fi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
