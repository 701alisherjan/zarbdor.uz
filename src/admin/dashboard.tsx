"use client";

import { type ReactNode, useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { sidebarButtons } from "@/constants";

interface AdminLayoutProps {
  children?: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

  return (
    <div className="w-full h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {sidebarOpen && (
        <aside className="w-64 h-full border-r border-gray-700 p-4 space-y-3 text-sm dark:bg-gray-900 bg-gray-100">
          <h2 className="text-xl font-bold mb-4 py-3 text-center border-b border-gray-400 dark:border-gray-700">
            Dashboard
          </h2>
          <div className="flex flex-col gap-2">
            {sidebarButtons.map((btn) => {
              const isActive = location.pathname === btn.route;
              return (
                <Link
                  key={btn.route}
                  to={btn.route}
                  className={`
                    px-4 py-2 rounded-md transition-all text-left w-full
                    ${
                      isActive
                        ? "bg-blue-500 text-white font-semibold shadow-md border-l-4 border-blue-700"
                        : "hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-blue-300"
                    }
                  `}
                >
                  {btn.label}
                </Link>
              );
            })}

            <button
              onClick={handleLogout}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full transition-colors"
            >
              Logout
            </button>
          </div>
        </aside>
      )}

      <div className="flex-1 flex flex-col">
        <header className="w-full h-14 border-b border-gray-700 flex items-center justify-between px-6 bg-gray-100 dark:bg-gray-900">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
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

        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800">
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
