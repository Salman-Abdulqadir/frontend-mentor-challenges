import React from "react";

const Button = ({ disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={` p-3 rounded-lg text-white w-full ${
        !disabled
          ? "cursor-pointer bg-blue-dark hover:bg-gradient-to-r hover:from-red hover:to-red/80 hover:drop-shadow-lg hover:drop-shadow-red transition-shadow duration-300"
          : "bg-grey cursor-not-allowed"
      }`}
      {...props}
    />
  );
};

export default Button;
