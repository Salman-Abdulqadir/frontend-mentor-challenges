import React from "react";

import styled from "styled-components";

import Selection from "./Selection";

import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissor from "../assets/icon-scissors.svg";
import triangle from "../assets/bg-triangle.svg";

import { motion } from "framer-motion";
import { selectionAnimation } from "../../animations";

const Selections = () => {
  return (
    <StyledSelections
      variants={selectionAnimation}
      initial="initial"
      animate="animate"
      className="flex-col"
    >
      <img src={triangle} alt="triangle" className="triangle" />
      <div className="flex">
        <Selection className="selection" key={0} logo={paper} bg={"paper"} />
        <Selection className="selection" key={1} logo={rock} bg={"rock"} />
      </div>
      <Selection className="selection" key={2} logo={scissor} bg={"scissor"} />
    </StyledSelections>
  );
};

const StyledSelections = styled(motion.section)`
  position: relative;
  align-items: center;
  gap: 3rem;
  .flex {
    gap: 5rem;
    align-items: center;
  }
  .triangle{
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    z-index: -2;
  }
 
`;
export default Selections;
