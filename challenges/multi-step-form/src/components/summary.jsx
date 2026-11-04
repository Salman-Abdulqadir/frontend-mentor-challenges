import React from "react";
import { motion } from "framer-motion";
import { PageAnimation } from "../animations";
import { useNavigate } from "react-router-dom";

const Summary = () => {
    const navigate = useNavigate()
  return (
    <motion.section
      variants={PageAnimation}
      animate="animate"
      initial="initial"
      exit={"exit"}
      className="summary-page flex-col"
    >
      <div className="content flex-col">
        <div>
          <h1>Finishing up</h1>
          <p>Double check everything looks ok before confirming</p>
        </div>
        <div className="summary flex-col">
          <div className="flex">
            <div>
              <h3>Arcade (Monthly)</h3>
              <p className="change-plan">change</p>
            </div>
            <h3>$9/mo</h3>
          </div>
          <div className="flex">
            <p>Online service</p>
            <h4>+$2mo</h4>
          </div>
        </div>
        <div className="total flex">
            <p>Total (per Month)</p>
            <h2>+$12/mo</h2>
        </div>
      </div>
      <div className="flex">
        <button onClick={() => navigate("/addon")} className="btn-goback">
          Go Back
        </button>
        <button onClick={() => navigate("/confirmation")} className="confirm">
          Confirm
        </button>
      </div>
    </motion.section>
  );
};

export default Summary;
