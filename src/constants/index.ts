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
