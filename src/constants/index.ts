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
        title: "Fojiya. Turkiyaga sayohat qilgan oilaning uch a’zosi zaharlanish natijasida vafot etdi",
        image: "/images/jamiyat1.jpg",
        views: 223,
        time: "17:12",
      },
      {
        title: "Angrenda o‘zrlangan 15 yoshli qizning holati qanday ekanligi aytildi",
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
        title: "O‘zbekistondagi ayrim suv havzalarining nomi o‘zbekchalashtirildi",
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
        title: "Hindistonda 12 yoshli o‘quvchi o‘qituvchi bergan jazoni bajarib vafot etdi",
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
