import React from "react";
import { timeToFormat } from "./utils";

function Countdown({ time, label }) {
    const formated = timeToFormat(time);

    return (
        <div className="w-1/4 flex flex-col">
            <div className="w-full text-center flex justify-center font-libreBodoni">
                <div className="flex-grow flex justify-center">
                    <div className="w-[24px] fade" key={label + "1" + formated[0]}>
                        {formated[0]}
                    </div>
                    <div className="w-[24px] fade" key={label + "2" + formated[1]}>
                        {formated[1]}
                    </div>
                </div>
            </div>

            <div className="flex w-full text-sm font-poppins italic font-light leading-none">
                <div className="w-full text-center">{label}</div>
            </div>
        </div>
    );
}

export default Countdown;