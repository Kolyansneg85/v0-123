import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wifi, Dumbbell, Baby, ShoppingCart, Stethoscope } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Безопасность 24/7",
    description: "Консьерж-сервис и видеонаблюдение",
  },
  {
    icon: Wifi,
    title: "Умный дом",
    description: 'Система "умный дом" в каждой квартире',
  },
  {
    icon: Dumbbell,
    title: "Фитнес-центр",
    description: "Современный спортзал для жильцов",
  },
  {
    icon: Baby,
    title: "Детская площадка",
    description: "Безопасная игровая зона для детей",
  },
  {
    icon: ShoppingCart,
    title: "Магазины",
    description: "Торговые точки на первом этаже",
  },
  {
    icon: Stethoscope,
    title: "Медцентр",
    description: "Поликлиника в шаговой доступности",
  },
]

export default function Features() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Инфраструктура ЖК Коллекционер",
    description: "Комплекс услуг и удобств для жителей жилого комплекса",
    provider: {
      "@type": "RealEstateAgent",
      name: "ЖК Коллекционер",
    },
    serviceType: "Жилищные услуги",
    areaServed: "Петроградский район, Санкт-Петербург",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги и удобства",
      itemListElement: features.map((feature, index) => ({
        "@type": "Offer",
        name: feature.title,
        description: feature.description,
        position: index + 1,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 font-history-pro">Инфраструктура</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Все необходимое для комфортной жизни находится рядом с вашим домом.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
