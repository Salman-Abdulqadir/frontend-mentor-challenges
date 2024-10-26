import React from "react";

interface IInputWithLabelProp {
  title: string;
  selectedOption: string;
  options: string[];
  onSelect: (selectedValue: string) => void;
  errorMessage: string;
}
const InputWithLabel: React.FC<IInputWithLabelProp> = ({
  title,
  selectedOption,
  options,
  onSelect,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-700">{title}</label>
      <div className={`space-y-3`}>
        {options?.map((option, index) => {
          const isSelected = selectedOption === option;
          return (
            <div
              key={`${option}-${index}`}
              className={`flex items-center gap-4 rounded-[4px] px-4 py-3 border-[1px] cursor-pointer hover:border-lime-300 ${
                isSelected ? "bg-lime-100 border-lime-300" : "border-slate-700"
              }`}
              onClick={() => onSelect(option)}
            >
              <input
                type="radio"
                className={`radio radio-sm ${
                  isSelected ? "checked:bg-lime-500" : "border-slate-700"
                }`}
                checked={isSelected}
              />
              <span className="font-bold">{option}</span>
            </div>
          );
        })}
      </div>
      {errorMessage && <h4 className="text-red-100 text-sm">{errorMessage}</h4>}
    </div>
  );
};

export default InputWithLabel;
