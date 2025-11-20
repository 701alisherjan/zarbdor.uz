import { useState, useEffect } from "react";

export default function HeroVideo() {
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
    {
      img: "https://storage.kun.uz/source/1/rSWbvXFU9Hidc60PEAT_m9MS0mAucY_4.jpg",
      title: "O‘zbekiston sportchilari xalqaro turnirdan g‘olib qaytdi",
      date: "11 ноябрь",
    },
    {
      img: "https://storage.kun.uz/source/9/RkgrhxyE07tJT5UdHAtmx0Rj9KbcRwRR.jpg",
      title: "Andijonda yangi sanoat majmuasi ishga tushdi",
      date: "10 ноябрь",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-xl select-none">
      <img
        src={slides[index].img}
        alt="slide"
        className="w-full h-full object-cover transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gray-900/40"></div>

      <div className="absolute bottom-6 left-6 text-white max-w-xl">
        <h2 className="text-3xl font-semibold drop-shadow-lg">
          {slides[index].title}
        </h2>
        <p className="text-sm mt-2 opacity-80">{slides[index].date}</p>
      </div>

      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white text-3xl px-4 py-2 rounded-full hover:bg-black/60 transition"
      >
        ‹
      </button>

      <button
        onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white text-3xl px-4 py-2 rounded-full hover:bg-black/60 transition"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all 
              ${index === i ? "bg-white scale-125" : "bg-gray-300 opacity-60"}
            `}
          ></button>
        ))}
      </div>
    </div>
  );
}
