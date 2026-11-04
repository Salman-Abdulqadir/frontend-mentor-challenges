import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageAnimation } from "../animations";

export default function () {
  const navigate = useNavigate();

  return (
      <motion.section
        variants={PageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="info-section flex-col"
      >
        <div>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number</p>
        </div>
        <form className="flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="e.g Stephan King" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="e.g Stephan@gmail.com"
          />
          <label htmlFor="phone">Phone number</label>
          <input type="number" name="phone" placeholder="e.g 222333444" />
        </form>
        <button onClick={() => navigate("/plan")} className="next-btn">
          Next Step
        </button>
      </motion.section>
  );
}
