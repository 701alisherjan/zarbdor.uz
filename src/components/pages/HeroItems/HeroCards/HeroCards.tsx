"use client";

import { useState } from "react";

const newsData = [
  {
    id: 1,
    title: "ZarbdordaIT markazi yangi texnologiyalarni joriy etmoqda",
    description:
      "IT markazi so‘nggi texnologiyalarni o‘z faoliyatiga muvaffaqiyatli integratsiya qilmoqda...",
    preview:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGX3YEwmMWZqLMZdsvhh8qpFkJzzavHNblCQ&s",
    category: "Texno",
    time: "2 soat oldin",
    video: "https://www.youtube.com/embed/v-9LW78-JPs",
  },
  {
    id: 2,
    title: "O‘zbekiston iqtisodiy rivojlanish bo‘yicha reytingda yuqoriladi",
    description:
      "So‘nggi statistikaga ko‘ra, O‘zbekiston iqtisodiy ko‘rsatkichlarda ijobiy o‘sish qayd etdi...",
    preview:
      "https://www.gazeta.uz/media/img/2025/07/OIYHdt17531015405058_b.webp",
    category: "Iqtisod",
    time: "4 soat oldin",
    video: "https://www.youtube.com/embed/JiTHfE-qYGw",
  },
  {
    id: 3,
    title: "Futbol bo‘yicha Yevropa Chempionatida kutilmagan g‘alaba",
    description:
      "O‘zbekiston terma jamoasi final bosqichida kutilmagan tarzda g‘alaba qozondi...",
    preview:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNLJ5i_GvsowG7QP5vcRjlTWuPojyLvC8cQ&s",
    category: "Sport",
    time: "6 soat oldin",
    video: "https://www.youtube.com/embed/FYaVqZa2uOw",
  },
];

export default function HeroCards() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className="w-full px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden 
            shadow hover:shadow-lg transition cursor-pointer group"
            onClick={() => setSelectedVideo(item.video)}
          >
            <div className="w-full h-48 relative">
              <img
                src={item.preview}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {item.category}
              </span>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold dark:text-white">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {item.description}
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-3">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 dark:bg-black/95 flex justify-center items-center z-50">
          <div className="relative w-full h-full flex justify-center items-center">
            <button
              className="absolute top-5 right-5 text-white text-4xl font-bold z-50"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>

            <div className="w-full h-full max-w-[95vw] max-h-[95vh] bg-white dark:bg-gray-900 rounded-lg">
              <iframe
                src={selectedVideo}
                title="Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
