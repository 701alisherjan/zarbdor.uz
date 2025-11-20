import HeroCards from "./HeroCards/HeroCards";
import HeroLives from "./HeroLives/HeroLives";
import HeroVideo from "./HeroVideo/HeroVideo";

export default function Layout() {
  return (
    <div className="w-full flex justify-center pt-6">
      <div className="w-full max-w-[1450px] px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9 space-y-6">
          <HeroVideo />

          <div className="flex sm:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-auto">
            <HeroCards />
          </div>
        </div>

        <div className="lg:col-span-3">
          <HeroLives />
        </div>
      </div>
    </div>
  );
}
