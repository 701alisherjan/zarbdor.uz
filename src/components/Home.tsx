import NewsSection from "./card/card";
import MainCarousel from "./Carousel/Carousel";
import LiveCarousel from "./Live/Live";

export default function Home() {
  return (
    <div className="px-4 md:px-20 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <MainCarousel />
          <NewsSection />
        </div>

        <LiveCarousel />
      </div>
    </div>
  );
}
