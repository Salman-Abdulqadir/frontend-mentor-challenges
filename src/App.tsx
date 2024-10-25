import Calculator from "./components/Calculator";
import { CalculatorContextProvider } from "./contexts/calculator/context";

const App = () => {
  return (
    <CalculatorContextProvider>
      <Calculator />
    </CalculatorContextProvider>
  );
};

export default App;
