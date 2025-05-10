import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
  if (typeof window === "undefined") return;

  const isSmallDevice = window.innerWidth <= 640;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isSmallDevice) {
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  } else {
    const storedTheme = localStorage.getItem("theme");
    const useDark = storedTheme === "dark";
    setIsDarkMode(useDark);
    document.documentElement.classList.toggle("dark", useDark);
    if (!storedTheme) localStorage.setItem("theme", "light");
  }
}, []);


  const toggleTheme = () => {
    if (window.innerWidth <= 764) return; // disable manual toggle on small devices

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden right-5 z-50 p-2 top-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-yellow-700" />
      )}
    </button>
  );
};
