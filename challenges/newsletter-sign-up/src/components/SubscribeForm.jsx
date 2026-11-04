import React, { useMemo, useState } from "react";
import mobileBannerBg from "../assets/images/illustration-sign-up-mobile.svg";
import desktopBannerBg from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";
import Button from "./Button";

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const SubscribeForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const isValidEmail = useMemo(() => !email || validateEmail(email), [email]);
  return (
    <div className="bg-white md:rounded-4xl max-w-[850px]">
      <div
        className={`min-h-[250px] rounded-b-2xl md:hidden`}
        style={{
          background: `url(${mobileBannerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="flex p-4 gap-4 items-center">
        <div className="flex flex-col space-y-4 md:px-8">
          <h1 className="text-5xl font-bold">Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="space-y-3">
            {[
              "Product discovery and building what matters",
              "Measuring to ensure updates are a success",
              "And much more!",
            ].map((message, index) => (
              <div className="flex items-start space-x-3" key={index}>
                <img src={iconList} alt="checked list icon" />
                <p>{message}</p>
              </div>
            ))}
          </div>
          <form className="mt-5 space-y-5">
            <fieldset className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="text-sm font-bold">
                  Email address
                </label>
                {!isValidEmail && (
                  <label htmlFor="email" className="text-sm font-bold text-red">
                    Valid email required
                  </label>
                )}
              </div>
              <input
                type="email"
                placeholder="email@company.com"
                name="email"
                className={`p-3 rounded-lg border ${
                  isValidEmail ? "border-grey" : "border-red bg-red/15 text-red"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <Button
              disabled={!isValidEmail || !email?.length}
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              Subscribe to monthly newsletter
            </Button>
          </form>
        </div>
        <img
          src={desktopBannerBg}
          alt="illustration desktop"
          className="hidden md:block h-[500px]"
        />
      </div>
    </div>
  );
};

export default SubscribeForm;
