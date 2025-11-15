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
      console.error("Kurslarni olishda xatolik:", err);
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
      {/* Top bar: logo + currency */}
      <div className="flex flex-wrap max-w-6xl mx-auto justify-between items-center px-4 py-2 text-sm sm:text-base border-b border-gray-200 dark:border-gray-700">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://png.pngtree.com/png-vector/20230209/ourmid/pngtree-letter-z-logo-png-image_6590691.png"
            alt="Zarbdor.uz"
            className="h-7 w-auto"
          />
          <span className="font-semibold text-base sm:text-lg">ZARBDOR.UZ</span>
        </div>

        {/* Desktop: Currency / Search */}
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
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Qidirish..."
                className="w-64 px-3 py-1 rounded border duration-300 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setSearchActive(false)}
              >
                <X size={20} />
              </Button>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
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

          <Button size="icon" variant="ghost" onClick={toggleTheme}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* Mobile menu toggle */}
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

      {/* Desktop: Categories bar */}
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
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Qidirish..."
              className="w-full px-3 py-1 rounded border duration-300 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
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
