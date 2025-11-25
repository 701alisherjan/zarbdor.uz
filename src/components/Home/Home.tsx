import NewsPage from "../pages/cards/cards";
import Carusel from "../pages/carusel/carusel";
import Layout from "../pages/HeroItems/Layout";
import NewsSection from "../pages/NewItem/newItem";

// VideoNewsSection Component
export function VideoNewsSection({ items }) {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 border-t border-red-600 pt-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Видео янгиликлар</h3>
        <a
          href="/video"
          className="text-sm text-red-500 hover:underline flex items-center gap-1"
        >
          Барчаси <span>↗</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group block rounded-xl overflow-hidden bg-[#111] border border-[#222] hover:border-[#333] transition duration-300"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/70 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Video time/date bottom-right */}
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {item.date}
              </span>
            </div>

            <div className="p-4 text-white">
              <h4 className="text-base font-semibold group-hover:text-red-500 transition-all mb-2 leading-tight">
                {item.title}
              </h4>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                <span>{item.category || "Видео"}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// Home Component
export default function Home() {
  const videoItems = [
    {
      title: "Toshkentda yangi metro yo‘li ochildi",
      image: "../../assets/green 71.mp4  ",
      date: "Bugun, 12:30",
      link: "/video/1",
    },
    {
      title: "Maktablarda yangi tartib joriy etildi",
      image: "/images/video2.jpg",
      date: "Kecha, 18:00",
      link: "/video/2",
    },
    {
      title: "Namanganda yirik festival bo‘lib o‘tdi",
      image: "/images/video3.jpg",
      date: "Bugun, 10:15",
      link: "/video/3",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Layout />
      <NewsPage />
      <Carusel />

      {/* Video yangiliklar */}
      <VideoNewsSection items={videoItems} />

      <NewsSection />
    </div>
  );
}
