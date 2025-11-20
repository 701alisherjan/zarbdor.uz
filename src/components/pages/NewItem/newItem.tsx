import { Eye } from "lucide-react";

interface NewsItem {
  title: string;
  image: string;
  views: number;
  time: string;
}

interface NewsCategory {
  name: string;
  items: NewsItem[];
}

const newsData: NewsCategory[] = [
  {
    name: "Jamiyat",
    items: [
      {
        title:
          "Фожиа. Туркияга саёхатга борган оиланинг уч аъзоси захарланиб вафот этди",
        image: "/images/jamiyat1.jpg",
        views: 223,
        time: "17:12",
      },
      {
        title: "Ангренда ўзрланган 15 ёшли қизнинг ҳолати қандай экани айтилди",
        image: "/images/jamiyat2.jpg",
        views: 2138,
        time: "16:28",
      },
      {
        title: "Ўзбекистонда доллар қиймати кескин тушди",
        image: "/images/jamiyat3.jpg",
        views: 2003,
        time: "16:22",
      },
      {
        title: "Ўзбекистондаги айрим сув ҳавзаларининг номи ўзбекчалаштирилди",
        image: "/images/jamiyat4.jpg",
        views: 847,
        time: "15:58",
      },
      {
        title: "Самарқандда ОТБ йиғилиши бўлиб ўтди",
        image: "/images/jamiyat5.jpg",
        views: 1636,
        time: "14:48",
      },
    ],
  },
  {
    name: "Олам",
    items: [
      {
        title: "Трамп Мексика ҳудудига зарба бериш эҳтимолини инкор этмади",
        image: "/images/olam1.jpg",
        views: 200,
        time: "16:53",
      },
      {
        title: "Ўқитувчи ўлдирилди, 25 қиз ўғирлаб кетилди...",
        image: "/images/olam2.jpg",
        views: 643,
        time: "15:47",
      },
      {
        title:
          "Ҳиндистонда 12 ёшли ўқувчи ўқитувчи берган жазони бажариб вафот этди",
        image: "/images/olam3.jpg",
        views: 776,
        time: "15:43",
      },
      {
        title: "Россияга кирган мигрантлар сони 1 миллионга камайди",
        image: "/images/olam4.jpg",
        views: 1452,
        time: "15:18",
      },
      {
        title: "Сергей Шойгуга қабристондаги суиқасднинг олди олинди",
        image: "/images/olam5.jpg",
        views: 3618,
        time: "15:15",
      },
    ],
  },
];

const NewsCard = ({ title, image, views, time }: NewsItem) => (
  <div className="flex h-24 gap-4 mb-4">
    <img src={image} alt={title} className="w-24 h-24 object-cover rounded" />
    <div className="flex flex-col justify-between">
      <p className="text-sm line-clamp-2">{title}</p>
      <div className="flex justify-between text-xs text-gray-500">
        <span className="flex items-center gap-1 text-black">
          <Eye size={14} /> {views}
        </span>
        <span className="text-black">{time}</span>
      </div>
    </div>
  </div>
);

const NewsColumn = ({ name, items }: NewsCategory) => (
  <div className="flex-1 border p-4 rounded">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-red-600 font-semibold">{name}</h2>
      <a href="#" className="text-sm text-red-500">
        Barchasi →
      </a>
    </div>
    {items.map((item, i) => (
      <NewsCard key={i} {...item} />
    ))}
  </div>
);

const NewsSection = () => (
  <div className="flex gap-6 max-w-6xl mx-auto">
    {newsData.map((cat, i) => (
      <NewsColumn key={i} {...cat} />
    ))}
  </div>
);

export default NewsSection;
