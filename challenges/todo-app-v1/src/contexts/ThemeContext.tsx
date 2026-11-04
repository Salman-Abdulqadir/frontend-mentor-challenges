import { createContext, useContext, useState } from "react";

type Theme = 'light' | 'dark';

export const ThemeContext = createContext<{ theme: Theme, setTheme: (theme: Theme) => void }>({ theme: 'light', setTheme: () => {} });

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme || 'light');
  const saveTheme = (theme: Theme) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
  }
  return <ThemeContext.Provider value={{ theme, setTheme: saveTheme }}>{children}</ThemeContext.Provider>;
};
