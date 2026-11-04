import { useState } from "react";

import { initialFormValues, initialFormErrors, initialResults } from "./utils";
import Form from "./widgets/Form";
import Result from "./widgets/Result";
const Calculator = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [result, setResult] = useState(initialResults);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <div className="bg-white flex gap-3 flex-col w-full min-h-screen lg:w-[60vw] md:min-h-fit md:flex-row md:rounded-3xl overflow-hidden">
        <div className="w-full lg:w-[30vw] overflow-hidden">
          <Form
            formValues={formValues}
            formErrors={formErrors}
            setFormValues={setFormValues}
            setFormErrors={setFormErrors}
            setResult={setResult}
          />
        </div>
        <div className="w-full min-h-full lg:w-[30vw] overflow-hidden">
          <Result result={result} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
