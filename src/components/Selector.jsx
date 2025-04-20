import React from "react";
import radioCheckIcon from "../assets/images/icon-radio-selected.svg";
const Selector = ({
  label,
  required,
  error,
  options,
  selected,
  setSelected,
}) => {
  return (
    <fieldset className="space-y-1">
      <label className="flex items-center gap-2">
        <span className="text-grey-dark">{label}</span>
        {required && (
          <>
            <span aria-hidden="true" className="text-green-medium">
              *
            </span>
            <span className="sr-only">required</span>
          </>
        )}
      </label>
      <div className="flex flex-col lg:flex-row gap-3">
        {options.map((option, index) => {
          const isSelected = selected === option;
          const selectedStyle = "border-green-medium bg-green-light";
          return (
            <div
              key={index}
              className={`cursor-pointer w-full px-3 py-2 rounded-md border ${
                isSelected ? selectedStyle : "border-grey-medium"
              } hover:border-green-medium flex gap-3 items-center`}
              onClick={() => setSelected(option)}
            >
              <input
                type="radio"
                id={option}
                name="selector"
                value={option}
                checked={selected === option}
                className="hidden peer"
              />

              {selected === option ? (
                <img src={radioCheckIcon} alt="selected icon" />
              ) : (
                <div className="h-[20px] w-[20px] rounded-full border border-grey-dark" />
              )}
              <label htmlFor={option} className="cursor-pointer">
                {option}
              </label>
            </div>
          );
        })}
      </div>
      {error && <label className="text-red">{error}</label>}
    </fieldset>
  );
};

export default Selector;
