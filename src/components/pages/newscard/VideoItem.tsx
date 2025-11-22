export interface VideoItem {
  href: string;
  img: string;
  alt?: string;
  title?: string;
  date?: string;
  tag?: string;
}

const sampleData: VideoItem[] = [
  {
    href: "/news/ypkh-inspektori-%D2%B3aydovchini-shantazh-k-ildi-video-127542",
    img: "https://ad-admin.qalampir.uz/uploads/19/m_chzJjEvdCb884hbPNi1Un0cIngELH5.jpg",
    alt: "ЙПХ инспектори ҳайдовчини “шантаж” қилди (видео)",
    title: "ЙПХ инспектори ҳайдовчини “шантаж” қилди (видео)",
    date: "14:49",
  },
  {
    href: "/news/ghrfhrghrt-127511",
    img: "https://ad-admin.qalampir.uz/uploads/Xw/m_4FDFHyoUERLaVCY2wns39z963kd7S0.jpg",
    alt: "",
    title: "",
    date: "21 Ноябрь",
  },
  {
    href: "/news/eron-poytakhti-baribir-kuchiriladigan-buldi-127501",
    img: "https://ad-admin.qalampir.uz/uploads/vL/m_xGkJTO0wrU27ND5cRZOu88rDCJOVe9.jpg",
    alt: "Эрон пойтахти барибир кўчириладиган бўлди (видео)",
    title: "Эрон пойтахти барибир кўчириладиган бўлди (видео)",
    date: "21 Ноябрь",
  },
  // add more items as needed...
];

export default function VideoNewsSection({
  items = sampleData,
}: {
  items?: VideoItem[];
}) {
  return (
    <section className="other-news">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="ajax-load" data-name="video">
          <div className="content-border video-new bg-white dark:bg-slate-900 rounded-xl shadow-sm p-4">
            <div className="title flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold title-click">
                Видео янгиликлар
              </h3>
              <a
                href="/video"
                className="all text-sm flex items-center gap-1 text-blue-600 hover:underline"
              >
                Барчаси
                <span className="qalampir-icons material-icons">call_made</span>
              </a>
            </div>

            {/* top row of small cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 video-news mb-6">
              {items.slice(0, 3).map((it, idx) => (
                <article key={idx} className="mini-item">
                  <a
                    href={it.href}
                    className="mini-item-link block rounded-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={it.img}
                        alt={it.alt ?? it.title ?? "video"}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-3 text-sm">
                      <div className="icon-mini-banner mb-2">
                        {/* play circle svg */}
                        <svg
                          width="53"
                          height="53"
                          viewBox="0 0 53 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.0268555"
                            y="0.401367"
                            width="52"
                            height="52"
                            rx="26"
                            fill="black"
                            fillOpacity="0.2"
                          ></rect>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.0269 21.2211V31.5811C22.0269 32.3711 22.8969 32.8511 23.5669 32.4211L31.7069 27.2411C32.3269 26.8511 32.3269 25.9511 31.7069 25.5511L23.5669 20.3811C22.8969 19.9511 22.0269 20.4311 22.0269 21.2211Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <p className="line-clamp-2">{it.title}</p>
                      <span className="date text-xs text-gray-500 mt-1 block">
                        {it.date}
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            {/* larger video cards grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
              {/* Example of larger cards - you can map a larger dataset here */}
              {[
                {
                  href: "/news/k-uyeshda-yerdan-%D2%B3am-kattarok-plazma-azhralib-chik-di-video-127449",
                  img: "https://ad-admin.qalampir.uz/uploads/UP/thumb_EC3XhfuoIpYfKSzstucingpyqlkXv5.jpg",
                  title:
                    "Қуёшда Ердан ҳам каттароқ плазма ажралиб чиқди (видео)",
                  tag: "Бу қизиқ",
                  date: "20 Ноябрь",
                },
                {
                  href: "/news/k-uylik-da-k-aychili-ugri-k-ulga-tushdi-video-127441",
                  img: "https://ad-admin.qalampir.uz/uploads/dg/thumb_C7xMkjbRtDDoDrzm2K34AJ9eAM6QbZ.jpg",
                  title: "Қўйлиқда “қайчили ўғри” қўлга тушди (видео)",
                  tag: "3-саҳифа",
                  date: "20 Ноябрь",
                },
                {
                  href: "/news/isroil-yana-%D2%B3izbullo%D2%B3-ga-zarbalar-yulladi-127405",
                  img: "https://ad-admin.qalampir.uz/uploads/UX/thumb_V47asfp7RlXzvJ6gkPVRLs6J3OPkOk.jpg",
                  title: "Исроил яна “Ҳизбуллоҳ”га зарбалар йўллади",
                  tag: "Олам",
                  date: "20 Ноябрь",
                },
                {
                  href: "/news/a%D2%B3olini-kredit-olishga-mazhburlayapti-mirziyeev-2-%D2%B3okimni-nega-ishdan-olganini-aytdi-video-127378",
                  img: "https://ad-admin.qalampir.uz/uploads/hI/thumb_K9FZkmqhXixhcbfeiCsGRrOMnp7uIf.jpg",
                  title:
                    "“Аҳолини кредит олишга мажбурлаяпти”. Мирзиёев 2 ҳокимни нега ишдан олганини айтди (видео)",
                  tag: "Жамият",
                  date: "19 Ноябрь",
                },
                {
                  href: "/news/narkotik-sotayetgan-ona-va-uning-ikki-ugli-k-ulga-olindi-video-127377",
                  img: "https://ad-admin.qalampir.uz/uploads/Df/thumb_J4XExr6bJ395zJZZDcIIk68TrR6pcA.jpg",
                  title:
                    "Наркотик сотаётган она ва унинг икки ўғли қўлга олинди (видео)",
                  tag: "3-саҳифа",
                  date: "19 Ноябрь",
                },
                {
                  href: "/news/termizda-18-yeshli-talaba-uzini-14-k-avatdan-tashlab-yubordi-video-127376",
                  img: "https://ad-admin.qalampir.uz/uploads/zQ/thumb_ABSZJCQn1VVunmJKxN2H8FGygGLTNA.jpg",
                  title:
                    "Термизда 18 ёшли талаба ўзини 14-қаватдан ташлаб юборди (видео)",
                  tag: "3-саҳифа",
                  date: "19 Ноябрь",
                },
              ].map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  className="news-card block rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="news-card-video relative">
                    <div className="image w-full h-48 overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="video-fade absolute inset-0 flex items-center justify-center">
                      <svg
                        width="53"
                        height="53"
                        viewBox="0 0 53 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.0268555"
                          y="0.401367"
                          width="52"
                          height="52"
                          rx="26"
                          fill="black"
                          fillOpacity="0.2"
                        ></rect>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.0269 21.2211V31.5811C22.0269 32.3711 22.8969 32.8511 23.5669 32.4211L31.7069 27.2411C32.3269 26.8511 32.3269 25.9511 31.7069 25.5511L23.5669 20.3811C22.8969 19.9511 22.0269 20.4311 22.0269 21.2211Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="news-card-content p-3">
                    <p className="news-card-content-text text-sm line-clamp-2">
                      {card.title}
                    </p>
                    <div className="news-card-content-type mt-3 flex items-center justify-between">
                      <div className="type flex items-center gap-2">
                        <span className="type-circle w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                        <span className="type-text text-xs text-gray-600">
                          {card.tag}
                        </span>
                      </div>
                      <span className="date text-xs text-gray-500">
                        {card.date}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
