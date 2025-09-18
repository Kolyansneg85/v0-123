"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

const navigation = [
  { name: "О доме", href: "#about" },
  { name: "Планировки", href: "#apartments" },
  { name: "Локация", href: "#location" },
  { name: "Галерея", href: "#gallery" },
  { name: "Новости", href: "/news" },
  { name: "Контакты", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Закрываем мобильное меню при клике на якорную ссылку
    const handleHashChange = () => {
      setIsMobileMenuOpen(false)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const openChat = () => {
    const chatButton = document.querySelector("[data-chat-widget-button]") as HTMLButtonElement
    if (chatButton) {
      chatButton.click()
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Custom Domfy Logo */}
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight drop-shadow-lg font-cera-pro">
                  D<span className="text-[#a8996e]">o</span>
                  mfy<span className="text-[#a8996e]">.</span>ru
                </div>
                <div className="text-[6px] lg:text-[7px] text-white/60 font-extralight tracking-[0.15em] uppercase drop-shadow-sm -mt-0.5 font-cera-pro">
                  Агентство недвижимости
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#a8996e] transition-colors duration-200 font-light tracking-wide drop-shadow-md font-cera-pro"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+78126605650"
                className="text-white hover:text-[#a8996e] transition-colors duration-200 font-light tracking-wide drop-shadow-md font-cera-pro"
              >
                7 812 660 56 50
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {/* Messenger Button */}
                <Button
                  onClick={openChat}
                  className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors lg:hidden"
                >
                  <MessageCircle className="w-[18px] h-[18px]" />
                </Button>

                {/* Phone Button */}
                <Button
                  asChild
                  className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors lg:hidden"
                >
                  <a href="tel:+78126605650">
                    <svg
                      className="w-[18px] h-[18px]"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.09967 0C8.21901 0 8.33346 0.0474078 8.41785 0.131794C8.50223 0.216181 8.54964 0.330633 8.54964 0.449973C8.54964 0.569314 8.50223 0.683766 8.41785 0.768153C8.33346 0.852539 8.21901 0.899947 8.09967 0.899947C6.19085 0.902106 4.36083 1.66134 3.0111 3.01108C1.66136 4.36082 0.902125 6.19084 0.899965 8.09966C0.899965 8.219 0.852562 8.33346 0.768175 8.41784C0.683787 8.50224 0.569333 8.54965 0.44999 8.54965C0.330647 8.54965 0.216191 8.50224 0.131802 8.41785C0.0474129 8.33347 1.7163e-06 8.21901 0 8.09967C0.0024333 5.95225 0.856571 3.89348 2.37503 2.37503C3.89348 0.856571 5.95225 0.00243352 8.09967 0Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M4.14216 9.00098C4.14216 9.12032 4.09475 9.2348 4.01036 9.31913C3.92597 9.40355 3.81152 9.45098 3.69218 9.45098C3.57283 9.45098 3.45838 9.40355 3.37399 9.31913C3.2896 9.2348 3.24219 9.12032 3.24219 9.00098C3.24391 7.47392 3.85129 6.0099 4.93108 4.93011C6.01088 3.8503 7.4749 3.24293 9.00194 3.24121C9.12128 3.24121 9.23576 3.28862 9.32018 3.37301C9.40451 3.4574 9.45194 3.57185 9.45194 3.69119C9.45194 3.81053 9.40451 3.92499 9.32018 4.00938C9.23576 4.09376 9.12128 4.14117 9.00194 4.14117C7.7135 4.14264 6.47825 4.65512 5.56718 5.5662C4.65611 6.47727 4.14363 7.71253 4.14216 9.00098Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11.349 6.2221C11.35 5.90315 11.4154 5.5877 11.5415 5.29473C11.6676 5.00176 11.8516 4.73734 12.0827 4.51738L14.0618 2.53823C14.3023 2.28177 14.5982 2.08349 14.9268 1.95844C15.2554 1.83339 15.6082 1.78486 15.9584 1.81654C16.1877 1.84202 16.4077 1.92116 16.6007 2.04755C16.7936 2.17392 16.9542 2.34399 17.0691 2.54396C17.8897 3.97833 18.1744 5.73085 17.8924 7.61206C17.5325 10.0092 16.2685 12.3968 14.3326 14.3356C12.3944 16.2709 10.0068 17.535 7.60959 17.8946C5.7284 18.1769 3.97589 17.8922 2.54126 17.0715C2.34135 16.9565 2.17134 16.796 2.045 16.603C1.91867 16.4101 1.83956 16.1901 1.8141 15.9609C1.78242 15.6107 1.83096 15.2579 1.95602 14.9292C2.08108 14.6005 2.27937 14.3047 2.53585 14.0642L4.51495 12.0851C4.73489 11.8541 4.9993 11.67 5.29225 11.544C5.58521 11.4179 5.90065 11.3523 6.21958 11.3514C6.43206 11.353 6.64194 11.3983 6.83616 11.4845C7.03038 11.5707 7.20479 11.696 7.34852 11.8524L8.53866 13.1817C10.5308 12.1555 12.1531 10.5332 13.1792 8.54113L11.8501 7.35116C11.6936 7.20742 11.5683 7.033 11.4822 6.83876C11.396 6.64451 11.3506 6.4346 11.349 6.2221ZM12.4503 6.68055L14.278 8.31696L14.1401 8.61837C13.5783 9.82648 12.8077 10.926 11.8638 11.8662C10.9235 12.8102 9.82404 13.5807 8.61592 14.1425L8.31451 14.2805L6.67792 12.4526C6.61533 12.3878 6.54018 12.3365 6.45706 12.3018C6.37396 12.2672 6.28463 12.2499 6.19459 12.251C5.99824 12.2566 5.80492 12.301 5.62584 12.3818C5.44677 12.4625 5.28548 12.578 5.15131 12.7215L3.17223 14.7005C3.01474 14.8443 2.89121 15.0213 2.8106 15.2187C2.72998 15.4161 2.6943 15.629 2.70614 15.8419C2.71359 15.9339 2.74313 16.0227 2.79226 16.1007C2.8414 16.1789 2.90865 16.2439 2.98833 16.2905C4.24535 17.0095 5.79719 17.2565 7.47604 17.0047C9.68445 16.6733 11.8937 15.4992 13.6963 13.6992C15.4968 11.896 16.6709 9.6868 17.0023 7.4785C17.254 5.79956 17.007 4.2478 16.2881 2.99102C16.2416 2.91128 16.1765 2.84396 16.0984 2.79477C16.0203 2.74559 15.9314 2.71599 15.8394 2.70851C16.6265 2.6967 15.4137 2.73239 15.2163 2.813C15.0189 2.89362 14.8419 3.01714 14.6982 3.17461L12.719 5.15377C12.5755 5.28794 12.46 5.44923 12.3793 5.62831C12.2986 5.80738 12.2541 6.0007 12.2485 6.19706C12.2475 6.28714 12.2648 6.3765 12.2995 6.45964C12.3342 6.54278 12.3855 6.61795 12.4503 6.68055Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white hover:text-[#a8996e] transition-colors duration-200 drop-shadow-md"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-[#a8996e] transition-colors duration-200 font-light tracking-wide py-2"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href="tel:+78126605650"
                    className="flex items-center space-x-2 text-white hover:text-[#a8996e] transition-colors duration-200 font-light py-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+7 (812) 660-56-50</span>
                  </a>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <Button
                    onClick={openChat}
                    className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors w-full"
                  >
                    <MessageCircle className="w-[18px] h-[18px]" />
                    <span className="ml-2">Открыть чат</span>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
