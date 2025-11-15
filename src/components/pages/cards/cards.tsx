const NewsPage = () => {
  const latestNews = [
    {
      title: "Чироқчида фуқаронинг уйидан 20 кг қорадон чиқди",
      time: "17:04",
      category: "ЖАМИЯТ",
    },
    {
      title: "19 ёшли қиз севгилисининг тилини тишлади, уёлди",
      time: "16:59",
      category: "ОҚЛАМ",
    },
    {
      title: "Долларнинг расмий курси ўзгарди",
      time: "16:33",
      category: "ИҚТИСОД",
    },
    {
      title: "Украина Россия билан музокараларни тўхтатди",
      time: "16:18",
      category: "ЖАМИЯТ",
    },
  ];

  const trending = [
    "Рамазон ойи қачондан бошланиши айтилди",
    "Фарғонада нойоб асар ҳужжатон кўргазмаси очилди",
    "Дунёда энг катта оғил хона интернетга 'портлади'",
    "Долларнинг расмий курси ўзгарди",
  ];

  const qalampirFM = [
    "Тадбиркорларнинг 38 фоизи ислам молияси ресурсларидан фойдаланишни истаган",
    "1 сентябрдан маошлар оширилади. Мактабда ишловчи ходимлар қанча олади?",
    "Эртга қандай об-ҳаво кутилаётгани айтилди",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-red-600">Сўнгги янгиликлар</h2>
          <a href="#" className="text-sm text-red-500 hover:underline">
            Барчаси →
          </a>
        </div>

        <div className="space-y-4">
          {latestNews.map((news, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 border-b pb-3 hover:bg-gray-50 rounded-md transition"
            >
              <div className="w-24 h-16 bg-gray-200 rounded-md"></div>
              <div>
                <h3 className="font-medium text-gray-800 hover:text-red-600 cursor-pointer">
                  {news.title}
                </h3>
                <div className="text-xs text-gray-500 mt-1 flex space-x-2">
                  <span>{news.category}</span>
                  <span>{news.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-bold text-red-600 mb-3">Тренддагилар</h2>
          <ul className="space-y-2">
            {trending.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-700 hover:text-red-500 border-b pb-2 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-bold text-red-600 mb-3">ZARBDOR.UZ</h2>
          <div className="flex items-center justify-center space-x-3 mb-3">
            <button className="p-2  rounded-full hover:bg-gray-100">⏮</button>
            <button className="p-2  rounded-full hover:bg-gray-100">▶</button>
            <button className="p-2  rounded-full hover:bg-gray-100">⏭</button>
          </div>
          <ul className="space-y-2">
            {qalampirFM.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-700 hover:text-red-500 border-b pb-2 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="text-sm text-red-500 hover:underline block mt-2 text-right"
          >
            Барчаси →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
