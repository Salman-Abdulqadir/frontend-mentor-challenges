import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveBtn } from "../redux/tipReducer";
import { setTip, calculateTotal } from "../redux/amountReducer";

const Button = ({ content, id }) => {
  const active = useSelector((state) => state.activeBtn.activeBtn);
  const dispatch = useDispatch();
  const handler = () => {
    let tips = [0.05, 0.1, 0.15, 0.25, 0.5];
    let tip = tips[id - 1];
    dispatch(setActiveBtn(`btn-${id}`));
    dispatch(setTip(tip));
    dispatch(calculateTotal())
  };
  return (
    <button
      className={`btn-${id} ${active === `btn-${id}` ? "active" : ""}`}
      onClick={handler}
    >
      {content}
    </button>
  );
};

export default Button;
