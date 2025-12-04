import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

export const categories = [
  "Jamiyat",
  "Olam",
  "Madaniyat-sa'nat",
  "Qiziqarli",
  "Foydali",
  "Sport",
  "Taxlil",
];

export const SOCIAL_ICONS = [
  {
    id: "facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
    color: "hover:text-blue-600",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    link: "https://instagram.com/0_absamatov_0",
    color: "hover:text-pink-600",
  },
  {
    id: "youtube",
    icon: FaYoutube,
    link: "https://youtube.com",
    color: "hover:text-red-600",
  },
  {
    id: "telegram",
    icon: FaTelegram,
    link: "https://t.me",
    color: "hover:text-sky-600",
  },
  {
    id: "twitter",
    icon: FaTwitter,
    link: "https://twitter.com",
    color: "hover:text-black",
  },
];

export const liveItems = [
  {
    title: "O‘zbekistonda yangi aeroport qurilishi boshlandi",
    desc: "Loyiha 2026 yilgacha bosqichma-bosqich amalga oshirilishi rejalashtirilgan.",
    time: "15:48",
    category: "Iqtisod",
  },
  {
    title: "Toshkentda kuchli shamol daraxtlarni qulatdi",
    desc: "Hozircha jabrlanganlar haqida rasmiy ma’lumot berilmadi.",
    time: "15:42",
    category: "Ob-havo",
  },
  {
    title: "FIFA 2026 yil uchun yangi qoidalarni e’lon qildi",
    desc: "Yangi format futbol muxlislari va ekspertlar orasida keng muhokama qilinmoqda.",
    time: "15:36",
    category: "Sport",
  },
  {
    title: "Rossiya–Ukraina chegarasida vaziyat keskinlashdi",
    desc: "Tomonlar o‘zaro ayblovlar bilan chiqishda davom etmoqda.",
    time: "15:31",
    category: "Dunyo",
  },
  {
    title: "iPhone 17 Ultra haqida dastlabki ma’lumotlar paydo bo‘ldi",
    desc: "Model kamerasi va batareyasi sezilarli darajada yaxshilanishi kutilmoqda.",
    time: "15:24",
    category: "Texnologiya",
  },
  {
    title: "Samarqandda yangi turizm markazi ochildi",
    desc: "Markaz bir vaqtning o‘zida 10 ming turistni qabul qila oladi.",
    time: "15:18",
    category: "Turizm",
  },
  {
    title: "Oziq-ovqat narxlari yana ko‘tarila boshladi",
    desc: "Mutaxassislar bu holatni inflyatsiya bosimining ortishi bilan bog‘lashmoqda.",
    time: "15:10",
    category: "Iqtisod",
  },
  {
    title: "Maktablarda yangi ta’lim standarti joriy qilinishi mumkin",
    desc: "Hujjat jamoatchilik muhokamasiga qo‘yildi.",
    time: "15:03",
    category: "Jamiyat",
  },
  {
    title: "Marsga parvoz 2030 yilda amalga oshirilishi mumkin",
    desc: "NASA yangi missiya dasturini taqdim etdi.",
    time: "14:58",
    category: "Fan",
  },
  {
    title: "Yangi serial Netflix TOP-10 ro‘yxatiga kirdi",
    desc: "Serial qisqa fursatda tomoshabinlar orasida mashhurlashdi.",
    time: "14:41",
    category: "Madaniyat",
  },
  {
    title: "YPX xodimi jasorati uchun mukofotlandi",
    desc: "U bugun besh yo‘lovchining hayotini saqlab qoldi.",
    time: "14:28",
    category: "Hodisa",
  },
  {
    title: "Toshkentda yangi metro yo‘nalishi ochilishi kutilmoqda",
    desc: "Yangi yo‘nalish poytaxtdagi tirbandliklarni kamaytirishga yordam beradi.",
    time: "14:10",
    category: "Shahar",
  },
];

export interface NewsItem {
  title: string;
  image: string;
  views: number;
  time: string;
}

export interface NewsCategory {
  name: string;
  items: NewsItem[];
}

export interface NewsItem {
  title: string;
  image: string;
  views: number;
  time: string;
}

export interface NewsCategory {
  name: string;
  items: NewsItem[];
}

export const newsData: NewsCategory[] = [
  {
    name: "Jamiyat",
    items: [
      {
        title:
          "Fojiya. Turkiyaga sayohat qilgan oilaning uch a’zosi zaharlanish natijasida vafot etdi",
        image:
          "https://static.zarnews.uz/crop/c/1/720__80_c139f6acf6fb60d08b62a33d532cc8fc.jpg?img=self&v=1699351551",
        views: 223,
        time: "17:12",
      },
      {
        title:
          "Angrenda zo'rlangan 15 yoshli qizning holati qanday ekanligi aytildi",
        image:
          "https://www.gazeta.uz/media/img/2025/07/x5K8gu17532617749830_l.webp",
        views: 2138,
        time: "16:28",
      },
      {
        title: "O'zbekiston dollar kursi keskin tushdi",
        image: "https://xabar.uz/static/crop/3/4/920__95_3466949724.jpg",
        views: 2003,
        time: "16:22",
      },
      {
        title:
          "O'zbekistondagi ayrim suv havzalarining nomi o'zbekchalashtirildi",
        image:
          "https://ad-admin.qalampir.uz/uploads/6m/s_gCvAknxldnYXUQFrgLiqqlbTLFxmvu.jpg",
        views: 847,
        time: "15:58",
      },
      {
        title: "Samarqandda OTB yig'ilishi bo'lib o'tdi",
        image:
          "https://cdn.beta.qalampir.uz/uploads/WH/m_GCKuzMa1GRGZ1vwY1ayVjHzKpY5ONS.jpg",
        views: 1636,
        time: "14:48",
      },
    ],
  },
  {
    name: "Olam",
    items: [
      {
        title: "Tramp Meksika hududiga zarba berish ehtimolini inkor etmadi",
        image:
          "https://cdn.beta.qalampir.uz/uploads/gb/f_iMzd4Ml4Og5VnzXFTM5WAuDK51oaVK.jpg",
        views: 200,
        time: "16:53",
      },
      {
        title: "O'qituvchi o'ldirildi, 25 qiz o'g'irlanib ketildi...",
        image:
          "https://cdn.beta.qalampir.uz/uploads/CW/s_btxbX8avHeBpSGRmCADKlgipvPp6Jr.jpg",
        views: 643,
        time: "15:47",
      },
      {
        title:
          "Hindistonda 12 yoshli o'quvchi o'qituvchi bergan jazoni bajarib vafot etdi",
        image:
          "https://cdn.beta.qalampir.uz/uploads/5t/f_BhQGCNvwcSrVmAQtaQwTSxdJRKjYDe.jpg",
        views: 776,
        time: "15:43",
      },
      {
        title: "Rossiyaga kirgan muhojirlar soni 1 millionga kamayadi",
        image:
          "https://cdn.beta.qalampir.uz/uploads/se/f_w2SUd20LJHpeRcFT7Sn3AeIoxwHvM0.jpg",
        views: 1452,
        time: "15:18",
      },
      {
        title: "Sergey Shoyguga qabristondagi suiqaaddan oldi olindi",
        image:
          "https://cdn.beta.qalampir.uz/uploads/1Q/f_8ZjswAHYfJxxqPWJjGQuQPwly2TNSK.jpg",
        views: 3618,
        time: "15:15",
      },
    ],
  },
];

// src/constants/videos.ts
export interface VideoItem {
  id: string;
  href?: string;
  img: string;
  videoUrl: string;
  alt?: string;
  title: string;
  date: string;
  tag: string;
}

export const topCards: VideoItem[] = [
  {
    id: "101",
    href: "/video/101",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0k4-ejPhzcTnAHdZsxHPMFvYyAB8NCysAg&s",
    videoUrl: "https://www.youtube.com/embed/v-9LW78-JPs",
    title: "🇺🇿 Toshkentda IT-Parkda yirik konferensiya bo‘lib o‘tdi",
    tag: "Texnologiya",
    date: "Bugun",
  },
  {
    id: "102",
    href: "/video/102",
    img: "https://president.uz/uploads/27476c68-63f8-a553-6838-ba3f71e99a25.jpg",
    videoUrl: "https://www.youtube.com/embed/JiTHfE-qYGw",
    title: "🤝 Prezidentimiz Turkiyaga rasmiy tashrif buyurdi",
    tag: "Siyosat",
    date: "Kecha",
  },
  {
    id: "103",
    href: "/video/103",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNLJ5i_GvsowG7QP5vcRjlTWuPojyLvC8cQ&ss",
    videoUrl: "https://www.youtube.com/embed/FYaVqZa2uOw",
    title: "⚽️ O‘zbekiston terma jamoasi Osiyo Kubogiga tayyorlanmoqda",
    tag: "Sport",
    date: "12:30",
  },
];

export const videoCards: VideoItem[] = [
  {
    id: "1",
    href: "/video/1",
    img: "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    title: "📈 2025 yilda O‘zbekistonda IT eksporti 1 mlrd $ ga yetishi mumkin",
    tag: "Iqtisod",
    date: "10:05",
  },
  {
    id: "2",
    href: "/video/2",
    img: "https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    title: "📚 Yangi maktablar qurilishi boshlangan — Sirdaryo viloyatida",
    tag: "Jamiyat",
    date: "Bugun",
  },
  {
    id: "2",
    href: "/video/2",
    img: "https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    title: "📚 Yangi maktablar qurilishi boshlangan — Sirdaryo viloyatida",
    tag: "Jamiyat",
    date: "Bugun",
  },
  {
    id: "2",
    href: "/video/2",
    img: "https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    title: "📚 Yangi maktablar qurilishi boshlangan — Sirdaryo viloyatida",
    tag: "Jamiyat",
    date: "Bugun",
  },
  {
    id: "2",
    href: "/video/2",
    img: "https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    title: "📚 Yangi maktablar qurilishi boshlangan — Sirdaryo viloyatida",
    tag: "Jamiyat",
    date: "Bugun",
  },
  {
    id: "2",
    href: "/video/2",
    img: "https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    title: "📚 Yangi maktablar qurilishi boshlangan — Sirdaryo viloyatida",
    tag: "Jamiyat",
    date: "Bugun",
  },
];
export interface SidebarButton {
  label: string;
  route: string;
}

export const sidebarButtons: SidebarButton[] = [
  {
    label: "Bosh sahifa videolarini qo'shish",
    route: "/admin/dashboard/home-videos",
  },
  {
    label: "Jonli efir maqolalarini qo'shish",
    route: "/admin/dashboard/live-news",
  },
  {
    label: "So'nggi yangiliklarni qo'shish",
    route: "/admin/dashboard/latest-news",
  },
  { label: "Trenddagilarni qo'shish", route: "/admin/dashboard/trending" },
];
