import React, { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";
import { TodosProvider } from "./TodosContext";

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <TodosProvider>{children}</TodosProvider>
    </ThemeProvider>
  );
};
