import { useEffect, useState } from "react";
import FlipCard from "./flip-card";

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days: days < 10 ? "0" + days : days,
    hours: hours < 10 ? "0" + hours : hours,
    minutes: minutes < 10 ? "0" + minutes : minutes,
    seconds: seconds < 10 ? "0" + seconds : seconds,
  };
}

const Countdown = () => {
  const [value, setValue] = useState(getTimeRemaining(new Date("2025-06-23")));

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(getTimeRemaining(new Date("2025-06-23")));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-5">
      <FlipCard value={value.days} label={"DAYS"} />
      <FlipCard value={value.hours} label={"HOURS"} />
      <FlipCard value={value.minutes} label={"MINUTES"} />
      <FlipCard value={value.seconds} label={"SECONDS"} />
    </div>
  );
};

export default Countdown;
