import { motion } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";

//components
import ScoreBoard from "./components/ScoreBoard";
import Selections from "./components/Selections";
import Winner from "./components/Winner";
import Rules from "./components/Rules";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App flex-col">
      <ScoreBoard />
      <Routes>
        <Route path="/" element={<Selections />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/rules")}
        className="rules-btn"
      >
        Rules
      </motion.button>
    </div>
  );
}

export default App;
