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
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const intersecting = entry.isIntersecting;
                const translateY = intersecting ? '0px' : '20px';
                const translateY2 = intersecting ? '0px' : '-15px';
                const transition = 'transform .5s';

                setStyle({ transform: `translateY(${translateY}) translateZ(0px)`, transition });
                setStyle2({ transform: `translateY(${translateY2}) translateZ(0px)`, transition });

                if (intersecting) {
                    setIsIntersecting(true);
                } else {
                    setIsIntersecting(false);
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

    const sectionData = [
        { title: 'Marketing', percentage: '15%', imgSrc: cyan, bgColor: 'rgb(92, 236, 233)', style: style },
        { title: 'Partner', percentage: '5%', imgSrc: green, bgColor: 'rgb(137, 119, 53)', style: style2 },
        { title: 'Rewards', percentage: '5%', imgSrc: white, bgColor: 'rgb(244, 218, 123)', style: style },
        { title: 'Presale', percentage: '50%', imgSrc: red, bgColor: 'rgb(235, 88, 107)', style: style2 },
        { title: 'Treasury', percentage: '10%', imgSrc: brown, bgColor: 'rgb(255, 192, 123)', style: style },
        { title: 'Liquidity', percentage: '15%', imgSrc: pink, bgColor: 'rgb(221, 54, 124)', style: style2 },
    ];

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
                {sectionData.map((section, index) => (
                    <div className="flex flex-col items-center px-2 relative" style={{ width: `${index === 3 ? '50%' : '15%'}` }} key={section.title}>
                        <div className={`flex absolute gap-2 left-1/2 ${index % 2 === 0 ? 'top-[-100px]' : 'bottom-[-100px]'} -translate-x-1/2 flex-col ${index % 2 === 1 ? 'flex-col-reverse' : ''}`}>
                            <h5 className="text-[20px] leading-6 font-semibold uppercase text-nowrap">{section.title}</h5>
                            <p className="text-[28px]">{section.percentage}</p>
                        </div>
                        <div className={`${isIntersecting ? `transformFashion${index % 2 + 1}` : ''} w-full`} style={section.style}>
                            <img alt={section.title} loading="lazy" className="h-auto w-full" src={section.imgSrc} />
                        </div>
                        <p className="w-[95%] h-[10px] mt-3" style={{ background: section.bgColor }}></p>
                    </div>
                ))}
            </div>

            <div className="lg:hidden pl-8 text-white mt-[80px]">
                {[
                    { title: 'Presale', percentage: '50%', imgSrc: redBg },
                    { title: 'Partner', percentage: '5%', imgSrc: greenBg },
                    { title: 'Rewards', percentage: '5%', imgSrc: yellowBg },
                    { title: 'Treasury', percentage: '10%', imgSrc: orgBg },
                    { title: 'Liquidity', percentage: '15%', imgSrc: pinkBg },
                    { title: 'Marketing', percentage: '15%', imgSrc: cyanBg },
                ].map((section, index) => (
                    <div className="relative" key={section.title}>
                        <div className={`text-left absolute left-4 ${index % 2 === 0 ? 'top-4' : 'top-2'}`}>
                            <h5 className={`font-ebGaramond ${index === 0 ? 'text-2xl' : 'text-[18px]'} italic`}>{section.title}</h5>
                            <p className={`text-${index === 0 ? '[32px]' : '[18px]'} font-medium`}>{section.percentage}</p>
                        </div>
                        <img alt={section.title} loading="lazy" width="390" height="430" decoding="async" data-nimg="1" className="w-full" src={section.imgSrc} style={{ color: 'transparent' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fashionomics;
