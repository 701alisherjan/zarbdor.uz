import { newsData, type NewsCategory, type NewsItem } from "@/constants";
import { Eye } from "lucide-react";

const NewsCard = ({ title, image, views, time }: NewsItem) => (
  <div className="flex gap-4 mb-4 h-24 sm:h-28">
    <img
      src={image}
      alt={title}
      className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded"
    />
    <div className="flex flex-col justify-between w-full">
      <p className="text-sm sm:text-base line-clamp-2">{title}</p>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <Eye size={14} /> {views}
        </span>
        <span>{time}</span>
      </div>
    </div>
  </div>
);

const NewsColumn = ({ name, items }: NewsCategory) => (
  <div className="flex-1 border p-4 rounded w-full">
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
  <div
    className="flex flex-col gap-6 max-w-6xl mx-auto dark:text-gray-400
                  md:flex-row md:gap-6"
  >
    {newsData.map((category, i) => (
      <NewsColumn key={i} {...category} />
    ))}
  </div>
);

export default NewsSection;
