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
        image: "/images/jamiyat1.jpg",
        views: 223,
        time: "17:12",
      },
      {
        title:
          "Angrenda o‘zrlangan 15 yoshli qizning holati qanday ekanligi aytildi",
        image: "/images/jamiyat2.jpg",
        views: 2138,
        time: "16:28",
      },
      {
        title: "O‘zbekiston dollar kursi keskin tushdi",
        image: "/images/jamiyat3.jpg",
        views: 2003,
        time: "16:22",
      },
      {
        title:
          "O‘zbekistondagi ayrim suv havzalarining nomi o‘zbekchalashtirildi",
        image: "/images/jamiyat4.jpg",
        views: 847,
        time: "15:58",
      },
      {
        title: "Samarqandda OTB yig‘ilishi bo‘lib o‘tdi",
        image: "/images/jamiyat5.jpg",
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
        image: "/images/olam1.jpg",
        views: 200,
        time: "16:53",
      },
      {
        title: "O‘qituvchi o‘ldirildi, 25 qiz o‘g‘irlanib ketildi...",
        image: "/images/olam2.jpg",
        views: 643,
        time: "15:47",
      },
      {
        title:
          "Hindistonda 12 yoshli o‘quvchi o‘qituvchi bergan jazoni bajarib vafot etdi",
        image: "/images/olam3.jpg",
        views: 776,
        time: "15:43",
      },
      {
        title: "Rossiyaga kirgan muhojirlar soni 1 millionga kamayadi",
        image: "/images/olam4.jpg",
        views: 1452,
        time: "15:18",
      },
      {
        title: "Sergey Shoyguga qabristondagi suiqaaddan oldi olindi",
        image: "/images/olam5.jpg",
        views: 3618,
        time: "15:15",
      },
    ],
  },
];
