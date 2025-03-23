import { Theme } from "../types";
import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-3 rounded-lg ${
        theme === "light"
          ? "bg-neutral-100 hover:bg-neutral-200"
          : "bg-neutral-700 hover:bg-neutral-600"
      } transition-colors`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <img
        src={theme === "light" ? iconMoon : iconSun}
        alt={theme === "light" ? "Dark mode" : "Light mode"}
        className="w-5 h-5"
      />
    </button>
  );
}
