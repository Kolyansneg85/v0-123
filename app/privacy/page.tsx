import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata = {
  title: "Политика в отношении обработки персональных данных - Domfy",
  description: "Политика в отношении обработки персональных данных агентства недвижимости Domfy",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />
}
