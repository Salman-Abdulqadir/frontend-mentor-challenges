import React from "react";
import { useCardDetails } from "../../contexts/CardDetailsContext";
import backCardBg from "../../assets/images/bg-card-back.png";
const BackPage = () => {
  const {
    cardDetails: { cvc },
  } = useCardDetails();
  return (
    <div
      className={`relative h-[250px] w-[396.5px] rounded-lg flex flex-col justify-between gap-6 p-6 text-white bg-no-repeat bg-contain`}
      style={{ backgroundImage: `url(${backCardBg})` }}
    >
      <span className="absolute top-[95px] right-[50px]">{cvc || "CVC"}</span>
    </div>
  );
};

export default BackPage;
