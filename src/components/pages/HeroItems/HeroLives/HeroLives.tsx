import { useEffect, useState } from "react";

export default function HeroLives() {
  const items = [
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

  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="bg-red-600 text-white rounded-xl p-4 h-[520px] overflow-hidden shadow-xl">
      <h2 className="text-xl font-bold mb-4">Live</h2>

      <div className="relative h-full">
        <div
          className="absolute left-0 top-0 transition-all duration-700"
          style={{
            transform: `translateY(-${i * 170}px)`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-3 w-full h-[170px] border-b border-red-400 pb-4"
            >
              <div className="flex flex-col pr-2">
                <p className="text-[15px] font-semibold leading-tight">
                  {item.title}
                </p>

                <p className="text-xs opacity-70 mt-1 line-clamp-2">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="bg-white/20 text-xs px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs opacity-70">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
