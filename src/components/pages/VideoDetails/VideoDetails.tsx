import { topCards, videoCards } from "@/constants";

export default function VideoDetails() {
  return (
    <section className="py-4">
      <div className="container max-w-6xl mx-auto px-4 border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">
          Video yangiliklar — O‘zbekiston
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {topCards.map((card) => (
            <a
              key={card.id}
              href={`/video/${card.id}`}
              className="cursor-pointer rounded-lg overflow-hidden transition block"
            >
              <img
                src={card.img}
                alt={card.alt}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <p className="text-sm font-semibold line-clamp-2">
                  {card.title}
                </p>
                <div className="flex items-center gap-1 text-xs mt-1 text-gray-500">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>{card.tag}</span>
                </div>
                <span className="text-gray-400 text-xs">{card.date}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videoCards.map((card) => (
            <a
              key={card.id}
              href={`/video/${card.id}`}
              className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-50 transition"
            >
              <img
                src={card.img}
                alt={card.alt}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex flex-col text-xs flex-1">
                <p className="font-medium line-clamp-2">{card.title}</p>
                <div className="mt-1 flex items-center gap-1 text-gray-500">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  <span>{card.tag}</span>
                </div>
                <span className="text-gray-400">{card.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
