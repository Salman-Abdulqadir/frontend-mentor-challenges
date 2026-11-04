import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageAnimation } from "../animations";

const Card = ({ title, description, rate }) => {
  const [isChecked, setIsChecked] = useState(false)
  const changeHandler = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className={`${isChecked? "active-card":""} addon-card flex`}>
      <div className="flex">
        <input onChange={changeHandler} type="checkbox" />
        <div className="addon-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <h5>{rate}</h5>
    </div>
  );
};

const addon_data = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    rate: "+$2/month",
  },
  {
    title: "Large storage",
    description: "Extra 1TB of storage",
    rate: "+$1/month",
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    rate: "+$2/month",
  },
];

const Addon = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      variants={PageAnimation}
      animate="animate"
      initial="initial"
      exit={"exit"}
      className="addons flex-col"
    >
      <div className="content flex-col">
        <div>
          <h1>Pick Addons</h1>
          <p>you can choose monthly or yearly plan</p>
        </div>
        <div className="flex-col">
          {addon_data.map((addon, index)=>(<Card key={index} title={addon.title} description={addon.description} rate={addon.rate}/>))}
        </div>
      </div>
      <div className="flex">
        <button onClick={() => navigate("/plan")} className="btn-goback">
          Go Back
        </button>
        <button onClick={() => navigate("/summary")} className="next-btn">
          Next Step
        </button>
      </div>
    </motion.section>
  );
};

export default Addon;
