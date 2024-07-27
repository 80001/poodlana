import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import TimeSpliter from "./TimeSpliter";

const Tmr = ({ targetTime = new Date("2024-07-29").getTime() }) => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-full text-[40px] max-md:text-[35px] leading-none max-lg:mt-2">
        <Countdown label="DAYS" time={days} />
        <TimeSpliter />
        <Countdown label="HRS" time={hours} />
        <TimeSpliter />
        <Countdown label="MINS" time={minutes} />
        <TimeSpliter />
        <Countdown label="SECS" time={seconds} />
      </div>
    </div>
  );
};

export default Tmr;
