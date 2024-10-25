import { ICalculatorData } from "./types";

export const ActionTypes = {
  SET_CALCULATOR_DATA: "SET_CALCULATOR_DATA",
  CLEAR_CALCULATOR_DATA: "CLEAR_CALCULATOR_DATA",
};

export const setCalculatorData = (payload: ICalculatorData) => {
  return {
    type: ActionTypes.SET_CALCULATOR_DATA,
    payload,
  };
};

export const clearCalculatorData = () => {
  return {
    type: ActionTypes.SET_CALCULATOR_DATA,
    payload: {},
  };
};
