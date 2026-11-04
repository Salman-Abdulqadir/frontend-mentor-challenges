import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { StyledSelection } from "./Selection";

import { Navigate, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn, winnerAnimation } from "../../animations";

import { MdOutlineCelebration, MdOutlineThumbsUpDown } from "react-icons/md";
import { FaRegSadCry } from "react-icons/fa";

import winnerGif from "../assets/winner.gif";
import loserGif from "../assets/loser.gif";
import drawGif from "../assets/draw.gif";

const Winner = () => {
  const navigate = useNavigate();
  const { selection, computerSelection, winner } = useSelector(
    (state) => state.game
  );
  if (!selection || !computerSelection) return <Navigate to={"/"} />;
  const getResultEmoji = (winner) => {
    switch (winner) {
      case "YOU WON":
        return [<MdOutlineCelebration />, winnerGif];
      case "YOU LOST":
        return [<FaRegSadCry />, loserGif];
      case "DRAW":
        return [<MdOutlineThumbsUpDown />, drawGif];
    }
  };
  const resultEmoji = getResultEmoji(winner)[0];
  const resultImg = getResultEmoji(winner)[1];
  return (
    <StyledWinner
      className="flex"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeIn} className="flex-col user">
        <h3>YOU PICKED</h3>
        <StyledSelection
          className={`selection ${winner === "YOU WON" ? "winner" : ""}`}
        >
          <div className="winner-div">
            <div>
              <div></div>
            </div>
          </div>
          <motion.div className={`wrapper ${selection.selection}`}>
            <img src={selection.icon} alt={selection.selection} />
          </motion.div>
        </StyledSelection>
      </motion.div>

      <motion.div variants={fadeIn} className="flex-col computer">
        <h3>THE HOUSE PICKED</h3>
        <StyledSelection
          className={` selection ${winner === "YOU LOST" ? "winner" : ""}`}
        >
          <div className="winner-div">
            <div>
              <div></div>
            </div>
          </div>
          <div className={`wrapper ${computerSelection.selection}`}>
            <img
              src={computerSelection.icon}
              alt={computerSelection.selection}
            />
          </div>
        </StyledSelection>
      </motion.div>
      <motion.div variants={winnerAnimation} className="result">
        <h1>
          {resultEmoji} {winner}
        </h1>
        <img src={resultImg} alt="result gif" />
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/")}
          className="rules-btn"
        >
          Play Again
        </motion.button>
      </motion.div>
    </StyledWinner>
  );
};

const StyledWinner = styled(motion.section)`
  align-items: center;
  .flex-col {
    align-items: center;
    h3 {
      font-size: 1.5rem;
      color: white;
    }
  }
  .user {
    order: 1;
  }
  .computer {
    order: 3;
  }
  .result {
    margin: 0rem 3rem;
    order: 2;
    text-align: center;
    .rules-btn {
      padding: 1rem 3rem;
      background-color: white;
      color: hsl(229, 25%, 31%);
      font-size: 1.5rem;
      font-weight: lighter;
    }
    h1 {
      margin-bottom: 1rem;
      font-size: 3rem;
      color: white;
    }
    img {
      max-width: 15rem;
      margin: 1.5rem auto;
      border-radius: 10px;
    }
  }

  .selection {
    img {
      width: 6rem;
      min-width: 40px;
    }
    .wrapper {
      padding: 2rem;
      border-width: 1.5rem;
    }
  }
  .winner {
    position: relative;
  }
  .winner-div {
    display: none;
  }
  .winner-div,
  .winner-div div {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.03);
    width: 80vh;
    min-height: 80vh;
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 50%;
  }
  .winner .winner-div {
    display: block;
    div {
      width: 80%;
      min-height: 60vh;
      div {
        width: 60%;
        min-height: 40vh;
      }
    }
  }
  .animation {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 4);
    z-index: 5;
  }
  @media screen and (max-width: 900px) {
    .flex-col h3 {
      font-size: 1rem;
      color: white;
      order: 2;
    }

    .result {
      order: 3;
      margin: 1rem auto;
      h1 {
        font-size: 2rem;
      }
      .rules-btn {
        padding: 1rem 2rem;
        background-color: white;
        color: hsl(229, 25%, 31%);
        font-size: 1rem;
        font-weight: lighter;
      }
    }
    .computer {
      order: 2;
    }
    .selection {
      order: 1;
      img {
        width: 2rem;
        min-width: 40px;
      }
      .wrapper {
        padding: 1rem;
        border-width: 1rem;
      }
    }
  }
`;
export default Winner;
