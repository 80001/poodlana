import React, { useEffect, useState } from 'react';
import bg from '../../images/press-bg.webp';
import bgMob from '../../images/press-bg-mobile.webp';
import cryptonews from '../../images/cryptonews.svg';
import cointelegraph from '../../images/cointelegraph.svg';
import cryptopolitan from '../../images/cryptopolitan.svg';
import beincrypto from '../../images/beincrypto.svg';
import utoday from '../../images/utoday.svg';
import amb from '../../images/amb-crypto.svg';
import coinPedia from '../../images/coinPedia.svg';

const Press = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-black py-[20px] lg:py-[40px] relative">
            <img
                alt="press"
                loading="lazy"
                width="2880"
                height="2000"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto"
                src={isMobile ? bgMob : bg}
                style={{ color: 'transparent' }}
            />
            <div className="absolute top-[20px] lg:top-[80px] left-0 size-full max-lg:pt-[36px] min-h-[945px] max-lg:min-h-[900px]">
                <h4 className="text-white font-bold text-[52px] text-center leading-none uppercase lg:hidden">
                    Press
                </h4>
                <div className="lg:px-[5%] flex justify-between pt-[8%] max-lg:pt-[40px]">
                    <ul className="flex flex-col gap-[67px] items-center max-lg:flex-1 max-lg:gap-[32px]">
                        <li className="flex flex-col items-center lg:w-[370px] lg:h-[140px] max-lg:w-[135px] max-lg:h-[70px]">
                            <p className="text-center text-white text-[28px] font-semibold leading-[32px] mb-4 uppercase max-lg:text-sm max-lg:mb-2 max-lg:leading-[16px]">
                                “Set to take the crypto world by storm”
                            </p>
                            <img
                                alt="businessInsider"
                                loading="lazy"
                                width="202"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                className="opacity-30"
                                src={amb}
                                style={{ color: 'transparent' }}
                            />
                        </li>
                        <li className="flex flex-col items-center lg:w-[370px] lg:h-[140px] max-lg:w-[135px] max-lg:h-[70px]">
                            <p className="text-center text-white text-[28px] font-semibold leading-[32px] mb-4 uppercase max-lg:text-sm max-lg:mb-2 max-lg:leading-[16px]">
                                “Poodles + Asia + fashion = inevitable?”
                            </p>
                            <img
                                alt="cryptoPotato"
                                loading="lazy"
                                width="171"
                                height="40"
                                decoding="async"
                                data-nimg="1"
                                className="opacity-30"
                                src={cryptopolitan}
                                style={{ color: 'transparent' }}
                            />
                        </li>
                        <li className="flex flex-col items-center lg:w-[370px] lg:h-[140px] max-lg:w-[135px] max-lg:h-[70px]">
                            <p className="text-center text-white text-[28px] font-semibold leading-[32px] mb-4 uppercase max-lg:text-sm max-lg:mb-2 max-lg:leading-[16px]">
                                “Most anticipated meme coin of 2024”
                            </p>
                            <img
                                alt="bitcoin"
                                loading="lazy"
                                width="228"
                                height="34"
                                decoding="async"
                                data-nimg="1"
                                className="opacity-30"
                                src={utoday}
                                style={{ color: 'transparent' }}
                            />
                        </li>
                    </ul>
                    <div className="flex-1 flex flex-col items-center max-lg:hidden">
                        <h4 className="text-white font-bold text-[84px] text-center leading-none mt-[-20px] uppercase">
                            Press
                        </h4>
                        <div className="flex flex-col items-center w-[350px] mt-[132px]">
                            <p className="text-center text-white text-[28px] font-semibold leading-[32px] mb-4 uppercase">
                                “Anticipated to overtake Dogecoin”
                            </p>
                            <img
                                alt="coinTelegraph"
                                loading="lazy"
                                width="237"
                                height="56"
                                decoding="async"
                                data-nimg="1"
                                className="opacity-30"
                                src={cointelegraph}
                                style={{ color: 'transparent' }}
                            />
                        </div>
                    </div>
                    <ul className="flex flex-col gap-[67px] items-center max-lg:flex-1 max-lg:gap-[32px]">
                        <li className="flex flex-col items-center w-[350px] lg:h-[140px] max-lg:w-[135px] max-lg:h-[70px]">
                            <p className="text-center text-white text-[28px] font-semibold leading-[32px] mb-4 uppercase max-lg:text-sm max-lg:mb-2 max-lg:leading-[16px]">
                                “Viral before it has even launched”
                            </p>
                            <img
                                alt="beInCrypto"
                                loading="lazy"
                                width="153"
                                height="42"
                                decoding="async"
                                data-nimg="1"
                                className="opacity-30"
                                src={beincrypto}
                                style={{ color: 'transparent' }}
                            />
                        </li>
                        <li className="flex flex-col items-center w-[350px] lg:h-[140px] max-lg:w-[135px] max-lg:h-[70px]">
                            <p className="text-center text-white text-[28px] font-semibold leading-[32px] mb-4 uppercase max-lg:text-sm max-lg:mb-2 max-lg:leading-[16px]">
                                “Latest memecoin sensation in Asia”
                            </p>
                            <img
                                alt="cryptonews"
                                loading="lazy"
                                width="210"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                className="opacity-30"
                                src={cryptonews}
                                style={{ color: 'transparent' }}
                            />
                        </li>
                        <li className="flex flex-col items-center w-[350px] lg:h-[140px] max-lg:w-[135px] max-lg:h-[70px]">
                            <p className="text-center text-white text-[28px] font-semibold leading-[32px] mb-4 uppercase max-lg:text-sm max-lg:mb-2 max-lg:leading-[16px]">
                                “Talk of the town amongst crypto insiders”
                            </p>
                            <img
                                alt="finanzen"
                                loading="lazy"
                                width="191"
                                height="40"
                                decoding="async"
                                data-nimg="1"
                                className="opacity-30"
                                src={coinPedia}
                                style={{ color: 'transparent' }}
                            />
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center w-[135px] mt-8 lg:hidden mx-auto">
                    <p className="text-center text-white text-[14px] font-semibold leading-[16px] mb-2 uppercase">
                        “Anticipated to overtake Dogecoin”
                    </p>
                    <img
                        alt="coinTelegraph"
                        loading="lazy"
                        width="237"
                        height="56"
                        decoding="async"
                        data-nimg="1"
                        className="opacity-30 scale-75"
                        src={cointelegraph}
                        style={{ color: 'transparent' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Press;
