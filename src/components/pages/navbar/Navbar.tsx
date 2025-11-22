"use client";

import { useState, useEffect } from "react";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { categories } from "@/constants";
import { Button } from "@/components/ui/button";

interface CurrencyItem {
  Ccy: string;
  Rate: string;
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [rates, setRates] = useState<Record<string, string>>({});
  const [showAlt, setShowAlt] = useState(false);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const fetchRates = async (): Promise<void> => {
    try {
      const res = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/");
      const data: CurrencyItem[] = await res.json();
      const currencies = ["USD", "EUR", "RUB"];
      const filtered: Record<string, string> = {};
      data.forEach((item) => {
        if (currencies.includes(item.Ccy)) {
          filtered[item.Ccy] = parseFloat(item.Rate).toFixed(2);
        }
      });
      setRates(filtered);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(() => {
      fetchRates();
      setShowAlt((prev) => !prev);
      setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="flex flex-wrap max-w-6xl mx-auto justify-between items-center px-4 py-2 text-sm sm:text-base border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <img
            src="https://png.pngtree.com/png-vector/20230209/ourmid/pngtree-letter-z-logo-png-image_6590691.png"
            alt="Zarbdor.uz"
            className="h-7 w-auto"
          />
          <span className="font-semibold text-base sm:text-lg">ARBDOR.UZ</span>
        </div>

        <div className="hidden lg:flex flex-1 justify-center items-center gap-6">
          {!searchActive ? (
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <span className="font-semibold text-base sm:text-lg dark:text-white">
                Kurs UZS
              </span>
              {["USD", "EUR", "RUB"].map((ccy) => (
                <span
                  key={ccy}
                  className="transition-all duration-500 text-sm sm:text-base"
                >
                  {ccy}{" "}
                  <b className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    {rates[ccy] ||
                      (ccy === "USD"
                        ? "11 972.35"
                        : ccy === "EUR"
                        ? "13 852.01"
                        : "147.52")}
                  </b>{" "}
                  <span
                    className={`${
                      showAlt ? "text-red-500" : "text-green-500"
                    } font-semibold`}
                  >
                    {showAlt ? "-17.65" : "+12.44"}
                  </span>
                </span>
              ))}
            </div>
          ) : (
            <div className="relative flex items-center">
              <div className="absolute left-3 text-gray-500 dark:text-gray-300">
                <Search size={16} />
              </div>

              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Qidirish..."
                className="w-64 px-10 py-2 rounded-xl backdrop-blur-md bg-white/60 dark:bg-gray-800/40 border border-gray-300 dark:border-gray-700 
                shadow-[0_4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)]
                text-gray-900 dark:text-gray-100 outline-none transition-all duration-300"
              />

              <Button 
                size="icon"
                variant="ghost"
                className="ml-1"
                onClick={() => setSearchActive(false)}
              >
                <X size={20} />
              </Button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          {!searchActive && (
            <Button
              size="icon"
              className="duration-200 hidden lg:inline-flex"
              variant="ghost"
              onClick={() => setSearchActive(true)}
            >
              <Search size={18} />
            </Button>
          )}

          <div className="ml-1">
            <div
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                darkMode
                  ? "bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-[0_0_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out flex items-center justify-center ${
                  darkMode ? "translate-x-6 rotate-180" : "translate-x-1"
                }`}
              >
                {darkMode ? (
                  <Sun size={14} className="text-yellow-300" />
                ) : (
                  <Moon size={14} className="text-gray-700" />
                )}
              </div>
            </div>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      <div className="hidden lg:block border-b border-gray-200 dark:border-gray-700">
        <nav className="flex justify-center gap-6 py-2 font-bold text-lg sm:text-2xl overflow-x-auto whitespace-nowrap px-4">
          {categories.map((category, index) => (
            <a
              href="#"
              key={category}
              className={`transition-colors duration-500 cursor-pointer ${
                index === currentCategoryIndex
                  ? "text-red-500"
                  : "text-gray-800 dark:text-gray-100"
              }`}
              onClick={() => setCurrentCategoryIndex(index)}
            >
              {category}
            </a>
          ))}
        </nav>
      </div>

      {mobileMenu && (
        <div className="lg:hidden px-4 py-3 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <div className="relative flex items-center">
            <div className="absolute left-3 text-gray-500 dark:text-gray-300">
              <Search size={16} />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Qidirish..."
              className="w-full px-10 py-2 rounded-xl backdrop-blur-md bg-white/60 dark:bg-gray-800/40 border border-gray-300 dark:border-gray-700 
              shadow-[0_4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] 
              text-gray-900 dark:text-gray-100 outline-none transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {["USD", "EUR", "RUB"].map((ccy) => (
              <div key={ccy} className="flex gap-1 items-center text-sm">
                <span className="font-semibold">{ccy}:</span>
                <b className="text-gray-900 dark:text-gray-100">
                  {rates[ccy] ||
                    (ccy === "USD"
                      ? "11 972.35"
                      : ccy === "EUR"
                      ? "13 852.01"
                      : "147.52")}
                </b>
                <span
                  className={`${
                    showAlt ? "text-red-500" : "text-green-500"
                  } font-semibold`}
                >
                  {showAlt ? "-17.65" : "+12.44"}
                </span>
              </div>
            ))}
          </div>

          <nav className="flex flex-col gap-3 font-bold text-lg">
            {categories.map((category, index) => (
              <a
                href="#"
                key={category}
                className={`transition-colors duration-500 cursor-pointer ${
                  index === currentCategoryIndex
                    ? "text-red-500"
                    : "text-gray-800 dark:text-gray-100"
                }`}
                onClick={() => setCurrentCategoryIndex(index)}
              >
                {category}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
