import PersonalDataClient from "./PersonalDataClient"

export const metadata = {
  title: 'Согласие на обработку персональных данных - дом "Коллекционер"',
  description: "Согласие на обработку персональных данных ЖК Гений",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PersonalDataConsent() {
  return <PersonalDataClient />
}
