import { useTheme } from "../../contexts/ThemeContext";
import sunIcon from "../../assets/images/icon-sun.svg";
import moonIcon from "../../assets/images/icon-moon.svg";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";
  return (
    <header className="flex items-center justify-between mb-[10px]">
      <h1 className="text-5xl tracking-[1rem] font-bold text-light-very-light-gray">
        TODO
      </h1>
      <button onClick={() => setTheme(isLight ? "dark" : "light")}>
        <img
          src={isLight ? moonIcon : sunIcon}
          alt={isLight ? "sun" : "moon"}
        />
      </button>
    </header>
  );
};

export default Header;
