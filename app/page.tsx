import Header from "@/components/header"
import Hero from "@/components/hero"
import ProjectIntro from "@/components/project-intro"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Apartments from "@/components/apartments"
import Location from "@/components/location"
import Infrastructure from "@/components/infrastructure"
import IntelligentCourtyard from "@/components/intelligent-courtyard"
import LifeScenarios from "@/components/life-scenarios"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export const metadata = {
  title: 'ЖК "Гений" - Элитное жилье в центре города',
  description:
    "Современный жилой комплекс с квартирами от 1 до 4 комнат. Развитая инфраструктура, парковка, детские площадки. Звоните!",
  keywords: "жилой комплекс, квартиры, недвижимость, новостройка",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectIntro />
      <About />
      <Gallery />
      <Apartments />
      <Location />
      <Infrastructure />
      <IntelligentCourtyard />
      <LifeScenarios />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
