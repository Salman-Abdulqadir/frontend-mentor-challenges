import React from "react";
import styled from "styled-components";
import rules from "../assets/image-rules.svg";
import { useNavigate } from "react-router-dom";
import {BsX} from 'react-icons/bs'
import {motion} from "framer-motion"
import { fadeIn } from "../../animations";

const Rules = () => {
    const navigate = useNavigate();
  return (
    <StyledRules className="flex-col">
      <motion.div variants={fadeIn} initial="initial" animate="animate" className="image-wrapper">
        <div className="flex">
          <h2>Rules</h2>
          <h2 onClick={()=>{navigate('/')}}><BsX/></h2>
        </div>
        <img src={rules} alt="" />
      </motion.div>
    </StyledRules>
  );
};

const StyledRules = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  justify-content: center !important;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  .image-wrapper {
    background-color: whitesmoke;
    padding: 2rem 3rem;
    border-radius: 10px;
    .flex {
      margin-bottom: 2rem;
      align-items: center;
      h2 {
        font-size: 2.5rem;
        &:nth-child(2){
            cursor: pointer;
            color: grey;
        }
      }
    }
  }
`;
export default Rules;
