import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/calculator/context";
import {
  clearCalculatorData,
  setCalculatorData,
} from "../../contexts/calculator/actions";
import { MORTGAGE_TYPES } from "../../contexts/calculator/types";

const Calculator = () => {
  const { calculatorData, dispatch } = useContext(CalculatorContext);
  return (
    <div className="min-h-screen">
      Calculator {JSON.stringify(calculatorData)}
    </div>
  );
};

export default Calculator;
