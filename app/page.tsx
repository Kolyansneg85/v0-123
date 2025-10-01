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
  title: 'Клубный дом «Коллекционер» — квартиры от 1 до 5 спален на Петроградской стороне',
  description:
    "Камерный дом с 69 коллекционными лотами: европланировки, мансарды и двухуровневые квартиры, лобби‑пинакотека, приватный двор‑патио и подземный паркинг. Выбор площадей от 43 до 222 м² — уточняйте наличие и условия!",
  keywords: "жилой комплекс коллекционер, клубный дом коллекционер, жк коллекционер, квартиры дом коллекционер, элитные квартиры на улице Чапыгина 4, пинакотека галерея жилой дом коллекционер, Латиф Казбеков Виктор Грачёв коллекция, люкарны мансарда терраса Петроградская, курдонер патио эклектика натуральный камень, двухуровневые квартиры второй свет 6.4 метра, Чапыгина 4 69 квартир камерность, art of living коллекционные лоты витражная анфилада, башенки русты латунная инкрустация карнизы эркеры, приватный двор переговорные лобби 4 метра",
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
