import React from "react";

const SuccessMessage = ({ dismiss }) => {
  return (
    <div className="space-y-3 bg-grey-dark p-4 rounded-md" onClick={dismiss}>
      <div className="flex items-center gap-3">
        <img
          src="/src/assets/images/icon-success-check.svg"
          alt="checked mark"
        />
        <span className="text-white font-bold">Message Sent!</span>
      </div>
      <p className="text-grey-medium text-sm w-[360px]">
        Thanks for completing the form. we'll be in touch soon!
      </p>
    </div>
  );
};

export default SuccessMessage;
