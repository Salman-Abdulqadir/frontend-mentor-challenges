import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSelection,
  setComputerSelection,
  setWinner,
} from "../redux/gameReducer";

import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissor from "../assets/icon-scissors.svg";

const gameLogic = [
  {
    selection: "paper",
    icon: paper,
    beats: "rock",
  },
  {
    selection: "rock",
    icon: rock,
    beats: "scissor",
  },
  {
    selection: "scissor",
    icon: scissor,
    beats: "paper",
  },
];
const Selection = ({ bg, logo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chooseSelection = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let selection = gameLogic.find((logic) => logic.selection === bg);
    let computerSelection = gameLogic[randomNumber];

    dispatch(setSelection(selection));
    dispatch(setComputerSelection(computerSelection));
    dispatch(setWinner());
    navigate("/winner");
  };
  return (
    <StyledSelection onClick={chooseSelection}>
      <div className={`wrapper ${bg}`}>
        <img src={logo} alt={bg} />
      </div>
    </StyledSelection>
  );
};

export const StyledSelection = styled.div`
  border-radius: 50%;
  cursor: pointer;
  .wrapper {
    background-color: white;
    padding: 2rem;
    border-radius: 50%;
    width: fit-content;
    img {
      width: 5rem;
      min-width: 40px;
    }
  }
  .rock {
    border: 1rem solid hsl(349, 71%, 52%);
  }
  .paper {
    border: 1rem solid hsl(230, 89%, 62%);
  }
  .scissor {
    border: 1rem solid hsl(39, 89%, 49%);
  }
  @media screen and (max-width: 500px) {
    .wrapper {
      padding: 1rem;
      border-radius: 50%;
      width: fit-content;
      img {
        width: 1rem;
        min-width: 40px;
      }
    }
  }
`;

export default Selection;
