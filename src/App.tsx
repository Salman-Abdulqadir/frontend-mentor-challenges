import ThemeChanger from "./components/ThemeChanger";
import { useTheme } from "./contexts/ThemeContext";

const App = () => {
  const { theme } = useTheme();
  return <div className="min-h-screen" data-theme={theme}>
    <h1>Todo App</h1>
  </div>;
};

export default App;
