import { Routes, Route, useLocation } from "react-router-dom";

import "./styles/app.scss";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/nav";
import Info from "./components/info";
import Plan from "./components/plan";
import Addon from "./components/addon";
import Summary from "./components/summary";

function App() {
  const location = useLocation();
  return (
    <div className="App flex">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Info />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/addon" element={<Addon />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
