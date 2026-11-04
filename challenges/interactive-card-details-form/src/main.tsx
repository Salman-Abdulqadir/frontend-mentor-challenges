import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { CardDetailsContextProvider } from "./contexts/CardDetailsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardDetailsContextProvider>
      <App />
    </CardDetailsContextProvider>
  </StrictMode>
);
