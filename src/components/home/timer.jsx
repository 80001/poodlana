import React, { useEffect, useState } from 'react';

const Timer = ({ fullDate, s = false }) => {

    const [uniqueDates, setUniqueDates] = useState([]);
    const [uniqueDates1, setUniqueDates1] = useState([]);
    const [anime, setAnime] = useState(false);
    const [anime1, setAnime1] = useState(false);
    const [anime2, setAnime2] = useState(false);


    useEffect(() => {
        if (anime || anime1 || anime2) {

            setAnime(false)
            setAnime1(false)


        }
        if (uniqueDates1[0] && uniqueDates1[1]) {
            setAnime(false)
            setAnime1(false)

            if (uniqueDates1[0][0] !== uniqueDates1[1][0]) {
                setAnime(true)
                //setInterval(setAnime(false), 500)
            }
            if (uniqueDates1[0][1] !== uniqueDates1[1][1]) {

                setAnime1(true)
                //setInterval(setAnime1(false), 500)
            }
        }


    }, [uniqueDates1, uniqueDates, fullDate, anime, anime1, anime2])
    useEffect(() => {
        const formattedDate = formatNumber(fullDate);

        setAnime(false)
        setAnime1(false)


        setUniqueDates1((prevDates) => {
            // Check if the formatted date is already in the array
            if (!prevDates.includes(formattedDate)) {
                // If the array exceeds 60 items, remove the oldest item
                const updatedDates = prevDates.length >= 2 ? prevDates.slice(1) : prevDates;

                let x = [formattedDate[0], formattedDate[1]]

                return [...updatedDates, x];
            }
            return prevDates;
        });
        // Skip the number '00'
        if (formattedDate === '00') return;

        setUniqueDates((prevDates) => {
            // Check if the formatted date is already in the array
            if (!prevDates.includes(formattedDate)) {
                // If the array exceeds 60 items, remove the oldest item
                const updatedDates = prevDates.length >= 2 ? prevDates.slice(1) : prevDates;

                // Compare the last two numbers
                if (updatedDates.length > 0 && updatedDates[updatedDates.length - 1] !== formattedDate) {


                }

                return [...updatedDates, formattedDate];
            }
            return prevDates;
        });
        setTimeout(() => {

            setAnime2(true)
        }, 100)
        setTimeout(() => {

            setAnime2(false)
        }, 900)




    }, [fullDate]);

    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : `${num}`;
    };


    return (
        <div className="w-1/4 text-center flex justify-center font-libreBodoni">
            <div className="flex-grow flex justify-center">
                <div className={`w-[24px] ${anime ? 'fade' : ''}`}>
                    {formatNumber(fullDate)[0]}
                </div>
                {s
                    ?
                    <div className={`w-[24px] ${anime2 ? 'fade1' : ''}`}>
                        {formatNumber(fullDate)[1]}
                    </div>
                    :
                    <div className={`w-[24px] ${anime1 ? 'fade' : ''}`}>
                        {formatNumber(fullDate)[1]}
                    </div>
                }

            </div>

        </div>
    );
};

export default Timer;
