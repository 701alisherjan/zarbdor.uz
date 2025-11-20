import { useState, useEffect } from "react";

const slides = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaaNJ_HBugn86dadxBsjoSWGtAQ2h9Tb1Xw&s",
    title: "Toshkentda yangi metro liniyasi ochildi",
    date: "14 ноябрь",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREXILMUwsf3FEyP9c5b6TD0T3tb4VR8_7sQ&s",
    title: "Samarqand shahrida yangi xalqaro forum boshlandi",
    date: "13 ноябрь",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERgaNhKM_aiOFBVXxzFCYj_B9ZXY4Sgxoow&s",
    title: "Buxoro viloyatida qishki bog‘lar faoliyati kengaytirilmoqda",
    date: "12 ноябрь",
  },
];

export default function MainCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[800px] h-[300px] rounded-xl overflow-hidden shadow-md select-none mx-auto">
      <img
        src={slides[index].img}
        alt={slides[index].title}
        className="w-full h-full object-cover transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute bottom-4 left-4 text-white max-w-lg">
        <h2 className="text-2xl font-semibold drop-shadow">
          {slides[index].title}
        </h2>
        <p className="text-sm opacity-80">{slides[index].date}</p>
      </div>

      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white text-2xl px-3 py-1 rounded-full hover:bg-black/50 transition"
      >
        ‹
      </button>

      <button
        onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white text-2xl px-3 py-1 rounded-full hover:bg-black/50 transition"
      >
        ›
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-white scale-125" : "bg-gray-300 opacity-60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

