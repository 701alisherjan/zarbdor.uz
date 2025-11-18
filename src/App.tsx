import { Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/navbar/Navbar";
import Footer from "./components/pages/footer/Footer";
import Hero from "./components/pages/Home/Home";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
