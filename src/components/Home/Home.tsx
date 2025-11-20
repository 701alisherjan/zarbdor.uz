import NewsPage from "../pages/cards/cards";
import Carusel from "../pages/carusel/carusel";
import Layout from "../pages/HeroItems/Layout";
import NewsSection from "../pages/NewItem/newItem";

function Home() {
  return (
    <div className="">
      <Layout />
      <NewsPage />
      <Carusel />
      <NewsSection />
    </div>
  );
}

export default Home;
