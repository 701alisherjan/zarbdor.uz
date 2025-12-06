"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin1") {
      localStorage.setItem("adminToken", "12345");
      navigate("/admin/dashboard");
    } else {
      setError("Email yoki parol noto‘g‘ri");
    }
  };

  // ENTER BOSILGANDA LOGIN
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat dark:bg-[#0f0f0f]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border border-white/30 dark:border-gray-700 p-8 rounded-2xl shadow-2xl w-80 sm:w-96">
        <h2 className="text-3xl font-bold mb-6 text-white text-center drop-shadow-md">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-300 mb-4 text-sm text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full px-4 py-2 mb-4 rounded-md bg-white/40 dark:bg-gray-800/40 border border-white/50 dark:border-gray-600  placeholder-gray-500 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full px-4 py-2 mb-6 rounded-md bg-white/40 dark:bg-gray-800/40 border border-white/50 dark:border-gray-600 text-white placeholder-gray-500  focus:outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full py-2 bg-blue-600/80 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );
}
