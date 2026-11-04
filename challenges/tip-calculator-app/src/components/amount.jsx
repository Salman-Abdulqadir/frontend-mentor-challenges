import React, { useRef } from "react";
import styled from "styled-components";

import Button from "./tipOption";

//react icons
import {
  BsCurrencyDollar,
  BsPeople,
  BsPercent,
  BsPersonPlus,
  BsReceipt,
} from "react-icons/bs";

import {useDispatch } from "react-redux";
import {
  setBill,
  setCount,
  calculateTotal,
} from "../redux/amountReducer";


const Amount = () => {

  const dispatch = useDispatch();
  const errorMsg = useRef(null);
  const errorInput = useRef(null);

  const updateTotal = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.name === "bill") dispatch(setBill(value));
    else if (e.target.name === "count" && value <= 0) {
      errorInput.current.classList.add("error");
      errorMsg.current.style.display = "flex";
    } else {
      dispatch(setCount(value));
      errorInput.current.classList.remove("error");
      errorMsg.current.style.display = "none";
    }
    dispatch(calculateTotal());
  };

  return (
    <StyledAmount className="flex-col">
      <div className="bill">
        <h4>
          <BsReceipt /> Bill
        </h4>
        <div className="input-field flex">
          <BsCurrencyDollar className="icon" />
          <input
            onKeyUp={updateTotal}
            name="bill"
            type="number"
            placeholder="0"
          />
        </div>
      </div>
      <div className="tip-percentage">
        <h4>
          <BsPercent /> Select Tip{" "}
        </h4>
        <div className="percentages grid">
          <Button id={1} content="5%" />
          <Button id={2} content="10%" />
          <Button id={3} content="15%" />
          <Button id={4} content="25%" />
          <Button id={5} content="50%" />
          <input type="number" placeholder="custom" />
        </div>
      </div>
      <div className="ppl-count">
        <div className="flex">
          <h4>
            <BsPeople /> Number of People{" "}
          </h4>
          <p ref={errorMsg} className="error-msg">
            Can't be zero or -ve
          </p>
        </div>

        <div ref={errorInput} className="input-field flex">
          <BsPersonPlus className="icon" />
          <input
            onKeyUp={updateTotal}
            name="count"
            type="number"
            min={"1"}
            placeholder="1"
          />
        </div>
      </div>
    </StyledAmount>
  );
};

const StyledAmount = styled.div`
  margin: 0rem auto;
  button {
    background-color: hsl(183, 100%, 15%);
    color: white;
    &:hover {
      color: hsl(183, 100%, 15%);
      background-color: hsl(172, 67%, 45%);
    }
  }
  button.active {
    color: hsl(183, 100%, 15%);
    background-color: hsl(172, 67%, 45%);
  }
  h4{
    margin-bottom: 1rem;
  }
  .icon {
    color: hsl(186, 14%, 43%);
  }
  .input-field,
  .percentages input {
    transition: all 0.3s ease;
    background-color: rgba(208, 228, 232, 0.4);
    padding-left: 1rem;
  }
  .bill input,
  .ppl-count input {
    text-align: right;
  }
  .error {
    border: 2px solid darkred;
  }
  .error-msg {
    font-size: 12px;
    font-weight: bold;
    color: darkred;
    display: none;
  }
`;

export default Amount;
