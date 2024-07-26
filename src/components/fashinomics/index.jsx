import React, { useEffect, useRef, useState } from 'react';
import red from '../../images/red.webp';
import cyan from '../../images/cyan.webp';
import green from '../../images/green.webp';
import white from '../../images/white.webp';
import brown from '../../images/brown.webp';
import pink from '../../images/pink.webp';
import redBg from '../../images/red-bg-v2.webp';
import cyanBg from '../../images/cyan-bg-v2.webp';
import greenBg from '../../images/green-bg-v2.webp';
import yellowBg from '../../images/yellow-bg-v2.webp';
import orgBg from '../../images/org-bg-v2.webp';
import pinkBg from '../../images/pink-bg-v2.webp';

const Fashionomics = () => {

    const [style, setStyle] = useState({ transform: 'none' });
    const [style2, setStyle2] = useState({ transform: 'none' });
    const [isIntersecting, setIsIntersecting] = useState(false);
    const fashionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const ratio = entry.intersectionRatio;

                if (entry.isIntersecting) {
                    if (ratio >= 0.5) { // Adjust threshold for smoother effect
                        //setStyle({ transform: 'none' });
                        //setStyle2({ transform: 'none' });
                        setStyle({ transform: 'translateY(0px) translateZ(0px)', transition: 'transform .5s' });
                        setStyle2({ transform: 'translateY(0px) translateZ(0px)', transition: 'transform .5s' });
                    } else {
                        setStyle({ transform: 'translateY(20px) translateZ(0px)', transition: 'transform .5s' });
                        setStyle2({ transform: 'translateY(-15px) translateZ(0px)', transition: 'transform .5s' });
                    }
                } else {
                    setStyle({ transform: 'translateY(20px) translateZ(0px)', transition: 'transform .5s' });
                    setStyle2({ transform: 'translateY(-15px) translateZ(0px)', transition: 'transform .5s' });
                }
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100) // Thresholds from 0 to 1
            }
        );

        if (fashionRef.current) {
            observer.observe(fashionRef.current);
        }

        return () => {
            if (fashionRef.current) {
                observer.unobserve(fashionRef.current);
            }
        };
    }, []);
    return (
        <div id="fashionomics" className="layout py-[120px] text-center max-lg:py-[0px] max-lg:px-0 bg-white relative z-[2]" style={{ opacity: 1, transform: 'none' }}>
            <div>
                <div className="flex justify-center items-center max-lg:flex-col">
                    <span className="italic font-bold font-libreBodoni text-[38px] max-lg:text-[32px]">Total supply</span>
                    <span className="lg:ml-2 text-[38px] max-lg:text-[32px]">1,000,000,000</span>
                </div>
                <h2 className="text-[86px] font-black mt-5 max-lg:text-[35px] uppercase leading-none">Fashionomics</h2>
                <p className="w-full max-w-[692px] mx-auto text-[18px] max-md:text-[15px] mt-5 px-5">
                    It’s time for sustainable fashion and it’s time to give your wallet a refresh. Clear out your old alts and purchase Poodlana, no one wants to be seen with last season's holdings or dare to miss out. This season we’ve got the balance right to be the next big coin.
                </p>
                <p className="font-libreBodoni italic font-bold text-4xl mt-5 max-lg:text-2xl">This is how I've split the seams...</p>
            </div>

            <div className="flex items-end mt-8 w-full max-w-[929px] mx-auto pb-[100px] pt-[40px] max-lg:hidden" ref={fashionRef}>
                <div className="flex flex-col items-center px-2 relative" style={{ width: '15%' }}>
                    <div className="flex absolute gap-2 left-1/2 -translate-x-1/2 flex-col top-[-100px]">
                        <h5 className="text-[20px] leading-6 font-semibold uppercase text-nowrap">Marketing</h5>
                        <p className="text-[28px]">15%</p>
                    </div>
                    <div className={`${isIntersecting ? 'transformFashion1' : ''}w-full`} style={style}>
                        <img alt="Marketing" loading="lazy" className="h-auto w-full" src={cyan} />
                    </div>
                    <p className="w-[95%] h-[10px] mt-3" style={{ background: 'rgb(92, 236, 233)' }}></p>
                </div>
                <div className="flex flex-col items-center px-2 relative" style={{ width: '5%' }}>
                    <div className="flex absolute gap-2 left-1/2 -translate-x-1/2 flex-col-reverse bottom-[-100px]">
                        <h5 className="text-[20px] leading-6 font-semibold uppercase text-nowrap">Partner</h5>
                        <p className="text-[28px]">5%</p>
                    </div>
                    <div className={`${isIntersecting ? 'transformFashion2' : ''}w-full`} style={style2}>
                        <img alt="Partner" loading="lazy" className="h-auto w-full" src={green} />
                    </div>
                    <p className="w-[95%] h-[10px] mt-3" style={{ background: 'rgb(137, 119, 53)' }}></p>
                </div>
                <div className="flex flex-col items-center px-2 relative" style={{ width: '5%' }}>
                    <div className="flex absolute gap-2 left-1/2 -translate-x-1/2 flex-col top-[-100px]">
                        <h5 className="text-[20px] leading-6 font-semibold uppercase text-nowrap">Rewards</h5>
                        <p className="text-[28px]">5%</p>
                    </div>
                    <div className={`${isIntersecting ? 'transformFashion1' : ''}w-full`} style={style}>
                        <img alt="Rewards" loading="lazy" className="h-auto w-full" src={white} />
                    </div>
                    <p className="w-[95%] h-[10px] mt-3" style={{ background: 'rgb(244, 218, 123)' }}></p>
                </div>
                <div className="flex flex-col items-center px-2 relative" style={{ width: '50%' }}>
                    <div className="flex absolute gap-2 left-1/2 -translate-x-1/2 flex-col-reverse bottom-[-100px]">
                        <h5 className="text-[20px] leading-6 font-semibold uppercase text-nowrap">Presale</h5>
                        <p className="text-[28px]">50%</p>
                    </div>
                    <div className="{`${isIntersecting ? 'transformFashion2' : ''}-[90`}]" style={style2}>
                        <img alt="Presale" loading="lazy" className="h-auto w-full" src={red} />
                    </div>
                    <p className="w-[95%] h-[10px] mt-3" style={{ background: 'rgb(235, 88, 107)' }}></p>
                </div>
                <div className="flex flex-col items-center px-2 relative" style={{ width: '10%' }}>
                    <div className="flex absolute gap-2 left-1/2 -translate-x-1/2 flex-col top-[-100px]">
                        <h5 className="text-[20px] leading-6 font-semibold uppercase text-nowrap">Treasury</h5>
                        <p className="text-[28px]">10%</p>
                    </div>
                    <div className={`${isIntersecting ? 'transformFashion1' : ''}w-full`} style={style}>
                        <img alt="Treasury" loading="lazy" className="h-auto w-full" src={brown} />
                    </div>
                    <p className="w-[95%] h-[10px] mt-3" style={{ background: 'rgb(255, 192, 123)' }}></p>
                </div>
                <div className="flex flex-col items-center px-2 relative" style={{ width: '15%' }}>
                    <div className="flex absolute gap-2 left-1/2 -translate-x-1/2 flex-col-reverse bottom-[-100px]">
                        <h5 className="text-[20px] leading-6 font-semibold uppercase text-nowrap">Liquidity</h5>
                        <p className="text-[28px]">15%</p>
                    </div>
                    <div className={`${isIntersecting ? 'transformFashion2' : ''}w-full`} style={style2}>
                        <img alt="Liquidity" loading="lazy" className="h-auto w-full" src={pink} />
                    </div>
                    <p className="w-[95%] h-[10px] mt-3" style={{ background: 'rgb(221, 54, 124)' }}></p>
                </div>
            </div>
            <div className="lg:hidden pl-8 text-white mt-[80px]"><div className="relative"><div className="text-left absolute left-4 top-4"><h5 className="font-ebGaramond text-2xl italic">Presale</h5><p className="text-[32px] font-medium">50%</p></div><img alt="red" loading="lazy" width="390" height="430" decoding="async" data-nimg="1" className="w-full" src={redBg} style={{ color: 'transparent' }}></img></div><div className="flex"><div className="relative flex-1"><div className="text-left absolute left-4 top-2"><h5 className="font-ebGaramond text-[18px] italic">Partner</h5><p className="text-[20px] font-medium">5%</p></div><img alt="red" loading="lazy" width="390" height="430" decoding="async" data-nimg="1" className="w-full" src={greenBg} style={{ color: 'transparent' }}></img></div><div className="relative flex-1"><div className="text-left absolute left-4 top-2"><h5 className="font-ebGaramond text-[18px]  italic">Rewards</h5><p className="text-[20px] font-medium">5%</p></div><img alt="red" loading="lazy" width="390" height="430" decoding="async" data-nimg="1" className="w-full" src={yellowBg} style={{ color: 'transparent' }}></img></div></div><div className="relative"><div className="text-left absolute left-4 top-3"><h5 className="font-ebGaramond text-[18px] italic">Treasury</h5><p className="text-[18px] font-medium">10%</p></div><img alt="red" loading="lazy" width="390" height="430" decoding="async" data-nimg="1" className="w-full" src={orgBg} style={{ color: 'transparent' }}></img></div><div className="relative"><div className="text-left absolute left-4 top-4"><h5 className="font-ebGaramond text-[18px] italic">Liquidity</h5><p className="text-[18px] font-medium">15%</p></div><img alt="red" loading="lazy" width="390" height="430" decoding="async" data-nimg="1" className="w-full" src={pinkBg} style={{ color: 'transparent' }}></img></div><div className="relative"><div className="text-left absolute left-4 top-4"><h5 className="font-ebGaramond text-base italic">Marketing</h5><p className="text-[18px] font-medium">15%</p></div><img alt="red" loading="lazy" width="390" height="430" decoding="async" data-nimg="1" className="w-full" src={cyanBg} style={{ color: 'transparent' }}></img></div></div>

        </div>
    );
};

export default Fashionomics;
