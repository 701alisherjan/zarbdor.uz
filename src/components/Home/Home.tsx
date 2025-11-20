import NewsPage from "../pages/cards/cards";
import Carusel from "../pages/carusel/carusel";
import Layout from "../pages/HeroItems/Layout";

function Home() {
  return (
    <div>
      <Layout />
      <NewsPage />
      <Carusel />
    </div>
  );
}

export default Home;
