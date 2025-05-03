import React from "react";
import iconList from "../assets/images/icon-list.svg";
import Button from "./Button";
const SuccessMessage = ({ onDismiss }) => {
  return (
    <div className="max-w-[450px] bg-white rounded-4xl p-10 space-y-8">
      <img
        src={iconList}
        alt="checked list icon"
        className="w-[50px] h-[50px]"
      />
      <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="text-blue-dark font-bold">ash@loremcompany.com.</span>{" "}
        Please open it and click the button inside to confirm your subscription.
      </p>
      <Button onClick={onDismiss}>Dismiss message</Button>
    </div>
  );
};

export default SuccessMessage;
