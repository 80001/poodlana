import React from 'react';
import poodlana from '../../images/poodlana.webp'
import plane from '../../images/plane.svg'

const Home = () => {
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
                                        className="flex justify-center items-center h-[58px] outline-none w-full rounded transition-all duration-500 ease-linear text-white text-[21px] max-md:text-[18px] font-semibold uppercase mt-5 hover:opacity-80"
                                        id="headlessui-menu-button-:r0:"
                                        type="button"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        style={{ backgroundColor: 'rgb(0, 112, 58)' }}
                                    >
                                        Connect wallet
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
