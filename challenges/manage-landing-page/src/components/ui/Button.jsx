import clsx from "clsx";
import React from "react";

const commonStyles =
  "transition-all duration-300 rounded-full py-3 px-4 cursor-pointer";
const buttonVariants = {
  primary:
    "bg-bright-orange  hover:bg-bright-orange/75 hover:shadow-md shadow-bright-orange text-white",
  secondary:
    "bg-white text-bright-orange hover:text-bright-orange/75 hover:shadow-md",
};
const Button = ({ variant = "primary", children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(commonStyles, buttonVariants[variant], props.className)}
    >
      {children}
    </button>
  );
};

export default Button;
