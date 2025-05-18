import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App targetDate={new Date("2025-05-28")} />
  </StrictMode>
);
