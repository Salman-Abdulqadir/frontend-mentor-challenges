import React from "react";

const Button = (buttonprops) => {
  return (
    <button
      {...buttonprops}
      className={
        `p-2 w-full transition-all duration-300 bg-green-medium hover:bg-green-dark text-white rounded-md cursor-pointer` +
        ` ${buttonprops.className}`
      }
    />
  );
};

export default Button;
