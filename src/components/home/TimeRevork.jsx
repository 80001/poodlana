import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import TimeSpliter from "./TimeSpliter";

const Tmr = ({ targetTime = new Date("2024-09-29").getTime(), x = false }) => {

    const [currentTime, setCurrentTime] = useState(Date.now());

    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24) + 3;
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (x) {
        return (
            <div className="flex text-[40px] max-md:w-[80vw] max-md:text-[35px] gap-[20px] leading-none max-lg:mt-2 font-libreBodoni items-center">
                <div className="max-md:w-1/4 max-md:items-center text-center items-end flex justify-center gap-1 max-md:flex-col">
                    <div className="flex-grow flex justify-center">{days}</div>
                    <span className="text-white/70 font-poppins max-md:text-white text-sm font-light uppercase italic">days</span>
                </div>
                <span className="text-white/35 font-poppins text-sm font-light lg:hidden">/</span>
                <div className="max-md:w-1/4 max-md:items-center items-end text-center flex justify-center gap-1 max-md:flex-col">
                    <div className="flex-grow font-libreBodoni flex justify-center">{hours}</div>
                    <span className="text-white/70 font-poppins max-md:text-white text-sm font-light uppercase italic">hrs</span>
                </div>
                <span className="text-white/35 font-poppins text-sm font-light lg:hidden">/</span>
                <div className="max-md:w-1/4 max-md:items-center text-center flex items-end justify-center gap-1 max-md:flex-col">
                    <div className="flex-grow font-libreBodoni flex justify-center">{minutes}</div>
                    <span className="text-white/70 max-md:text-white font-poppins text-sm font-light uppercase italic">mins</span>
                </div>
                <span className="text-white/35 font-poppins text-sm font-light lg:hidden">/</span>
                <div className="max-md:w-1/4 max-md:items-center text-center flex items-end justify-center gap-1 max-md:flex-col">
                    <div className="flex-grow font-libreBodoni flex justify-center">{seconds}</div>
                    <span className="text-white/70 font-poppins max-md:text-white text-sm font-light uppercase italic">secs</span>
                </div>
            </div>
        )
    }
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