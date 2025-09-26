"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Theme } from "../../types/enums";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
    } else {
      document.documentElement.dataset.theme = Theme.DARK;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-paleta-darkGray hover:bg-paleta-accentGreen text-paleta-white shadow-lg transition-colors"
    >
      {theme === Theme.DARK ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </button>
  );
}; 