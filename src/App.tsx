import Todos from "./components/Todos";
import { useTheme } from "./contexts/ThemeContext";

const App = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`h-screen bg-no-repeat bg-contain bg-base-100 ${
        theme === "light"
          ? "bg-banner-mobile-light tablet:bg-banner-desktop-light"
          : "bg-banner-mobile-dark tablet:bg-banner-desktop-dark"
      }`}
      data-theme={theme}
    >
      <Todos />
    </div>
  );
};

export default App;
