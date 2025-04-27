import React, { useState } from "react";
import { CheckIcon, PatternCircles } from "../icons";
import "./pricing-card.css";

const Header = () => (
  <div className="relative space-y-4 salman">
    <PatternCircles className="w-36 h-36 text-blue-light-grayish-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-9" />
    <h1 className="text-3xl font-semibold text-blue-dark-desaturated">
      Simple, traffic based pricing
    </h1>
    <p className="text-blue-grayish">
      Signup for our 30-day trail, no credit card required
    </p>
  </div>
);

const PricingCard = () => {
  const pricingOptions = [
    { views: "10K", price: 8 },
    { views: "50K", price: 12 },
    { views: "100K", price: 16 },
    { views: "500K", price: 24 },
    { views: "1M", price: 36 },
  ];
  const [selectedPricing, setSelectedPricing] = useState(2);
  const [isYearly, setIsYearly] = useState(false);
  const selectedOption = pricingOptions[selectedPricing];
  const finalPrice = isYearly
    ? selectedOption.price - selectedOption.price * 0.25
    : selectedOption.price;
  return (
    <div className="flex flex-col  items-center w-full z-10 space-y-24">
      <Header />
      <div className="w-full max-w-[500px] bg-white rounded-sm shadow-2xl drop-shadow-blue-dark-desaturated">
        <div className="border-b border-blue-light-grayish-1 px-8 pb-8 pt-12 space-y-8">
          <div className="flex items-center justify-between">
            <div className="text-blue-grayish">
              <span>{selectedOption?.views}</span> PAGEVIEWS
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-dark-desaturated text-4xl font-bold">
                ${finalPrice.toFixed(2)}
              </span>{" "}
              <span className="text-blue-grayish">/month</span>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="4"
            className="w-full"
            value={selectedPricing}
            onChange={(e) => setSelectedPricing(e.target.value)}
            style={{
              background: `linear-gradient(to right, var(--color-cyan-soft) ${
                (selectedPricing / 4) * 100
              }%, var(--color-blue-light-grayish-1) ${
                (selectedPricing / 4) * 100
              }%)`,
            }}
          />

          <div className="flex justify-center items-center gap-3 translate-x-[40px] mt-3">
            <div className="text-blue-grayish text-sm">Monthly Billing</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={isYearly}
                onChange={() => setIsYearly((prev) => !prev)}
              />
              <div className="w-11 h-6 bg-blue-light-grayish-1 rounded-full peer peer-checked:bg-cyan-strong transition"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
            </label>

            <div className="flex gap-1 items-center">
              <div className="text-blue-grayish text-sm">Yearly Billing</div>
              <div className="rounded-full bg-red-light-grayish text-red-light text-xs px-2 py-1">
                25% discount
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 flex items-center gap-8 justify-between">
          <div className="space-y-4">
            {["Unlimited websites", "100% data ownership", "Email report"].map(
              (text, index) => (
                <div
                  key={index}
                  className="text-blue-grayish text-sm flex gap-2 items-center"
                >
                  <CheckIcon className="h-3 w-3 text-cyan-strong" />
                  {text}
                </div>
              )
            )}
          </div>
          <button className="rounded-full bg-blue-dark-desaturated text-blue-light-grayish-2 hover:text-white transition-all duration-300 cursor-pointer text-sm px-12 py-3">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
