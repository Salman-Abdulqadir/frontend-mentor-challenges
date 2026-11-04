import React from "react";
import Button from "./ui/Button";
import illustrationImg from "@images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="flex items-center justify-between space-x-8 flex-col-reverse md:flex-row min-h-[80vh] max-w-full *:flex-1">
      <div className="space-y-6 text-center md:text-start mx-auto mb-8">
        <h1 className="relative leading-[48px] text-[38px] lg:leading-[56px] lg:text-[48px]">
          Bring everyone together to build better products.
        </h1>
        <p>
          Manage makes It simple for sortware teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="flex justify-end">
        <img src={illustrationImg} alt="Hero section illustration image" />
      </div>
    </div>
  );
};

export default Hero;
