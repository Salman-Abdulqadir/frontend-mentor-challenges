import React from "react";
import iconList from "../assets/images/icon-list.svg";
import Button from "./Button";
const MobileSuccessMessage = ({ onDismiss }) => {
  return (
    <div className="h-screen bg-white p-6 flex flex-col justify-between">
      <div className="space-y-8 flex-1 flex flex-col justify-center">
        <img
          src={iconList}
          alt="checked list icon"
          className="w-[50px] h-[50px]"
        />
        <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to
          <span className="text-blue-dark font-bold">
            ash@loremcompany.com.
          </span>{" "}
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <Button onClick={onDismiss}>Dismiss message</Button>
    </div>
  );
};

export default MobileSuccessMessage;
