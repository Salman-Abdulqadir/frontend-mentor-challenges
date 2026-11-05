import { useEffect, useState } from "react";
import FlipCard from "./flip-card";

const CYCLE_MS = 14 * 24 * 60 * 60 * 1000;

const format = (value) => (value < 1 ? "00" : value < 10 ? "0" + value : value);

function getNextEnd(endtime, now) {
  const end = Date.parse(endtime);
  if (end >= now) return end;
  return end + (Math.floor((now - end) / CYCLE_MS) + 1) * CYCLE_MS;
}

function getTimeRemaining(endtime) {
  const now = Date.parse(new Date());
  const total = getNextEnd(endtime, now) - now;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days: format(days),
    hours: format(hours),
    minutes: format(minutes),
    seconds: format(seconds),
  };
}

const Countdown = ({ endDate }) => {
  const [value, setValue] = useState(getTimeRemaining(new Date(endDate)));

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(getTimeRemaining(new Date(endDate)));
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate]);
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
