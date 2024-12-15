import React from "react";
import cardLogo from "../../assets/images/card-logo.svg";
import frontCardBg from "../../assets/images/bg-card-front.png";
import { useCardDetails } from "../../contexts/CardDetailsContext";
const FrontPage = () => {
  const {
    cardDetails: { cardNumber, holderName, expiryMonth, expiryYear },
  } = useCardDetails();
  return (
    <div
      className={`h-[225px] w-[396.5px] rounded-lg flex flex-col justify-between gap-6 p-6 text-white bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url(${frontCardBg})` }}
    >
      <img src={cardLogo} alt="card-logo" className="h-fit w-fit" />
      <div className="space-y-4">
        <div className="text-3xl tracking-wider">
          {cardNumber || "1234 5678 9123 0000"}
        </div>
        <div className="flex items-center justify-between">
          <span>{holderName?.toUpperCase() || "CARD HOLDER NAME"}</span>
          <span>
            {expiryMonth || "MM"}/{expiryYear || "YY"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
