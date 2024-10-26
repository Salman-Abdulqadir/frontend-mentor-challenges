import {
  initialFormErrors,
  initialFormValues,
  fieldValidatorByKey,
  formKeys,
  mortgageTypeOptions,
  initialResults,
  calculatePayment,
  currency,
} from "../utils";
import InputWithLabel from "./InputWithLabel";
import SelectOneWithLabel from "./SelectOneWithLabel";
import calculatorImage from "../../../images/icon-calculator.svg";
interface IFormProps {
  formValues: typeof initialFormValues;
  formErrors: typeof initialFormErrors;
  setFormValues: React.Dispatch<React.SetStateAction<typeof initialFormValues>>;
  setFormErrors: React.Dispatch<React.SetStateAction<typeof initialFormErrors>>;
  setResult: React.Dispatch<React.SetStateAction<typeof initialResults>>;
}
const Form: React.FC<IFormProps> = ({
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
  setResult,
}) => {
  const changeHandler = (field: string, value: string) => {
    setFormValues((previousState) => ({
      ...previousState,
      [field]: value,
    }));
    setFormErrors((previousState) => ({
      ...previousState,
      [field]: fieldValidatorByKey?.[field](value),
    }));
  };
  const clearHandler = () => {
    setFormErrors(initialFormErrors);
    setFormValues(initialFormValues);
    setResult(initialResults);
  };
  const submitHandler = () => {
    const tempErrors = Object.assign({}, initialFormErrors) as any;
    for (const [key, value] of Object.entries(formValues)) {
      tempErrors[key] = fieldValidatorByKey?.[key](value);
    }
    setFormErrors(tempErrors);
    if (Object.keys(tempErrors).every((key) => !tempErrors[key])) {
      setResult(calculatePayment(formValues));
    }
  };
  const Header = () => (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-[700]">Mortgage Calculator</h2>
      <button
        className="underline cursor-pointer text-slate-700"
        onClick={clearHandler}
      >
        clear
      </button>
    </div>
  );

  return (
    <div className="space-y-6 p-6">
      <Header />
      <InputWithLabel
        title="Mortgage Amount"
        placeholder=""
        value={formValues.mortgageAmount}
        onChange={(value) => changeHandler(formKeys.mortgageAmount, value)}
        prefix={currency}
        errorMessage={formErrors.mortgageAmount}
      />
      <div className="flex gap-6">
        <InputWithLabel
          title="Mortgage Term"
          placeholder=""
          value={formValues.mortgageTerm}
          onChange={(value) => changeHandler(formKeys.mortgageTerm, value)}
          suffix="Years"
          errorMessage={formErrors.mortgageTerm}
        />
        <InputWithLabel
          title="Interest Rate"
          placeholder=""
          value={formValues.interestRate}
          onChange={(value) => changeHandler(formKeys.interestRate, value)}
          suffix="%"
          errorMessage={formErrors.interestRate}
        />
      </div>
      <SelectOneWithLabel
        title="Mortgage Type"
        options={mortgageTypeOptions}
        selectedOption={formValues.mortgageType}
        onSelect={(value) => changeHandler(formKeys.mortgageType, value)}
        errorMessage={formErrors.mortgageType}
      />
      <button
        onClick={submitHandler}
        className="bg-lime-500 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-lime-300"
      >
        <img src={calculatorImage} alt="Calculator Icon" />
        Calculate Repayments
      </button>
    </div>
  );
};

export default Form;
