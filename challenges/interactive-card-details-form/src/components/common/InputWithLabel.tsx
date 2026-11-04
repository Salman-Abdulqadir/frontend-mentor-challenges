import React from "react";

interface Props {
  value: any;
  changeHanlder: (value: any) => any;
  label: string;
  error: string;
  maxLength?: number;
  placeholder: string;
}
const InputWithLabel: React.FC<Props> = ({
  label,
  value,
  changeHanlder,
  error,
  maxLength = null,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg text-greyish-violet-3 font-semibold">
        {label}
      </span>
      <input
        type="text"
        {...(maxLength && { maxLength })}
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeHanlder(e.target.value)}
        className={`cursor-pointer rounded-lg text-lg text-greyish-violet-3 font-semibold px-3 py-2 border-[1px] ${
          error ? "border-error-red" : "border-greyish-violet-1"
        } hover:border-greyish-violet-2`}
      />
      <span className="text-error-red">{error}</span>
    </div>
  );
};

export default InputWithLabel;
