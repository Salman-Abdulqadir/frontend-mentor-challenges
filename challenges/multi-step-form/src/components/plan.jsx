import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageAnimation } from "../animations";
//importing logos
import advanced from "../assets/icon-advanced.svg";
import arcade from "../assets/icon-arcade.svg";
import pro from "../assets/icon-pro.svg";

const Card = ({ logo, title, amount }) => {
  return (
    <div className="card flex-col">
      <img src={logo} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{amount}</p>
      </div>
    </div>
  );
};

const plan_data = [
  {
    logo: arcade,
    title: "Arcade",
    amount: "$9/mo",
  },
  {
    logo: advanced,
    title: "Advanced",
    amount: "$12/mo",
  },
  {
    logo: pro,
    title: "Pro",
    amount: "$15/mo",
  },
];

const Plan = () => {
  const navigate = useNavigate();

  return (
    
    <motion.section
      variants={PageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="plan flex-col"
    >
      <div className="content flex-col">
        <div>
          <h1>Select your plan</h1>
          <p>you can choose monthly or yearly plan</p>
        </div>
        <div className="flex">
          {plan_data.map((plan, index) => (
            <Card
              key={index}
              logo={plan.log}
              title={plan.title}
              amount={plan.amount}
            />
          ))}
        </div>
        <div className="flex">
          <h3>Monthly</h3>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <h3>Yearly</h3>
        </div>
      </div>
      <div className="flex">
        <button onClick={() => navigate("/")} className="btn-goback">
          Go Back
        </button>
        <button onClick={() => navigate("/addon")} className="next-btn">
          Next Step
        </button>
      </div>
    </motion.section>
  );
};

export default Plan;
