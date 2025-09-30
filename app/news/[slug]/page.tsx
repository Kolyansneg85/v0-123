import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import SocialShareButtons from "@/components/social-share-buttons"
import RelatedNewsCarousel from "@/components/related-news-carousel"

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  image?: string
}

const articles: Article[] = [
  {
    id: "6",
    slug: "eklektika-novyy-standart-klubnyh-domov",
    title: "Эклектика как новый стандарт клубных домов Петербурга: анализ архитектурной концепции «Коллекционера»",
    excerpt:
      "Эклектика переживает второе рождение в сегменте клубных домов Санкт-Петербурга. Клубный дом «Коллекционер» от бюро «Проектная культура» — яркий пример этого тренда, сочетающий элементы петербургской эклектики XIX века с современными архитектурными решениями.",
    content: `
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://kollektsioner-dom.ru/news/eklektika-novyy-standart-klubnyh-domov"
        },
        "headline": "Эклектика как новый стандарт клубных домов Петербурга: анализ архитектурной концепции «Коллекционера»",
        "description": "Подробный анализ архитектурной концепции клубного дома «Коллекционер»: почему эклектика возвращается в премиальную застройку, особенности работы с натуральным камнем и сравнение с другими проектами Санкт-Петербурга.",
        "image": [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1074-6DaHhQ7j3movfUNnifaO6Ofm57WUxc.webp",
          "https://kollektsioner-dom.ru/images/building-facade.webp"
        ],
        "datePublished": "2025-09-30T17:59:00+03:00",
        "dateModified": "2025-09-30T17:59:00+03:00",
        "author": {
          "@type": "Organization",
          "name": "Редакция блога «Коллекционер»"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Клубный дом «Коллекционер»",
          "logo": {
            "@type": "ImageObject",
            "url": "https://kollektsioner-dom.ru/images/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "articleSection": [
          "Архитектура",
          "Клубные дома",
          "Недвижимость премиум-класса"
        ],
        "keywords": "эклектика, клубные дома Санкт-Петербурга, Коллекционер, Проектная культура, натуральный камень фасады, премиальная недвижимость, архитектура Петроградской стороны",
        "about": [
          {
            "@type": "Place",
            "name": "Клубный дом «Коллекционер»",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Чапыгина, 4",
              "addressLocality": "Санкт-Петербург",
              "postalCode": "197022",
              "addressCountry": "RU"
            }
          },
          {
            "@type": "Organization",
            "name": "Проектная культура",
            "url": "https://proektnaya-kultura.ru"
          }
        ],
        "mentions": [
          {
            "@type": "ArchitecturalStructure",
            "name": "Дом на Кирочной"
          },
          {
            "@type": "ArchitecturalStructure",
            "name": "Клубный дом «Созидатели»"
          }
        ]
      }
      </script>

      <h2>Почему эклектика возвращается в элитную застройку</h2>
      
      <p><strong>Эклектика переживает второе рождение в сегменте клубных домов</strong> Санкт-Петербурга. <strong>После двух десятилетий доминирования стеклянно-бетонного модернизма</strong>, девелоперы премиум-класса возвращаются к <strong>многослойности и декоративности исторических стилей</strong>.</p>

      <p><a href="/">Клубный дом «Коллекционер»</a> от бюро <strong>«Проектная культура»</strong> — яркий пример этого тренда. Проект сочетает элементы <strong>петербургской эклектики XIX века</strong> с современными архитектурными решениями, создавая уникальный визуальный код для <a href="/#about">камерного дома на 69 квартир</a>.</p>

      <h3>Исторический контекст: эклектика в Петербурге</h3>

      <p><strong>Эклектика господствовала в Петербурге с 1830-х до 1900-х годов</strong>, став переходным стилем между строгим классицизмом и свободным модерном. Архитекторы XIX века <strong>свободно комбинировали элементы разных эпох</strong> — от ренессанса до готики, создавая индивидуальные композиции для каждого здания.</p>

      <p><strong>Ключевые признаки исторической эклектики:</strong></p>
      <ul>
        <li>Обильный декор фасадов: карнизы, русты, пилястры</li>
        <li>Использование натуральных материалов: гранит, известняк, кирпич</li>
        <li>Выразительные архитектурные акценты: башни, эркеры, балконы</li>
        <li>Индивидуальность каждого здания</li>
      </ul>

      <h2>Архитектурная концепция «Коллекционера»: неоэклектика 2025</h2>

      <h3>Бюро «Проектная культура»: мастера контекстуальной архитектуры</h3>

      <p>Архитектурное бюро <strong>«Проектная культура» основано в 2015 году</strong> Владимиром Григорьевым, бывшим председателем Комитета по градостроительству и архитектуре Санкт-Петербурга. <strong>30-летний опыт команды</strong> в проектировании элитных объектов — от Ледового дворца до резиденции Центробанка — гарантирует высочайший уровень исполнения.</p>

      <p><strong>Философия бюро</strong>: создание архитектуры, <strong>органично вписанной в исторический контекст города</strong>, но отвечающей современным требованиям комфорта и эстетики.</p>

      <h3>Архитектурное решение фасадов: детальный анализ</h3>

      <p><strong>Фасады «Коллекционера» выполнены из натурального камня</strong> — гранита и известняка — материалов, традиционных для петербургской эклектики. Это не просто облицовка, а <strong>полноценная архитектурная система</strong> с многолетней историей использования в климате Санкт-Петербурга.</p>

      <h4>Материалы и технологии:</h4>

      <p><strong>Гранит</strong> — основной фасадный материал:</p>
      <ul>
        <li><strong>Морозостойкость</strong>: выдерживает перепады температур -40°C до +40°C</li>
        <li><strong>Долговечность</strong>: срок службы облицовки превышает 100 лет</li>
        <li><strong>Эстетика</strong>: игра света на фактурной поверхности создает объем</li>
        <li><strong>Статус</strong>: гранитные фасады — признак <a href="/#about">премиального жилья</a></li>
      </ul>

      <p><strong>Известняк</strong> — для декоративных элементов:</p>
      <ul>
        <li><strong>Пластичность</strong>: легко обрабатывается, позволяет создавать сложные формы</li>
        <li><strong>Теплота</strong>: светлые оттенки смягчают монументальность гранита</li>
        <li><strong>Экологичность</strong>: натуральный камень, безопасный для здоровья</li>
        <li><strong>Традиционность</strong>: известняк использовался в петербургской архитектуре веками</li>
      </ul>

      <h3>Декоративные элементы: эклектический словарь «Коллекционера»</h3>

      <p><strong>«Коллекционер» — это многослойное послание</strong>, где каждый элемент несет смысловую нагрузку:</p>

      <h4>Башенки — вертикальные акценты</h4>
      <p><strong>Угловые башни-эркеры</strong> не только украшают фасад, но и выполняют функциональную роль:</p>
      <ul>
        <li>Увеличивают площадь <a href="/#apartments">квартир на верхних этажах</a></li>
        <li>Создают панорамное остекление с видами на <a href="/#location">Петроградскую сторону</a></li>
        <li>Формируют узнаваемый силуэт здания</li>
        <li>Отсылают к доходным домам Петербурга XIX века</li>
      </ul>

      <h4>Русты — горизонтальная пластика</h4>
      <p><strong>Рустованная облицовка первых этажей</strong> создает визуальный фундамент:</p>
      <ul>
        <li>Подчеркивает монументальность и надежность здания</li>
        <li>Контрастирует с гладкими верхними этажами</li>
        <li>Традиционный прием классической архитектуры</li>
        <li>Защищает нижние этажи от механических повреждений</li>
      </ul>

      <h4>Карнизы — завершающие акценты</h4>
      <p><strong>Выразительные карнизы большого выноса</strong>:</p>
      <ul>
        <li>Защищают фасад от осадков (практическая функция)</li>
        <li>Создают игру светотени (эстетическая функция)</li>
        <li>Подчеркивают горизонтальное членение здания</li>
        <li>Усиливают ощущение солидности и престижа</li>
      </ul>

      <h4>Латунные инкрустации — современный акцент</h4>
      <p><strong>Детали из латуни</strong> — неожиданный элемент в эклектическом ансамбле:</p>
      <ul>
        <li>Добавляют современности в исторический контекст</li>
        <li>Создают визуальные акценты на фасаде</li>
        <li>Подчеркивают статус проекта (латунь = премиальность)</li>
        <li>Устойчивы к коррозии и старению</li>
      </ul>

      <h3>Объемно-пространственное решение</h3>

      <p><strong>Комплекс состоит из двух секций</strong> — 6 и 8 этажей, соединенных <strong>витражной анфиладой</strong>. Это решение:</p>
      <ul>
        <li>Сохраняет камерность застройки (vs. высотные башни)</li>
        <li>Обеспечивает естественную вентиляцию <a href="/#intelligent-courtyard">внутреннего двора</a></li>
        <li>Создает уникальные видовые характеристики для каждой квартиры</li>
        <li>Гармонично вписывается в сложившуюся застройку <a href="/#location">Петроградской стороны</a></li>
      </ul>

      <h2>Сравнительный анализ: «Коллекционер» vs другие эклектичные клубные дома</h2>

      <h3>«Дом на Кирочной» (Центральный район)</h3>

      <p><strong>Сходства:</strong></p>
      <ul>
        <li>Эклектичная архитектура с натуральным камнем</li>
        <li>69 квартир (идентичная камерность)</li>
        <li>Угловые башни-эркеры</li>
        <li>Мансардные этажи</li>
      </ul>

      <p><strong>Отличия «Коллекционера»:</strong></p>
      <ul>
        <li>✅ Наличие <a href="/news/kollekcioner-dom-s-pinakotekoy">пинакотеки с произведениями искусства</a></li>
        <li>✅ Витражная анфилада между корпусами</li>
        <li>✅ Приватный <a href="/#intelligent-courtyard">двор-патио в испанском стиле</a></li>
        <li>✅ <a href="/#apartments">Квартиры со вторым светом</a> до 6,4 м</li>
      </ul>

      <h3>«Созидатели» (исторический центр)</h3>

      <p><strong>Сходства:</strong></p>
      <ul>
        <li>Стиль эклектика</li>
        <li>Малоэтажность (4-8 этажей)</li>
        <li>Камерность проекта</li>
      </ul>

      <p><strong>Отличия «Коллекционера»:</strong></p>
      <ul>
        <li>✅ Более выраженная декоративность фасадов</li>
        <li>✅ Использование латунных элементов</li>
        <li>✅ <a href="/news/kollekcioner-dom-s-pinakotekoy">Арт-концепция с пинакотекой</a></li>
        <li>✅ Локация на <a href="/#location">Петроградской стороне</a> (более престижная)</li>
      </ul>

      <h3>Таблица сравнения архитектурных решений:</h3>

      <div class="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 my-6">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden shadow-sm ring-1 ring-gray-200 rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Параметр</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Коллекционер</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Дом на Кирочной</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Созидатели</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-900 font-medium whitespace-nowrap">Стиль</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Неоэклектика</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Эклектика XIX в.</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Эклектика</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-900 font-medium whitespace-nowrap">Материал фасада</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Гранит + известняк</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Камень + кирпич</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Штукатурка + камень</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-900 font-medium whitespace-nowrap">Этажность</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">6-8 этажей</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">6-8 этажей</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">4-8 этажей</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-900 font-medium whitespace-nowrap">Кол-во квартир</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">69</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">69</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Более 100</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-900 font-medium whitespace-nowrap">Уникальные элементы</td>
                  <td class="px-4 py-3 text-sm text-gray-700"><a href="/news/kollekcioner-dom-s-pinakotekoy" class="text-[#a8996e] hover:underline font-medium">Пинакотека</a>, латунь</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Угловая башня</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Шесть секций</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-900 font-medium whitespace-nowrap">Двор</td>
                  <td class="px-4 py-3 text-sm text-gray-700"><a href="/#intelligent-courtyard" class="text-[#a8996e] hover:underline font-medium">Закрытый патио</a></td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Подземный паркинг</td>
                  <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">Стандартный</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h2>Почему эклектика — идеальный выбор для Петроградской стороны</h2>

      <p><strong><a href="/#location">Петроградская сторона</a> — заповедник петербургской архитектуры</strong>, где сосредоточены здания модерна, неоклассицизма и эклектики начала XX века. <strong>Эклектичный «Коллекционер» органично вписывается в этот контекст</strong>, не подражая напрямую историческим образцам, но <strong>создавая с ними диалог</strong>.</p>

      <h3>Преимущества эклектики для клубных домов:</h3>

      <p><strong>1. Индивидуальность</strong><br>
      Эклектика позволяет создать <strong>уникальный образ здания</strong>, выделяющийся среди типовой застройки. Каждый элемент фасада продуман и несет смысл.</p>

      <p><strong>2. Статусность</strong><br>
      <strong>Натуральные материалы и обильный декор</strong> — визуальные маркеры <a href="/#about">премиального жилья</a>. Прохожий мгновенно считывает статус здания.</p>

      <p><strong>3. Долговечность</strong><br>
      <strong>Каменные фасады служат столетиями</strong> без потери эстетических качеств. Это инвестиция в долгосрочную ценность недвижимости.</p>

      <p><strong>4. Контекстуальность</strong><br>
      Эклектика <strong>уважает историческую застройку</strong>, не пытаясь её копировать или контрастировать с ней. Это архитектура-медиатор.</p>

      <p><strong>5. Инвестиционная привлекательность</strong><br>
      Дома с <strong>выразительной архитектурой лучше удерживают и наращивают стоимость</strong>. Через 20-30 лет эклектичные фасады будут восприниматься как «классика эпохи».</p>

      <h2>Экспертные прогнозы: будущее эклектики в премиальной застройке</h2>

      <p><strong>Эклектика станет доминирующим стилем в клубных домах 2025-2030 годов</strong>. Факторы, подтверждающие этот тренд:</p>

      <h3>Запрос на индивидуальность</h3>
      <p><strong>Покупатели премиального жилья устали от однотипных стеклянных башен</strong>. Они ищут дома с характером и историей, даже если эта история создана сегодня.</p>

      <h3>Ужесточение градостроительных регламентов</h3>
      <p><strong>Петербург усиливает требования к контекстуальности застройки</strong>. Эклектика — компромисс между современностью и уважением к историческому окружению.</p>

      <h3>Технологический прогресс</h3>
      <p><strong>Современные материалы позволяют создавать сложные формы</strong> без удорожания строительства. То, что в XIX веке было дорого, сегодня доступно.</p>

      <h3>Рост престижа мастерства</h3>
      <p><strong>Ценится ручная работа и детализация</strong>. Эклектичные фасады с резным камнем и латунными деталями — демонстрация мастерства.</p>

      <h2>Заключение: эклектика как философия коллекционирования</h2>

      <p><strong>«Коллекционер» — не просто клубный дом, а архитектурный манифест</strong>. Бюро «Проектная культура» доказывает: <strong>эклектика может быть современной</strong>, если использовать её не как стилизацию, а как метод создания многослойных, индивидуальных пространств.</p>

      <p><strong>Ключевые выводы:</strong></p>
      <ul>
        <li>✅ Эклектика возвращается как стандарт премиального жилья</li>
        <li>✅ Натуральные материалы обеспечивают долговечность и статус</li>
        <li>✅ «Проектная культура» задает новые стандарты контекстуальной архитектуры</li>
        <li>✅ «Коллекционер» — эталон неоэклектики для <a href="/#location">Петроградской стороны</a></li>
      </ul>

      <p>Хотите узнать больше о <a href="/#apartments">квартирах в «Коллекционере»</a>? <a href="/#contact">Свяжитесь с нами</a> для получения подробной презентации проекта и условий приобретения.</p>

      <p><em>Читайте также: <a href="/news/zastroishchik-razreshenie-kollekcioner">Застройщик получил разрешение на строительство</a> и <a href="/news/kollekcioner-dom-s-pinakotekoy">Клубный дом с картинной галереей</a></em></p>
    `,
    date: "2025-09-30",
    readTime: "12 мин",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1074-6DaHhQ7j3movfUNnifaO6Ofm57WUxc.webp",
  },
  {
    id: "5",
    slug: "kollekcioner-dom-s-pinakotekoy",
    title: "Клубный дом «Коллекционер»: дом с картинной галереей на Петроградской стороне",
    excerpt:
      "«Коллекционер» — камерный клубный дом в сердце Петроградской стороны, где архитектура эклектики соединена с живым искусством: в лобби создана полноценная пинакотека с работами современных художников.",
    content: `
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": "https://kollektsioner-dom.ru/news/kollekcioner-dom-s-pinakotekoy#post",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://kollektsioner-dom.ru/news/kollekcioner-dom-s-pinakotekoy"
        },
        "headline": "Клубный дом «Коллекционер»: дом с картинной галереей на Петроградской стороне",
        "alternativeHeadline": "Пинакотека, эклектика и приватные пространства: арт‑концепция «Коллекционера»",
        "description": "«Коллекционер» — камерный клубный дом, где архитектура эклектики объединена с живым искусством: в лобби создана пинакотека с работами современных художников, а общественные пространства — от витражной анфилады до приватного патио — спроектированы как продолжение художественной экспозиции и комфортной городской жизни.",
        "articleSection": [
          "Арт‑концепция и пинакотека",
          "Архитектура эклектики",
          "Приватные пространства",
          "Для кого проект",
          "Ключевые преимущества"
        ],
        "keywords": [
          "Клубный дом Коллекционер",
          "дом с картинной галереей",
          "пинакотека",
          "Петроградская сторона",
          "элитная недвижимость СПб",
          "пинакотека",
          "двухуровневые квартиры",
          "мансардный этаж",
          "второй свет"
        ],
        "datePublished": "2025-09-19T19:56:00+03:00",
        "dateModified": "2025-09-19T19:56:00+03:00",
        "author": {
          "@type": "Organization",
          "@id": "https://kollektsioner-dom.ru/#org",
          "name": "Редакция блога «Коллекционер»"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://kollektsioner-dom.ru/#org",
          "name": "Коллекционер — официальный сайт",
          "logo": {
            "@type": "ImageObject",
            "url": "https://kollektsioner-dom.ru/images/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "image": [
          "https://kollektsioner-dom.ru/images/art-gallery-interior.png",
          "https://kollektsioner-dom.ru/images/building-facade.webp",
          "https://kollektsioner-dom.ru/images/courtyard-1.jpeg"
        ],
        "about": [
          {
            "@type": "Place",
            "name": "Клубный дом «Коллекционер»",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Чапыгина, 4",
              "addressLocality": "Санкт-Петербург",
              "postalCode": "197022",
              "addressCountry": "RU"
            }
          }
        ],
        "mentions": [
          { "@type": "Thing", "name": "Петроградская сторона" },
          { "@type": "CreativeWork", "name": "Живопись и скульптура в пинакотеке" },
          { "@type": "ArchitecturalStructure", "name": "Витражная анфилада" },
          { "@type": "ArchitecturalStructure", "name": "Приватный двор‑патио" }
        ],
        "articleBody": "«Коллекционер» — дом, который перешагивает границы классического девелопмента, превращая общее пространство в продуманный арт‑маршрут. Лобби встречает пинакотекой — полноценной экспозицией современного искусства. Витражная анфилада объединяет корпуса и продолжает галерейный сценарий, а эклектичные фасады из натурального камня с рустами, карнизами и латунными деталями задают архитектурный тон. Входная площадь, зелёный двор‑патио без машин, вечерняя подсветка и камерные зоны отдыха формируют частный городской «салон». Такой формат выбирают те, для кого культура и эстетика — часть повседневной жизни, а также инвесторы, ориентированные на редкое предложение клубных домов в историческом центре."
      }
      </script>

      <p><strong><a href="/">«Коллекционер»</a> — камерный клубный дом в сердце <a href="/#location">Петроградской стороны</a>, где <a href="/news/eklektika-novyy-standart-klubnyh-domov">архитектура эклектики</a> соединена с живым искусством:</strong> в лобби создана полноценная пинакотека с работами современных художников, а общественные пространства спроектированы как продолжение художественной экспозиции и комфортной городской жизни.</p>

      <h3>Почему это событие важно</h3>
      <ul>
        <li><strong>Уникальность формата:</strong> редкий для Петербурга дом, где галерея искусства встроена в повседневный маршрут жителей.</li>
        <li><strong>Усиление ценности локации:</strong> проект делает <a href="/#location">Петроградскую сторону</a> не только местом для жизни, но и точкой притяжения культурной среды.</li>
        <li><strong>Новый стандарт клубных домов:</strong> синтез авторской архитектуры, приватных пространств и кураторского подхода к искусству.</li>
      </ul>

      <h3>Арт‑концепция: пинакотека как «сердце» дома</h3>
      <ul>
        <li>В лобби разместили пинакотеку — выставочное пространство с коллекцией живописи и скульптуры; это не декоративный элемент, а ядро проектной идеи.</li>
        <li>Экспозиция формирует эмоциональный сценарий входа: от площади у парадного входа — к светлой анфиладе и далее к приватным зонам.</li>
        <li>Вечерняя подсветка и витражные проёмы усиливают экспозиционный эффект: искусство «работает» и как атмосферный свет.</li>
      </ul>

      <h3>Архитектура эклектики и детали уровня коллекционного жилья</h3>
      <ul>
        <li>Натуральный камень, русты, карнизы, башенки, латунные инкрустации — пластика фасадов рассчитана на «считывание» вблизи. <a href="/news/eklektika-novyy-standart-klubnyh-domov">Подробнее об архитектурной концепции эклектики</a>.</li>
        <li>Витражная анфилада объединяет корпуса и визуально продолжает галерейную линию интерьеров.</li>
        <li>На верхних уровнях — мансарды с люкарнами, в части лотов — <a href="/#apartments">второй свет и террасы</a>: архитектура поддерживает экспозиционность видов.</li>
      </ul>

      <h3>Приватные пространства и городские «салоны»</h3>
      <ul>
        <li>У входа — небольшая «итальянская» площадь, внутри — закрытый зелёный <a href="/#intelligent-courtyard">двор‑патио в испанской традиции</a>: места встреч, чтения и камерных событий.</li>
        <li>В лобби помимо пинакотеки — две переговорные и кофе‑поинт: «дневной салон» для жителей и гостей.</li>
        <li>Двор без машин, ландшафтный сад и мягкие вечерние сценарии освещения поддерживают клубную камерность.</li>
      </ul>

      <h3>Для кого этот проект</h3>
      <ul>
        <li>Для коллекционеров впечатлений и ценителей искусства: здесь искусство — часть повседневности, а не редкое событие.</li>
        <li>Для семей, кому важна приватность и статус <a href="/#about">небольшого дома в историческом центре</a>.</li>
        <li>Для инвесторов, ориентированных на «редкость» предложения и устойчивый спрос на <a href="/#location">Петроградской стороне</a>.</li>
      </ul>

      <h3>Ключевые преимущества «Коллекционера»</h3>
      <ul>
        <li><strong>Уникальная арт‑идентичность:</strong> пинакотека и кураторский подход к общим пространствам.</li>
        <li><strong>Камерность вместо «мегакварталов»:</strong> <a href="/#about">ограниченное число лотов</a> в центральной локации.</li>
        <li><strong>Сценарии жизни «от двери до двора»:</strong> парадная площадь, анфилада, лобби‑галерея, <a href="/#intelligent-courtyard">приватное патио</a>.</li>
        <li><strong>Архитектура, «собирающая» классику и современность:</strong> <a href="/news/eklektika-novyy-standart-klubnyh-domov">эклектика</a>, натуральный камень, вечерняя подсветка.</li>
      </ul>

      <p>Хочется увидеть, как пинакотека работает в реальном пространстве? <a href="/#contact">Закажите презентацию</a> и подбор <a href="/#apartments">планировок</a>: на старте продаж действует приоритетная запись на показы и спецусловия.</p>

      <p><em>Читайте также: <a href="/news/zastroishchik-razreshenie-kollekcioner">Застройщик получил разрешение на строительство</a> и <a href="/news/eklektika-novyy-standart-klubnyh-domov">Эклектика как новый стандарт клубных домов</a></em></p>
    `,
    date: "2025-09-19",
    readTime: "8 мин",
    image: "/images/art-gallery-interior.png",
  },
  {
    id: "4",
    slug: "zastroishchik-razreshenie-kollekcioner",
    title: "Застройщик получил разрешение на строительство клубного дома «Коллекционер» на Петроградской стороне",
    excerpt:
      "Госстройнадзор Санкт‑Петербурга выдал разрешение на строительство клубного дома «Коллекционер» по адресу ул. Чапыгина, 4 — камерного проекта премиум‑класса на 69 квартир с авторской эклектичной архитектурой, лобби‑пинакотекой, приватным двор‑патио и двухуровневым паркингом.",
    content: `
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": "https://kollektsioner-dom.ru/news/zastroishchik-razreshenie-kollekcioner#post",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://kollektsioner-dom.ru/news/zastroishchik-razreshenie-kollekcioner"
        },
        "headline": "Застройщик получил разрешение на строительство клубного дома «Коллекционер» на Петроградской стороне",
        "alternativeHeadline": "Разрешение на строительство: старт флагманского проекта «Коллекционер» на ул. Чапыгина, 4",
        "description": "Госстройнадзор Санкт‑Петербурга выдал разрешение на строительство клубного дома «Коллекционер»: 69 камерных квартир 43–222 м², авторская эклектичная архитектура, лобби‑пинакотека, приватный двор‑патио и двухуровневый паркинг на Петроградской стороне.",
        "articleSection": [
          "Ключевые параметры проекта",
          "Локация и окружение",
          "Кому подходит",
          "Конкурентные преимущества",
          "Возможные сроки",
          "Старт продаж"
        ],
        "keywords": [
          "Клубный дом Коллекционер",
          "разрешение на строительство",
          "Петроградская сторона",
          "ул. Чапыгина 4",
          "элитная недвижимость СПб",
          "пинакотека",
          "двухуровневые квартиры",
          "мансардный этаж",
          "второй свет"
        ],
        "datePublished": "2025-09-19T19:45:00+03:00",
        "dateModified": "2025-09-19T19:45:00+03:00",
        "author": {
          "@type": "Organization",
          "@id": "https://kollektsioner-dom.ru/#org",
          "name": "Редакция блога «Коллекционер»"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://kollektsioner-dom.ru/#org",
          "name": "Коллекционер — официальный сайт",
          "logo": {
            "@type": "ImageObject",
            "url": "https://kollektsioner-dom.ru/images/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "image": [
          "https://kollektsioner-dom.ru/images/building-facade.webp",
          "https://kollektsioner-dom.ru/images/art-gallery-interior.png",
          "https://kollektsioner-dom.ru/images/courtyard-1.jpeg"
        ],
        "about": [
          {
            "@type": "Place",
            "name": "Клубный дом «Коллекционер»",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Чапыгина, 4",
              "addressLocality": "Санкт-Петербург",
              "postalCode": "197022",
              "addressCountry": "RU"
            }
          },
          {
            "@type": "Organization",
            "name": "Застройщик"
          }
        ]
      }
      </script>

      <p><strong>Госстройнадзор Санкт‑Петербурга выдал разрешение на строительство <a href="/">клубного дома «Коллекционер»</a> по адресу ул. Чапыгина, 4</strong> — <a href="/#about">камерного проекта премиум‑класса на 69 квартир</a> с авторской <a href="/news/eklektika-novyy-standart-klubnyh-domov">эклектичной архитектурой</a>, <a href="/news/kollekcioner-dom-s-pinakotekoy">лобби‑пинакотекой</a>, <a href="/#intelligent-courtyard">приватным двор‑патио</a> и двухуровневым паркингом.</p>

      <h3>Почему это важно</h3>
      <ul>
        <li><strong>Дефицит клубных домов в центре:</strong> ограниченное предложение на <a href="/#location">Петроградской стороне</a> традиционно поддерживает ликвидность и рост стоимости квадратного метра.</li>
        <li><strong>Старт нового флагманского проекта:</strong> застройщик закрепляет экспертизу в премиальном сегменте и архитектуре «для коллекционеров».</li>
        <li><strong>Уникальная концепция:</strong> интеграция жилой среды и искусства (<a href="/news/kollekcioner-dom-s-pinakotekoy">пинакотека</a>), что редкость для рынка элитного жилья.</li>
      </ul>

      <h3>Ключевые параметры проекта</h3>
      <ul>
        <li><strong>Адрес:</strong> Санкт‑Петербург, <a href="/#location">ул. Чапыгина, 4</a></li>
        <li><strong>Формат:</strong> 2 секции на 6 и 8 этажей, витражная анфилада между корпусами</li>
        <li><strong>Объем:</strong> <a href="/#about">69 квартир</a> площадью от 43 до 222 м² (от компактных европланировок до резиденций с 4–5 спальнями)</li>
        <li><strong>Особенности:</strong> мансардный этаж с люкарнами, двухуровневые лоты, <a href="/#apartments">квартиры со вторым светом</a> (высота до 6,4 м), террасы</li>
        <li><strong>Общественные пространства:</strong> авторское лобби с <a href="/news/kollekcioner-dom-s-pinakotekoy">пинакотекой</a>, две переговорные, кофе‑поинт</li>
        <li><strong>Двор:</strong> приватный курдонер и <a href="/#intelligent-courtyard">патио без машин</a>, ландшафтный сад, детская зона, Wi‑Fi</li>
        <li><strong>Паркинг:</strong> встроенно‑пристроенный двухуровневый, 57 машино‑мест, кладовые</li>
      </ul>

      <h3>Архитектура и инженерия</h3>
      <p>Архитектура выполнена в <a href="/news/eklektika-novyy-standart-klubnyh-domov">эклектичном стиле</a> с использованием натурального камня, башенок, рустов, латунных инкрустаций и выразительных карнизов. Инженерные системы включают индивидуальную вентиляцию в квартирах, ИТП, энергосберегающие фасады, усиление сотовой связи в паркинге, систему контроля доступа и видеонаблюдение.</p>

      <h3>Локация и окружение</h3>
      <p><a href="/#location">Петроградская сторона</a> — исторический центр культурной и деловой жизни: рядом гимназии и вузы, рестораны, бутики, набережные и скверы. Удобный доступ к Каменноостровскому и Большому проспектам, близость метро Петроградской стороны обеспечивают мобильность без отказа от камерности.</p>

      <h3>Кому подходит «Коллекционер»</h3>
      <ul>
        <li>Семьям, ценящим приватность, статус и редкий формат <a href="/#about">клубного дома</a> вместо «мегакварталов»</li>
        <li>Инвесторам, ориентированным на стабильный спрос и ограниченное предложение в <a href="/#location">центральной локации</a></li>
        <li>Ценителям архитектуры и искусства: <a href="/news/kollekcioner-dom-s-pinakotekoy">пинакотека</a>, анфилада, вечерняя подсветка фасадов формируют уникальную атмосферу</li>
      </ul>

      <h3>Конкурентные преимущества</h3>
      <ul>
        <li><strong>Камерность:</strong> всего <a href="/#about">69 квартир</a> — редкая планка для центра</li>
        <li><strong>Арт‑ДНК:</strong> собственная <a href="/news/kollekcioner-dom-s-pinakotekoy">галерея</a> и <a href="/news/eklektika-novyy-standart-klubnyh-domov">архитектура</a>, «собирающая» эстетику Петербурга</li>
        <li><strong>Гибкая квартирография:</strong> от одноместных городских форматов до семейных резиденций и <a href="/#apartments">двухуровневых лотов</a></li>
        <li><strong>Технологичность:</strong> энергоэффективность, инженерия «премиум», цифровая <a href="/#infrastructure">инфраструктура</a> и безопасность</li>
      </ul>

      <h3>Возможные сроки</h3>
      <p>Разрешение на строительство получено; завершение проекта ориентировочно заявляется к концу 2028 года. Конкретные даты и этапы могут уточняться по мере реализации.</p>

      <h3>Что будет на старте продаж</h3>
      <p>Старт продаж скоро. При появлении прайсов будет добавление цен в структурированную разметку предложений для карточек квартир. Специальные условия ранним покупателям и подбор «ликвидных» <a href="/#apartments">планировок</a> с минимальной площадью в каждом типе.</p>

      <p><a href="/#contact">Оставить заявку</a> — чтобы получить закрытую презентацию, набор планировок и зафиксировать условия на старте.</p>

      <p><em>Читайте также: <a href="/news/kollekcioner-dom-s-pinakotekoy">Клубный дом с картинной галереей</a> и <a href="/news/eklektika-novyy-standart-klubnyh-domov">Эклектика как новый стандарт клубных домов</a></em></p>
    `,
    date: "2025-09-19",
    readTime: "7 мин",
    image: "/images/building-facade.webp",
  },
]

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return {
      title: "Новость не найдена | Клубный дом Коллекционер - Domfy",
    }
  }

  return {
    title: `${article.title} | Клубный дом Коллекционер - Domfy`,
    description: article.excerpt,
    keywords: `Клубный дом Коллекционер, ${article.title}, новости недвижимости, Петроградская сторона, Санкт-Петербург`,
    alternates: {
      canonical: `https://kollektsioner-dom.ru/news/${params.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
      type: "article",
      publishedTime: article.date,
    },
  }
}

const ArrowLeft = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Calendar = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const Clock = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const fullUrl = `https://kollektsioner-dom.ru/news/${article.slug}`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигация */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft />
            Назад к новостям
          </Link>
        </div>
      </div>

      {/* Контент статьи */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {article.image && (
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          )}

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
              <div className="flex items-center gap-1">
                <Calendar />
                {new Date(article.date).toLocaleDateString("ru-RU")}
              </div>
              <div className="flex items-center gap-1">
                <Clock />
                {article.readTime}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-balance">{article.title}</h1>

            <div
              className="article-content prose prose-lg max-w-none 
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed
                prose-li:text-gray-700 prose-li:mb-2
                prose-ul:mb-6 prose-ul:space-y-2
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-a:text-[#a8996e] prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#8a7a58] prose-a:transition-all
                prose-blockquote:border-l-[3px] prose-blockquote:border-[#a8996e] prose-blockquote:pl-6 prose-blockquote:py-3 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:bg-transparent
                [&>script]:hidden"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Кнопки социальных сетей */}
            <div className="border-t border-gray-200 pt-8">
              <SocialShareButtons url={fullUrl} title={article.title} description={article.excerpt} />
            </div>
          </div>
        </div>

        {/* Карусель похожих новостей */}
        <div className="mt-12">
          <RelatedNewsCarousel currentArticleId={article.id} articles={articles} />
        </div>
      </article>
    </div>
  )
}
