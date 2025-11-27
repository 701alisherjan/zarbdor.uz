import NewsPage from "../pages/cards/cards";
import Carusel from "../pages/carusel/carusel";
import Layout from "../pages/HeroItems/Layout";
import NewsSection from "../pages/NewItem/newItem";
import VideoDetails from "../pages/VideoDetails/VideoDetails";

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Layout />
      <NewsPage />
      <Carusel />
      <VideoDetails />
      <NewsSection />
    </div>
  );
}

export default Home;
