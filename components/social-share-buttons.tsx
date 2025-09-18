"use client"

interface SocialShareButtonsProps {
  url: string
  title: string
  description?: string
}

const VKIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.9-1.744-.9-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.169-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
  </svg>
)

const OKIcon = () => (
  <svg className="w-5 h-5" viewBox="-6 -2 24 24" fill="currentColor">
    <path d="M4.974 14.011c-1.531-.16-2.912-.54-4.094-1.471-.147-.116-.299-.228-.432-.357-.518-.5-.57-1.074-.16-1.664.35-.506.938-.641 1.549-.35.118.055.23.126.339.201 2.203 1.524 5.23 1.566 7.441.069.22-.17.454-.308.725-.378.528-.136 1.02.059 1.303.524.324.53.32 1.05-.079 1.461-.611.633-1.347 1.09-2.164 1.409-.773.302-1.62.454-2.457.554.126.139.186.207.265.287 1.137 1.15 2.28 2.297 3.414 3.451.386.394.467.881.254 1.339-.233.5-.753.829-1.264.794-.323-.023-.575-.185-.8-.412-.858-.87-1.732-1.724-2.573-2.61-.245-.258-.363-.209-.579.015-.863.895-1.74 1.776-2.624 2.653-.396.393-.868.464-1.328.24-.488-.24-.8-.741-.775-1.246.016-.342.183-.602.416-.836 1.126-1.132 2.248-2.267 3.371-3.4.074-.076.144-.156.252-.273z" />
    <path d="M5.907 10.069C3.175 10.059.935 7.779.95 5.023.966 2.237 3.208-.007 5.967 0c2.764.007 4.983 2.285 4.97 5.1-.015 2.75-2.27 4.978-5.03 4.969zm2.483-5.04a2.444 2.444 0 0 0-2.443-2.458A2.447 2.447 0 0 0 3.498 5.06 2.443 2.443 0 0 0 5.96 7.5a2.439 2.439 0 0 0 2.43-2.47z" />
  </svg>
)

const TelegramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.432.672-.864.42l-2.388-1.764-1.152 1.116c-.128.128-.236.236-.48.236l.168-2.388 4.332-3.912c.192-.168-.036-.264-.3-.096l-5.364 3.372-2.304-.72c-.504-.156-.516-.504.108-.744l8.988-3.456c.42-.156.792.096.636.744z" />
  </svg>
)

const MaxIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 321.4 318.8" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M164.0085602,318.8161011
	c-31.5135651,0-46.1585617-4.6004944-71.614769-23.002594c-16.1018295,20.7023315-67.0909348,36.8808594-69.3145142,9.2010498
	c0-20.7790222-4.6005192-38.337677-9.8144436-57.5065155C7.054132,223.8920135,0,197.5923615,0,159.484726
	C0,68.4710846,74.6817856,0,163.1651459,0c88.5600128,0,157.9512177,71.8448029,157.9512177,160.3281403
	C321.4136047,247.443161,251.1228333,318.3513794,164.0085602,318.8161011z M165.3120422,78.6689148
	c-43.0915375-2.2235794-76.6753464,27.6031265-84.112854,74.3750916
	c-6.1340332,38.7210541,4.7538681,85.8764038,14.0315857,88.3300018
	c4.4471664,1.0734558,15.6417694-7.9742432,22.6192245-14.9516907
	c11.5375748,7.9704437,24.9729691,12.7574768,38.9510727,13.8782349
	c44.6499329,2.1477356,82.80159-31.8444214,85.7997131-76.4453125c1.7453156-44.6953049-32.6325836-82.551918-77.2887573-85.109642
	L165.3120422,78.6689148z"
    />
  </svg>
)

export default function SocialShareButtons({ url, title, description }: SocialShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || title)

  const shareLinks = {
    vk: `https://vk.com/share.php?url=${encodedUrl}&title=${encodedTitle}&description=${encodedDescription}`,
    ok: `https://connect.ok.ru/offer?url=${encodedUrl}&title=${encodedTitle}&description=${encodedDescription}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    max: `https://max.mail.ru/share?url=${encodedUrl}&title=${encodedTitle}`,
  }

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400")
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-900">Поделиться статьей</h3>
      <div className="flex gap-3">
        <button
          onClick={() => handleShare("vk")}
          className="flex items-center gap-2 px-4 py-2 bg-[#4C75A3] text-white rounded-lg hover:bg-[#45689A] transition-colors"
          aria-label="Поделиться ВКонтакте"
        >
          <VKIcon />
          <span className="hidden sm:inline">ВКонтакте</span>
        </button>

        <button
          onClick={() => handleShare("ok")}
          className="flex items-center gap-2 px-4 py-2 bg-[#EE8208] text-white rounded-lg hover:bg-[#D67207] transition-colors"
          aria-label="Поделиться в Одноклассниках"
        >
          <OKIcon />
          <span className="hidden sm:inline">OK</span>
        </button>

        <button
          onClick={() => handleShare("telegram")}
          className="flex items-center gap-2 px-4 py-2 bg-[#0088CC] text-white rounded-lg hover:bg-[#0077B5] transition-colors"
          aria-label="Поделиться в Telegram"
        >
          <TelegramIcon />
          <span className="hidden sm:inline">Telegram</span>
        </button>

        <button
          onClick={() => handleShare("max")}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00BFFF] via-[#4169E1] to-[#8A2BE2] text-white rounded-lg hover:from-[#00A8E6] hover:via-[#3A5FD1] hover:to-[#7B27D3] transition-all duration-200"
          aria-label="Поделиться в Max"
        >
          <MaxIcon />
          <span className="hidden sm:inline">Max</span>
        </button>
      </div>
    </div>
  )
}
