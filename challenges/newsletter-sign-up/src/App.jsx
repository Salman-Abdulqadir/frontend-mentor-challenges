import React, { useState } from "react";
import SuccessMessage from "./components/SuccessMessage";
import SubscribeForm from "./components/SubscribeForm";
import MobileSuccessMessage from "./components/MobileSuccessMessage";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <main className="bg-blue-light min-h-screen flex flex-col justify-center items-center">
      {isSubmitted ? (
        <>
          <div className="hidden md:block">
            <SuccessMessage onDismiss={() => setIsSubmitted(false)} />
          </div>
          <div className="md:hidden">
            <MobileSuccessMessage onDismiss={() => setIsSubmitted(false)} />
          </div>
        </>
      ) : (
        <SubscribeForm onSubmit={() => setIsSubmitted(true)} />
      )}
    </main>
  );
};

export default App;
