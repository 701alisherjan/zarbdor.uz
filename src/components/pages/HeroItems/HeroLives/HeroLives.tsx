import { useEffect, useState } from "react";
import { liveItems } from "@/constants";

export default function HeroLives() {
  const duplicated = [...liveItems, ...liveItems];
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => {
        if (prev + 1 >= liveItems.length * 2) {
          return 1;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [liveItems.length]);

  return (
    <div className="bg-red-600 text-white rounded-xl p-4 h-[520px] overflow-hidden shadow-xl ">
      <h2 className="text-xl font-bold mb-4">Live</h2>

      <div className="relative h-full overflow-hidden">
        <div
          className="absolute left-0 top-0 transition-all duration-700 over"
          style={{
            transform: `translateY(-${i * 170}px)`,
          }}
        >
          {duplicated.map((item, idx) => (
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
