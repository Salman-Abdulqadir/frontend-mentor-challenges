import { ActionTypes } from "./actions";
import { ActionType, ICalculatorData } from "./types";

export const reducer = (state: ICalculatorData, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_CALCULATOR_DATA:
      return { ...action.payload };
    case ActionTypes.CLEAR_CALCULATOR_DATA:
      return {};
    default:
      return state;
  }
};
