import React, { useEffect, useState } from 'react';
import runway from '../../images/runway.webp';
import runwayM from '../../images/runway-mobile.webp';

const Runway = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [style, setStyle] = useState({ transform: 'none' });
    const width = window.innerWidth;

    const handleScroll = () => {
        const y = window.scrollY.toFixed(0);
        setScrollPosition(y);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [width]);

    useEffect(() => {
        if (width <= 1000) {
            if (scrollPosition >= 3650 && scrollPosition <= 13840) {
                const maxTranslateX = 3500;
                const minScroll = 3650;
                const maxScroll = 13840;
                const scrollRange = maxScroll - minScroll;
                const translateXRange = maxTranslateX;

                // Linear mapping
                const y = ((scrollPosition - minScroll) / scrollRange) * translateXRange;
                setStyle({ transform: `translateX(-${y}px) translateZ(0px)` });
            } else if (scrollPosition >= 13840) {
                setStyle({ transform: `translateX(-3500px) translateZ(0px)` })
            }
        } else {
            if (scrollPosition >= 5080 && scrollPosition <= 13840) {
                const maxTranslateX = 3500;
                const minScroll = 5080;
                const maxScroll = 13840;
                const scrollRange = maxScroll - minScroll;
                const translateXRange = maxTranslateX;

                // Linear mapping
                const y = ((scrollPosition - minScroll) / scrollRange) * translateXRange;
                setStyle({ transform: `translateX(-${y}px) translateZ(0px)` });
            } else if (scrollPosition >= 13840) {
                setStyle({ transform: `translateX(-3500px) translateZ(0px)` })
            } else {
                setStyle({ transform: 'none' });
            }
        }
    }, [scrollPosition, width]);

    return (
        <div id="runway" className="md:h-[9440.5px] overflow-clip overflow-hidden overflow-x-auto">
            <div className="md:h-[9040px] max-md:hidden"></div>
            <div className="sticky bottom-0 layout py-20 max-lg:py-[90px] max-lg:px-10 w-[100vw]">
                <h2 className="font-bold text-[100px] uppercase  max-lg:text-[48px] leading-none max-lg:text-left">
                    The Runway
                </h2>
                <p className="w-full lg:w-[968px] h-[2px] bg-black mt-[50px]"></p>
                {
                    (width >= 700) ?
                        <div className="relative">
                            <div
                                className="w-[4153px] max-lg:w-[2100px] left-0 md:pl-[300px] md:pr-[400px] pt-[50px]"
                                style={style}
                            >
                                <img
                                    alt="runway"
                                    loading="lazy"
                                    width="3452"
                                    height="400"
                                    decoding="async"
                                    data-nimg="1"
                                    className="max-w-none mb-[38px] max-lg:w-[100%] max-lg:mt-[40px]"
                                    src={runway}
                                    style={{ color: 'transparent' }}
                                />
                                <div className="flex pl-[40px]">
                                    <div className="max-lg:text-left flex-1 pr-[90px]">
                                        <h3 className="font-medium max-lg:wid text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(255, 113, 13)' }}>
                                            look1 | The Grand Entrance
                                        </h3>
                                        <p className="italic font-medium text-[20px] leading-[26px] my-4">Current Phase</p>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">Pre-Sale Extravaganza (Current stage)</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Darling, I’m in a 30-day presale that’s more exclusive than a front-row seat at Fashion Week. Only the crème de la crème can join with BASE, SOL, BNB, ETH, USDT, and USDC. Consider it your golden ticket to the elite club.
                                                </p>
                                            </li>
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">Community Building</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    I’m not just gathering followers; I’m curating a chic community of trendsetters and tastemakers. Think social media glam, dazzling AMAs, and exclusive presale soirées.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-lg:text-left flex-1 pr-[90px]">
                                        <h3 className="font-medium text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(243, 104, 112)' }}>
                                            look2 | The Fabulous Launch (60 mins after presale)
                                        </h3>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">DECENTRALIZED EXCHANGE LISTINGS</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Within 60 minutes post-presale, I'll be strutting my stuff on Raydium, ensuring I'm the center of attention with maximum visibility and liquidity.
                                                </p>
                                            </li>
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">TOKEN DISTRIBUTION</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    In true Poodlana fashion, all tokens will be 100% unlocked from day one. Transparency and fairness are my middle names—no lock-ups, no vesting periods, just pure, unadulterated Poodlana.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-lg:text-left flex-1 pr-[90px]">
                                        <h3 className="font-medium text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(209, 200, 255)' }}>
                                            look3 | Glamorous Growth
                                        </h3>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">EXCHANGE PARTNERSHIPS</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    After my dazzling DEX debut, I’ll be gracing centralized exchanges, making sure even the most traditional traders can bask in my glory. Why keep my fans waiting?
                                                </p>
                                            </li>
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">MARKETING BLITZ</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Get ready for a marketing campaign that will be the talk of the town. I’m teaming up with top influencers, high-end fashion brands, and lifestyle platforms to spread the Poodlana gospel far and wide.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-lg:text-left flex-1 pr-[90px]">
                                        <h3 className="font-medium text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(132, 203, 255)' }}>
                                            look4 | Innovation and Expansion
                                        </h3>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">STAKING PLATFORM</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Introducing a chic staking platform where holders can earn fabulous rewards just for being part of the Poodlana elite.
                                                </p>
                                            </li>
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">EXCLUSIVE AIRDROPS AND BONUSES</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Rolling out surprise airdrops and bonuses tied to special events and milestones, because every fabulous moment deserves a little extra sparkle.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-lg:text-left flex-1 pr-[90px]">
                                        <h3 className="font-medium text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(143, 237, 132)' }}>
                                            look5 | The Long-Term Vision
                                        </h3>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">GLOBAL OUTREACH</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Taking the Poodlana phenomenon global, with a particular focus on dazzling Asia. Think international partnerships, multi-language support, and appearances at the most glamorous global events.
                                                </p>
                                            </li>
                                            <li className="mt-4 relative">
                                                <h4 className="font-semibold text-xl uppercase">POODLE PHILANTHROPY</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    And let’s not forget, darling—compassion is always in vogue. I’ll be making the world a better place for our far less fortunate furry friends through dedicated philanthropic efforts.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="relative">
                            <div className="flex flex-col">
                                <div className="flex flex-col mt-[48px] max-md:mt-0">
                                    <div className="flex-1 my-[45px] md:text-left" style={{ opacity: 0.932076 }}>
                                        <h3 className="font-medium text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(255, 113, 13)' }}>
                                            look1 | The Grand Entrance
                                        </h3>
                                        <p className="italic font-medium text-[20px] leading-[26px] my-4">Current Phase</p>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">Pre-Sale Extravaganza(Current stage)</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Darling, I’m in a 30-day presale that’s more exclusive than a front-row seat at Fashion Week. Only the crème de la crème can join with BASE, SOL, BNB, ETH, USDT, and USDC. Consider it your golden ticket to the elite club.
                                                </p>
                                            </li>
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">Community Building</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    I’m not just gathering followers; I’m curating a chic community of trendsetters and tastemakers. Think social media glam, dazzling AMAs, and exclusive presale soirées.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-1 my-[45px]" style={{ opacity: 0.4 }}>
                                        <h3 className="font-medium text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(243, 104, 112)' }}>
                                            look2 | The Fabulous Launch(60 mins after presale)
                                        </h3>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">DECENTRALIZED EXCHANGE LISTINGS</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Within 60 minutes post-presale, I'll be strutting my stuff on Raydium, ensuring I'm the center of attention with maximum visibility and liquidity.
                                                </p>
                                            </li>
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">TOKEN DISTRIBUTION</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    In true Poodlana fashion, all tokens will be 100% unlocked from day one. Transparency and fairness are my middle names—no lock-ups, no vesting periods, just pure, unadulterated Poodlana.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-1 my-[45px]" style={{ opacity: 0.4 }}>
                                        <h3 className="font-medium text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(209, 200, 255)' }}>
                                            look3 | Glamorous Growth
                                        </h3>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">EXCHANGE PARTNERSHIPS</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    After my dazzling DEX debut, I’ll be gracing centralized exchanges, making sure even the most traditional traders can bask in my glory. Why keep my fans waiting?
                                                </p>
                                            </li>
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">MARKETING BLITZ</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Get ready for a marketing campaign that will be the talk of the town. I’m teaming up with top influencers, high-end fashion brands, and lifestyle platforms to spread the Poodlana gospel far and wide.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-1 my-[45px]" style={{ opacity: 0.4 }}>
                                        <h3 className="font-medium text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(132, 203, 255)' }}>
                                            look4 | Innovation and Expansion
                                        </h3>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">STAKING PLATFORM</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Introducing a chic staking platform where holders can earn fabulous rewards just for being part of the Poodlana elite.
                                                </p>
                                            </li>
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">EXCLUSIVE AIRDROPS AND BONUSES</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Rolling out surprise airdrops and bonuses tied to special events and milestones, because every fabulous moment deserves a little extra sparkle.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-1 my-[45px]" style={{ opacity: 0.4 }}>
                                        <h3 className="font-medium text-[28px] leading-[42px] uppercase" style={{ color: 'rgb(143, 237, 132)' }}>
                                            look5 | The Long-Term Vision
                                        </h3>
                                        <ul className="mt-4">
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">GLOBAL OUTREACH</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    Taking the Poodlana phenomenon global, with a particular focus on dazzling Asia. Think international partnerships, multi-language support, and appearances at the most glamorous global events.
                                                </p>
                                            </li>
                                            <li className="mt-4 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:size-[6px] before:rounded-full before:bg-black">
                                                <h4 className="font-semibold text-xl uppercase">POODLE PHILANTHROPY</h4>
                                                <p className="font-ebGaramond text-xl">
                                                    And let’s not forget, darling—compassion is always in vogue. I’ll be making the world a better place for our far less fortunate furry friends through dedicated philanthropic efforts.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <img
                                    alt="runway"
                                    loading="lazy"
                                    width="430"
                                    height="246"
                                    decoding="async"
                                    data-nimg="1"
                                    className="mt-[48px] max-w-[100vw] h-auto object-cover relative right-10"
                                    src={runwayM}
                                    style={{ color: 'transparent' }}
                                />
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Runway;
