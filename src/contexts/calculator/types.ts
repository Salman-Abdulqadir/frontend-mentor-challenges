import React from "react";

export enum MORTGAGE_TYPES {
  REPAYMENT = "Repayment",
  INTEREST_ONLY = "Interest Only",
}
export interface ICalculatorData {
  mortgageAmount?: number;
  interestRate?: number;
  mortgageTerm?: number;
  mortgageType?: MORTGAGE_TYPES;
}
export type ActionType = {
  type: string;
  payload: ICalculatorData;
};

export type IContextType = {
  calculatorData: ICalculatorData;
  dispatch: React.Dispatch<ActionType>;
};
