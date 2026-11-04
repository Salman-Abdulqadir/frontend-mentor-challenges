import React from "react";
import PricingCard from "./components/PricingCard";
import { BackgroundPattern } from "./components/icons";

const App = () => {
  return (
    <main className="min-h-screen w-full flex items-center  p-4 bg-blue-very-pale">
      <BackgroundPattern className="absolute top-0 left-0 w-full text-blue-light-grayish-1" />
      <PricingCard />
    </main>
  );
};

export default App;
