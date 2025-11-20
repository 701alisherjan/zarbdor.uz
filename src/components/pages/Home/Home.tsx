import NewsSection from "@/components/newitem/newitem";
import NewsPage from "../cards/cards";
import Carusel from "../carusel/carusel";

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <NewsPage />
      <Carusel />
      <NewsSection />
    </div>
  );
}

export default Home;
