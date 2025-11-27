"use client";

import { type ReactNode, useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface AdminLayoutProps {
  children?: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // sidebar ochiq/yorilgani

  useEffect(() => {
    const savedTheme = localStorage.getItem("admin-theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("admin-theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // sidebar toggle
  };

  return (
    <div className="w-full h-screen flex bg-gray-100 dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100">
      {sidebarOpen && (
        <aside className="w-64 h-full border-r border-gray-700 p-4 space-y-3 text-sm dark:bg-[#101010] bg-gray-200">
          <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
          <div className="flex flex-col gap-2">
            <button className="sidebar-btn">
              Bosh sahifa videolarini qo'shish
            </button>
            <button className="sidebar-btn">
              Jonli efir maqolalarini qo'shish
            </button>
            <button className="sidebar-btn">
              So'nggi yangiliklarni qo'shish
            </button>
            <button className="sidebar-btn">Trenddagilarni qo'shish</button>
            <button
              onClick={handleLogout}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        </aside>
      )}

      <div className="flex-1 flex flex-col">
        <header className="w-full h-14 border-b border-gray-700 flex items-center justify-between px-6 bg-white dark:bg-[#101010]">
          <Button variant="outline" size="icon" onClick={toggleSidebar}>
            <Menu size={18} />
          </Button>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {darkMode ? (
              <Sun size={18} className="text-yellow-300" />
            ) : (
              <Moon size={18} className="text-gray-700" />
            )}
          </Button>
        </header>

        <main className="flex-1 p-6 bg-gray-50 dark:bg-[#0f0f0f]">
          {children || (
            <p className="text-gray-900 dark:text-gray-100">
              Admin Content Here
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
