import { ReactNode, createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { IContextType, ICalculatorData } from "./types";

export const initialValues: ICalculatorData = {};
export const CalculatorContext = createContext<IContextType>({
  calculatorData: initialValues,
  dispatch: () => {},
});

export const CalculatorContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [calculatorData, dispatch] = useReducer(reducer, initialValues);
  return (
    <CalculatorContext.Provider value={{ calculatorData, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};
