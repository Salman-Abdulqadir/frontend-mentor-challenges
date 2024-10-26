import React from "react";

interface IInputWithLabelProp {
  title: string;
  placeholder: string;
  value: string | number;
  onChange: (newValue: string) => void;
  suffix?: string;
  prefix?: string;
  errorMessage: string;
}
const InputWithLabel: React.FC<IInputWithLabelProp> = ({
  title,
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  errorMessage,
}) => {
  const getPrefixSuffixBox = (text: string) => {
    return (
      <div
        className={` bg-slate-100 font-[700] p-3 ${
          errorMessage ? "bg-red-100 text-white" : "bg-slate-100 text-slate-700"
        }`}
      >
        {text}
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-2 max-w-full">
      <label className="text-slate-700">{title}</label>
      <div
        className={`flex border-[1px] overflow-hidden rounded-[4px] ${
          errorMessage ? "border-red-100" : "border-slate-700"
        }`}
      >
        {prefix && getPrefixSuffixBox(prefix)}
        <input
          className="w-full font-jakarta px-3  text-slate-700 font-bold text-lg"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        {suffix && getPrefixSuffixBox(suffix)}
      </div>
      {errorMessage && <h4 className="text-red-100 text-sm">{errorMessage}</h4>}
    </div>
  );
};

export default InputWithLabel;
