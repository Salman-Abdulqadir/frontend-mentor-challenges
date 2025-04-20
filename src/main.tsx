import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes";
import { Toaster } from "react-hot-toast";
import AppContextProvider from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={appRoutes} />
    </AppContextProvider>
  </StrictMode>
);
