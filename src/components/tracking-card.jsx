import React from "react";
import ellipsis from "../assets/images/icon-ellipsis.svg";
const TrackingCard = ({
  title,
  currentValue,
  previousValue,
  cardIcon,
  bgColor,
}) => {
  return (
    <div className={`rounded-xl ${bgColor} relative overflow-hidden`}>
      <img src={cardIcon} alt="icon" className="absolute -top-2 right-4" />

      <div className="rounded-xl bg-navy-900 hover:bg-purple-500 transition-colors duration-300 cursor-pointer p-6 mt-12 relative z-20 h-full space-y-4">
        <div className="flex items-center justify-between">
          <h3>{title}</h3>
          <button className="cursor-pointer">
            <img src={ellipsis} alt="ellipsis" />
          </button>
        </div>
        <div className="space-y-2 flex flex-wrap items-center justify-between md:flex-col md:items-start">
          <p className="text-5xl font-extralight">{currentValue}</p>
          <p className="text-navy-200 text-sm">{previousValue}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingCard;
