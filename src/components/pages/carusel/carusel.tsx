"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Carusel() {
  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const items = [
    {
      id: 1,
      img: "https://ad-admin.qalampir.uz/uploads/6T/s_dSFurC19mJTFvvEwEUrhWAezQk7v04.jpg",
      title: "GWM Осиё-Тинч океани саммити 2025",
      link: "#",
    },
    {
      id: 2,
      img: "https://ad-admin.qalampir.uz/uploads/ML/s_nsuEnMEmWLf2USth3RttxM9iVogLYt.jpg",
      title:
        "Ўзбекистондаги энг катта қувватли автотрансформатор Андижондаги “Лочин” подстанциясига ўрнатилди",
      link: "#",
    },
    {
      id: 3,
      img: "https://ad-admin.qalampir.uz/uploads/bK/s_G2qQyyLEBnRyLCIHk28FMD7FtwgnS7.jpg",
      title:
        "ADM Jizzakh — махсус сертификат олган биринчи автомобиль ишлаб чиқарувчиси",
      link: "#",
    },
    {
      id: 4,
      img: "https://ad-admin.qalampir.uz/uploads/1C/s_wD0Y0ZL9m6saPUuJKPvBYieQAy3cfu.jpg",
      title:
        "HONOR яна ҳайратда қолдирди: янги ультра-мустаҳкам HONOR X9d тақдим этилди",
      link: "#",
    },
  ];

  const infiniteItems = [...items, ...items];

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-10 font-['Roboto',sans-serif] transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Yuqori sarlavha qismi */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-white/20 pb-2">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            <span className="inline-block bg-red-600 text-white px-2 py-0.5 rounded-sm">
              Бизнес
            </span>
          </h3>
          <a
            href="#"
            className="flex items-center gap-1 text-sm sm:text-base font-medium text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition"
          >
            Барчаси{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: "start",
            duration: 40,
            dragFree: true,
          }}
          plugins={[plugin.current]}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {infiniteItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 transition-transform duration-700"
              >
                <a href={item.link} className="block group">
                  <Card className="relative overflow-hidden rounded-xl border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3]">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent dark:from-gray-900/80 dark:via-gray-800/30 dark:to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                          <p className="text-white text-sm sm:text-base font-medium leading-tight line-clamp-2">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-5 bg-black/40 dark:bg-gray-800/40 hover:bg-black/60 dark:hover:bg-gray-800/60 border-none text-white" />
          <CarouselNext className="hidden md:flex -right-5 bg-black/40 dark:bg-gray-800/40 hover:bg-black/60 dark:hover:bg-gray-800/60 border-none text-white" />
        </Carousel>
      </div>
    </section>
  );
}
