import React from "react";

const Input = ({
  label,
  required = false,
  inputType = "input",
  error = "",
  id,
  ...inputProps
}) => {
  const InputElement = inputType;
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1 w-full">
      <label htmlFor={inputId} className="flex items-center gap-2">
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
      <InputElement
        id={inputId}
        required={required}
        {...inputProps}
        className={
          `w-full px-3 py-2 rounded-md border ${
            error ? "border-red" : "border-grey-medium"
          } hover:border-green-medium focus:outline-none focus:ring-1 focus:ring-green-medium focus:border-green-medium` +
          ` ${inputProps?.className}`
        }
      />
      {error && (
        <label htmlFor={inputId} className="text-red">
          {error}
        </label>
      )}
    </div>
  );
};

export default Input;
