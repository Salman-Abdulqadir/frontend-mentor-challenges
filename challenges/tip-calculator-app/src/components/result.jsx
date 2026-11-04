import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { reset } from "../redux/amountReducer";

const Result = () => {
    const {total, tip_total} = useSelector(state => state.amount);
    const dispatch = useDispatch();
  return (
    <StyledResult>
      <div>
        <div className="flex">
          <header>
            <h4>Tip Amount</h4>
            <p>/person</p>
          </header>
          <h1>${tip_total? tip_total.toFixed(2):"0.00"}</h1>
        </div>
        <div className="flex">
          <header>
            <h4>Total</h4>
            <p>/person</p>
          </header>
          <h1>${total ? total.toFixed(2): "0.00"}</h1>
        </div>
      </div>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </StyledResult>
  );
};

const StyledResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 2rem;
  padding: 2rem;
  margin: 0rem auto;
  background-color: hsl(183, 100%, 15%);
  border-radius: 1rem;
  .flex {
    margin-bottom: 2rem;
    gap: 3rem;
    header{
        color: white;
        p{
            color: lightgray;
        }
    }
  }
  .flex h1 {
    font-size: 2rem;
    color: hsl(172, 67%, 45%);
  }
  button{
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    &:hover{
        background-color: #2ba2a8;
        color: white;
    }
  }
`;

export default Result;
