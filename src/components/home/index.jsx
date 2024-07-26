import React, { useEffect, useState } from 'react';
import poodlana from '../../images/poodlana.webp'
import plane from '../../images/plane.svg'

import sol from '../../images/sol.svg';
import bnb from '../../images/bnb-36x36.svg';
import eth from '../../images/eth.svg';
import ethWhite from '../../images/eth-white.svg';
import bscOrg from '../../images/bsc-org.svg';
import solColor from '../../images/sol-color.svg';
import cardGreen from '../../images/card-green.svg';
import ethereum from '../../images/ethereum.svg';
import usdt from '../../images/usdt.svg';
import usdc from '../../images/usdc-36x36.svg';

const Home = () => {
    const [showModal, setShowModal] = useState('false')
    const [showModal2, setShowModal2] = useState('false')
    const [style, setStyle] = useState({ backgroundColor: 'rgb(0, 112, 58)' });

    useEffect(() => {
        const colors = [
            { backgroundColor: 'rgb(169, 197, 0)' },
            { backgroundColor: 'rgb(112, 11, 187)' },
            { backgroundColor: 'rgb(68, 41, 187)' },
            { backgroundColor: 'rgb(1, 86, 184)' },
            { backgroundColor: 'rgb(0, 112, 58)' },
            { backgroundColor: 'rgb(169, 197, 0)' },
            { backgroundColor: 'rgb(112, 11, 187)' },
            { backgroundColor: 'rgb(0, 155, 108)' },
            { backgroundColor: 'rgb(255, 116, 28)' },
            { backgroundColor: 'rgb(112, 11, 187)' },
            { backgroundColor: 'rgb(68, 41, 187)' },
            { backgroundColor: 'rgb(1, 86, 187)' },
            { backgroundColor: 'rgb(0, 155, 108)' },
            { backgroundColor: 'rgb(255, 116, 28)' },
            { backgroundColor: 'rgb(112, 11, 187)' },
            { backgroundColor: 'rgb(68, 41, 187)' },
            { backgroundColor: 'rgb(1, 86, 184)' },
            { backgroundColor: 'rgb(0, 112, 58)' },
            { backgroundColor: 'rgb(169, 197, 0)' },
            { backgroundColor: 'rgb(175, 23, 111)' },
            { backgroundColor: 'rgb(112, 11, 187)' },
        ];

        let index = 0;

        const interval = setInterval(() => {
            setStyle(colors[index]);
            index = (index + 1) % colors.length;
        }, 2000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
    return (
        <div id="home" className="overflow-hidden relative z-[5] bg-primary max-lg:bg-black text-white pt-[74px] max-lg:pt-[64px] lg:min-h-[900px] lg:h-[100vh] lg:max-h-[1000px] mt-[-3px]">
            <video className="absolute bottom-0 left-0 w-full h-full object-cover max-lg:h-[720px] max-lg:top-[64px] max-lg:bottom-auto z-[0]" poster="/images/video-poster.jpg" autoPlay loop muted playsInline preload="true">
                <source src="https://cdn.poodlana.org/bck-pc.mp4" type="video/mp4" />
            </video>
            <div className="z-[1] flex max-lg:flex-col layout text-white justify-between mx-auto lg:pt-[70px] pt-[40px] lg:h-full max-lg:pb-[0px] max-lg:relative max-lg:z-[1]">
                <div className="lg:mr-10 lg:flex-1 max-w-[780px] text-left  max-lg:text-center max-lg:h-[680px]" style={{ opacity: 1, transform: 'translateX(0%) translateZ(0px)' }}>
                    <p className="font-ebGaramond text-[48px] italic font-medium max-lg:text-[24px] max-lg:leading-8">Invest in Glamour, Invest in Poodlana</p>
                    <h4 className="text-[96px] font-bold uppercase leading-none text-left mt-3 max-lg:text-[52px]">The Hermès of Crypto</h4>
                    <div className="flex mt-6 max-lg:justify-center">
                        <aa className="!px-[30px] tracking-wider btn max-lg:hidden" href="https://t.me/poodlana" target="_blank" rel="noopener noreferrer">
                            <img alt="wallet" loading="lazy" width="19" height="16" decoding="async" className="mr-2 max-lg:hidden" style={{ color: 'transparent' }}
                                src={plane} />
                            Join community
                        </aa>
                    </div>
                    <div className="text-[18px] font-poppins font-[700] uppercase text-left tracking-wider mt-[30px] max-md:mt-[-15px]">PRESALE ENDS IN:</div>
                    <div className="mt-[10px] max-md:mt-[0px] w-full max-md:flex max-md:justify-center">
                        <div className="flex text-[40px] max-md:w-[80vw] max-md:text-[35px] gap-[20px] leading-none max-lg:mt-2 font-libreBodoni items-center">
                            <div className="max-md:w-1/4 max-md:items-center text-center items-end flex justify-center gap-1 max-md:flex-col">
                                <div className="flex-grow flex justify-center">21</div>
                                <span className="text-white/70 font-poppins max-md:text-white text-sm font-light uppercase italic">days</span>
                            </div>
                            <span className="text-white/35 font-poppins text-sm font-light lg:hidden">/</span>
                            <div className="max-md:w-1/4 max-md:items-center items-end text-center flex justify-center gap-1 max-md:flex-col">
                                <div className="flex-grow font-libreBodoni flex justify-center">22</div>
                                <span className="text-white/70 font-poppins max-md:text-white text-sm font-light uppercase italic">hrs</span>
                            </div>
                            <span className="text-white/35 font-poppins text-sm font-light lg:hidden">/</span>
                            <div className="max-md:w-1/4 max-md:items-center text-center flex items-end justify-center gap-1 max-md:flex-col">
                                <div className="flex-grow font-libreBodoni flex justify-center">25</div>
                                <span className="text-white/70 max-md:text-white font-poppins text-sm font-light uppercase italic">mins</span>
                            </div>
                            <span className="text-white/35 font-poppins text-sm font-light lg:hidden">/</span>
                            <div className="max-md:w-1/4 max-md:items-center text-center flex items-end justify-center gap-1 max-md:flex-col">
                                <div className="flex-grow font-libreBodoni flex justify-center">18</div>
                                <span className="text-white/70 font-poppins max-md:text-white text-sm font-light uppercase italic">secs</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-[18px] font-poppins font-[700] uppercase text-left tracking-wider mt-[15px] max-md:hidden">FIRST EXCHANGE LISTING:</div>
                    <div className="text-[24px] font-libreBodoni italic text-white/90 max-md:hidden uppercase tracking-wider">12:00 PM UTC August 16</div>
                    <div className="text-[15px] font-libreBodoni italic text-white/90 max-md:hidden uppercase tracking-wider">60 minutes after presale end</div>
                    <div className="text-[15px] font-libreBodoni italic text-white/90 max-md:hidden uppercase tracking-wider">LISTING PRICE $0.060</div>
                    <div className="md:hidden flex w-full justify-center mt-[200px]">
                        <aa className="content-center active">
                            <button className="!px-[50px] btn max-lg:text-[18px] lg:hidden transition-all ease-linear duration-500 tracking-[3px]" type="button" style={{ backgroundColor: 'rgb(1, 86, 187)' }}>Purchase</button>
                        </aa>
                    </div>
                </div>
                <div style={{ opacity: 1, transform: 'translateX(0%) translateZ(0px)' }}>
                    <div id="tradeForm" className="relative items-stretch w-full lg:max-w-[448px] flex-col z-[20] text-black">
                        <div className="flex items-center h-[58px] bg-black text-white px-6 uppercase text-[28px] font-bold italic max-lg:text-[23px]">
                            <p className="h-[1px] bg-white flex-1"></p>
                            <div className="mx-5">
                                <span>$2,805,316.81</span>&nbsp;Raised
                            </div>
                            <p className="h-[1px] bg-white flex-1"></p>
                        </div>
                        <div className="bg-[#ffffff]/85 max-lg:bg-[#fff]">
                            <div className="flex flex-col justify-between bg-count-down text-white pt-4 pb-6 h-[136px] max-md:h-[116px]">
                                <div className="text-center uppercase font-semibold italic text-[20px] max-md:text-[16px]">
                                    Buy in before price increases!
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-center w-full text-[40px] max-md:text-[35px] leading-none max-lg:mt-2">
                                        <div className="w-1/4 text-center flex justify-center font-libreBodoni">
                                            <div className="flex-grow flex justify-center">
                                                <div className="w-[24px]" style={{ opacity: 1, transform: 'none' }}>0</div>
                                                <div className="w-[24px]" style={{ opacity: 1, transform: 'none' }}>0</div>
                                            </div>
                                            <span className="justify-self-end text-white/35 font-poppins text-sm font-light self-end">/</span>
                                        </div>
                                        <div className="w-1/4 text-center flex justify-center">
                                            <div className="flex-grow font-libreBodoni flex justify-center">
                                                <div className="w-[24px]" style={{ opacity: 1, transform: 'none' }}>1</div>
                                                <div className="w-[24px]" style={{ opacity: 1, transform: 'none' }}>7</div>
                                            </div>
                                            <span className="justify-self-end text-white/35 font-poppins text-sm font-light self-end">/</span>
                                        </div>
                                        <div className="w-1/4 text-center flex justify-center">
                                            <div className="flex-grow font-libreBodoni flex justify-center">
                                                <div className="w-[24px]" style={{ opacity: 1, transform: 'none' }}>4</div>
                                                <div className="w-[24px]" style={{ opacity: 1, transform: 'none' }}>2</div>
                                            </div>
                                            <span className="justify-self-end text-white/35 font-poppins text-sm font-light self-end">/</span>
                                        </div>
                                        <div className="w-1/4 text-center font-libreBodoni flex justify-center">
                                            <div className="w-[24px]" style={{ opacity: 1, transform: 'none' }}>4</div>
                                            <div className="w-[24px]" style={{ opacity: 0, transform: 'translateY(0.219869px) translateZ(0px)' }}>8</div>
                                        </div>
                                    </div>
                                    <div className="flex w-full text-sm font-poppins italic font-light leading-none">
                                        <div className="w-1/4 text-center">DAYS</div>
                                        <div className="w-1/4 text-center">HRS</div>
                                        <div className="w-1/4 text-center">MINS</div>
                                        <div className="w-1/4 text-center">SECS</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-6 max-md:p-5">
                                <div className="flex justify-between items-center w-full text-md max-md:text-[14px] font-ebGaramond">
                                    <div className="opacity-60">
                                        Current Price:<span className="ml-[3px]">$0.0265</span>
                                    </div>
                                    <div>
                                        <span className="opacity-60">Next Stage Price:</span>
                                        <span className="text-[#FF3846] ml-[2px]">$0.0299</span>
                                    </div>
                                </div>
                                <div className="w-full h-[3px] bg-black mt-5 mb-5"></div>
                                <div className="relative">
                                    <p className="text-[18px] max-md:text-[15px] text-left font-ebGaramond">You pay</p>
                                    <div className="flex flex-row flex-1 justify-between items-center my-[6px]">
                                        <div className="self-start">
                                            <input
                                                className="self-start border-0 outline-0 appearance-none bg-transparent font-bold text-[32px] leading-none max-lg:text-[25px] w-[160px] max-md:w-[130px] align-middle border-none outline-none"
                                                type="number"
                                                placeholder="0"
                                                inputMode="decimal"
                                            />
                                            <div className="text-[13px] absolute leading-[16px] text-[#14151A]/80"></div>
                                        </div>
                                        <div className="flex justify-end flex-1 max-w-[50%] max-md:max-w-[45%]">
                                            <button className="h-[40px] flex-center whitespace-normal py-[10px] px-2 border-[2px] border-black rounded font-bold hover:border-primary hover:text-primary transition-all duration-200">
                                                <span className="text-[15px] max-md:text-[12px] leading-none uppercase">Select payment</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-chevron-down ml-1 mr-[-5px] min-w-[14px] max-md:w-[10px]"
                                                >
                                                    <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                            </button>
                                            <div id="headlessui-portal-root" className='hidden'>
                                                <div data-headlessui-portal="">
                                                    <button type="button" data-headlessui-focus-guard="true" aria-hidden="true" style={{ position: 'fixed', top: '1px', left: '1px', width: '1px', height: '0px', padding: '0px', margin: '-1px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap', borderWidth: '0px' }}></button>
                                                    <div>
                                                        <div className="absolute z-1000" id="headlessui-dialog-:rh:" role="dialog" aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-:rj:">
                                                            <div className="fixed inset-0 overflow-y-auto z-[200]">
                                                                <div className="flex min-h-full items-center justify-center md:p-4 p-2 text-center bg-black/50">
                                                                    <div className="md:w-[480px] max-md:w-[94vw] w-[27%] transform overflow-hidden bg-white border-black p-8 max-md:p-[12px] align-middle shadow-xl transition-all z-20 border" id="headlessui-dialog-panel-:ri:" data-headlessui-state="open">
                                                                        <h3 className="flex flex-row justify-between items-center" id="headlessui-dialog-title-:rj:" data-headlessui-state="open">
                                                                            <span className="text-[20px] max-md:text-[15px] font-libreBodoni uppercase">Select payment method</span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-[24px] h-[24px] hover:opacity-60 hover:cursor-pointer">
                                                                                <path d="M18 6 6 18"></path>
                                                                                <path d="m6 6 12 12"></path>
                                                                            </svg>
                                                                        </h3>
                                                                        <div className="flex items-center gap-1 w-full mb-[10px] lg:mt-8 mt-4">
                                                                            <div className="flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all bg-black">
                                                                                <img alt="icon" fetchPriority="high" width="24" height="24" decoding="async" className="max-md:w-[18px] max-md:h-[18px]" src={ethWhite} style={{ color: 'transparent' }} />
                                                                                <div className="text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 text-[#fff]">ETH</div>
                                                                            </div>
                                                                            <div className="flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all bg-white hover:border-black">
                                                                                <img alt="icon" fetchPriority="high" width="24" height="24" decoding="async" className="max-md:w-[18px] max-md:h-[18px]" src={bscOrg} style={{ color: 'transparent' }} />
                                                                                <div className="text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 text-[#000]">BNB</div>
                                                                            </div>
                                                                            <div className="flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all bg-white hover:border-black">
                                                                                <img alt="icon" fetchPriority="high" width="24" height="24" decoding="async" className="max-md:w-[18px] max-md:h-[18px]" src={solColor} style={{ color: 'transparent' }} />
                                                                                <div className="text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 text-[#000]">SOL</div>
                                                                            </div>
                                                                            <div className="flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all bg-white hover:border-black">
                                                                                <img alt="icon" fetchPriority="high" width="24" height="24" decoding="async" className="max-md:w-[18px] max-md:h-[18px]" src={cardGreen} style={{ color: 'transparent' }} />
                                                                                <div className="text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 text-[#000]">CARD</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-center mt-5 lg:mb-4">
                                                                            <div className="flex-1 flex h-[1px] bg-[#999]"></div>
                                                                            <div className="font-ebGaramond italic text-[18px] mx-2">Ethereum Mainnet</div>
                                                                            <div className="flex-1 flex h-[1px] bg-[#999]"></div>
                                                                        </div>
                                                                        <div className="flex flex-col gap-[16px]">
                                                                            <div>
                                                                                <div>
                                                                                    <div className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                                                        <div className="w-[36px] h-[36px] relative">
                                                                                            <img alt="icon" fetchPriority="high" width="36" height="36" decoding="async" src={ethereum} style={{ color: 'transparent' }} />
                                                                                            <img alt="icon" fetchPriority="high" width="16" height="16" decoding="async" className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover" src={ethWhite} style={{ color: 'transparent' }} />
                                                                                        </div>
                                                                                        <div className="flex items-center justify-between flex-1">
                                                                                            <div className="flex items-center gap-2">
                                                                                                <div className="font-bold font-libreBodoni text-xl">ETH</div>
                                                                                                <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">Ethereum</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                                                        <div className="w-[36px] h-[36px] relative">
                                                                                            <img alt="icon" fetchPriority="high" width="36" height="36" decoding="async" src={usdt} style={{ color: 'transparent' }} />
                                                                                            <img alt="icon" fetchPriority="high" width="16" height="16" decoding="async" className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover" src={ethWhite} style={{ color: 'transparent' }} />
                                                                                        </div>
                                                                                        <div className="flex items-center justify-between flex-1">
                                                                                            <div className="flex items-center gap-2">
                                                                                                <div className="font-bold font-libreBodoni text-xl">USDT</div>
                                                                                                <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">Tether USD</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                                                        <div className="w-[36px] h-[36px] relative">
                                                                                            <img alt="icon" fetchPriority="high" width="36" height="36" decoding="async" src={usdc} style={{ color: 'transparent' }} />
                                                                                            <img alt="icon" fetchPriority="high" width="16" height="16" decoding="async" className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover" src={ethWhite} style={{ color: 'transparent' }} />
                                                                                        </div>
                                                                                        <div className="flex items-center justify-between flex-1">
                                                                                            <div className="flex items-center gap-2">
                                                                                                <div className="font-bold font-libreBodoni text-xl">USDC</div>
                                                                                                <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">USD Coin</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mt-6 md:mt-10">
                                                                            <div className="h-[1px] bg-[#e5e5e5] w-full"></div>
                                                                        </div>
                                                                        <div className="flex items-center gap-2 w-full mt-8">
                                                                            <div className="flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all bg-black">
                                                                                <img alt="icon" fetchPriority="high" width="24" height="24" decoding="async" className="max-md:w-[18px] max-md:h-[18px]" src={ethWhite} style={{ color: 'transparent' }} />
                                                                                <div className="text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 text-[#fff]">ETH</div>
                                                                            </div>
                                                                            <div className="flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all bg-white hover:border-black">
                                                                                <img alt="icon" fetchPriority="high" width="24" height="24" decoding="async" className="max-md:w-[18px] max-md:h-[18px]" src={bscOrg} style={{ color: 'transparent' }} />
                                                                                <div className="text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 text-[#000]">BNB</div>
                                                                            </div>
                                                                            <div className="flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all bg-white hover:border-black">
                                                                                <img alt="icon" fetchPriority="high" width="24" height="24" decoding="async" className="max-md:w-[18px] max-md:h-[18px]" src={solColor} style={{ color: 'transparent' }} />
                                                                                <div className="text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 text-[#000]">SOL</div>
                                                                            </div>
                                                                            <div className="flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all bg-white hover:border-black">
                                                                                <img alt="icon" fetchPriority="high" width="24" height="24" decoding="async" className="max-md:w-[18px] max-md:h-[18px]" src={cardGreen} style={{ color: 'transparent' }} />
                                                                                <div className="text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 text-[#000]">CARD</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" data-headlessui-focus-guard="true" aria-hidden="true" style={{ position: 'fixed', top: '1px', left: '1px', width: '1px', height: '0px', padding: '0px', margin: '-1px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap', borderWidth: '0px' }}></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[3px] bg-black mt-8 mb-4"></div>
                                <div>
                                    <p className="text-[18px] max-md:text-[15px] text-left font-ebGaramond">You receive</p>
                                    <div className="flex flex-row flex-1 justify-between items-center my-[3px]">
                                        <input
                                            className="appearance-none bg-transparent text-[32px] font-bold leading-[32px] max-md:text-[25px] max-md:leading-[28px] w-[70%] border-none outline-none"
                                            type="number"
                                            placeholder="0"
                                            inputMode="numeric"
                                        />
                                        <button className="flex items-center gap-2 hover:bg-black/20 px-2 py-1 transition-all duration-200 rounded-full">
                                            <img
                                                alt="POODLANA"
                                                loading="lazy"
                                                width="32"
                                                height="32"
                                                decoding="async"
                                                data-nimg="1"
                                                className="rounded-full"
                                                style={{ color: 'transparent' }}
                                                src={poodlana}
                                            />
                                            <span className="text-[16px] font-semibold">POODL</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button
                                        onClick={() => setShowModal(!showModal)}
                                        className="flex justify-center items-center h-[58px] outline-none w-full rounded transition-all duration-500 ease-linear text-white text-[21px] max-md:text-[18px] font-semibold uppercase mt-5 hover:opacity-80"
                                        id="headlessui-menu-button-:r0:"
                                        type="button"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        style={style}
                                    >
                                        Connect wallet
                                    </button>
                                    <div className={`${showModal ? 'hidden' : ''} absolute w-full left-[50%] translate-x-[-50%] bottom-[60px]`}
                                        aria-labelledby="headlessui-menu-button-:r5:"
                                        id="headlessui-menu-items-:rc:"
                                        role="menu"
                                        tabIndex="0"
                                        data-headlessui-state="open"
                                    >
                                        <div
                                            className="w-full p-[1px] border border-black bg-white backdrop-blur-[40px] overflow-hidden mt-[14px]"
                                            role="none"
                                        >
                                            <div
                                                className="p-[24px]"
                                                role="none"
                                            >
                                                <h5
                                                    className="font-bold font-libreBodoni text-xl uppercase leading-none"
                                                    role="none"
                                                >
                                                    Connect Wallet
                                                </h5>
                                                <p
                                                    className="w-[60px] h-[0.5px] bg-black my-4"
                                                    role="none"
                                                ></p>
                                                <div
                                                    className="flex flex-row justify-between items-center cursor-pointer hover:text-primary my-6"
                                                    role="none"
                                                >
                                                    <div className="flex flex-col gap-[6px]" role="none">
                                                        <p className="text-[17px] font-bold leading-none" role="none">
                                                            EVM
                                                        </p>
                                                        <span className="font-ebGaramond text-sm font-medium leading-none opacity-60" role="none">
                                                            Ethereum / BNB
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center" role="none">
                                                        <img
                                                            alt="icon"
                                                            loading="lazy"
                                                            width="24"
                                                            height="24"
                                                            decoding="async"
                                                            data-nimg="1"
                                                            className="mr-[-10px]"
                                                            src={eth}
                                                            style={{ color: 'transparent' }}
                                                            role="none"
                                                        />
                                                        <img
                                                            alt="icon"
                                                            loading="lazy"
                                                            width="24"
                                                            height="24"
                                                            decoding="async"
                                                            data-nimg="1"
                                                            className="w-[24px] h-[24px]"
                                                            src={bnb}
                                                            style={{ color: 'transparent' }}
                                                            role="none"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex justify-between items-center cursor-pointer hover:text-primary"
                                                    role="none"
                                                >
                                                    <div className="flex flex-col gap-[6px]" role="none">
                                                        <p className="text-[17px] font-bold leading-none" role="none">
                                                            Solana
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-row gap-[8px] items-center" role="none">
                                                        <img
                                                            alt="icon"
                                                            loading="lazy"
                                                            width="24"
                                                            height="24"
                                                            decoding="async"
                                                            data-nimg="1"
                                                            src={sol}
                                                            style={{ color: 'transparent' }}
                                                            role="none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex flex-col items-center mt-[20px]"><div className="text-[18px] font-poppins font-[700] uppercase tracking-wider mt-[15px] ">FIRST EXCHANGE LISTING:</div><div className="text-[24px] font-libreBodoni italic text-white/80  uppercase tracking-wider">12:00 PM UTC August 16</div><div className="text-[15px] font-libreBodoni italic text-white/80 uppercase tracking-wider">60 minutes after presale end</div><div className="text-[15px] font-libreBodoni italic text-white/80 uppercase tracking-wider">LISTING PRICE $0.060</div></div>
            </div>

        </div >
    );
};

export default Home;
