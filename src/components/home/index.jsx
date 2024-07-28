import React, { useContext, useEffect, useRef, useState } from 'react';
import poodlana from '../../images/poodlana.webp'
import plane from '../../images/plane.svg'

import sol from '../../images/sol.svg';
import sol2 from '../../images/sol2.svg';
import bnb from '../../images/bnb-36x36.svg';
import eth from '../../images/eth.svg';
import usd from '../../images/usd.svg';
import usdt from '../../images/usdt.svg';
import usdc from '../../images/usdc-36x36.svg';
import { Context } from '../../context';
import Tmr from './TimeRevork';

const Home = () => {
    const [data, setData] = useState(null)
    const [date, setDate] = useState(null)
    const [style, setStyle] = useState({ backgroundColor: 'rgb(0, 112, 58)' });
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    const modalRef = useRef();
    const modalRef2 = useRef();
    const modalRef3 = useRef();
    const { modalPayment, setModalWallet, setModalPayment, pay } = useContext(Context)

    const modals = [
        { show: showModal, setShow: setShowModal, ref: modalRef },
        { show: showModal2, setShow: setShowModal2, ref: modalRef2 },
        { show: showModal3, setShow: setShowModal3, ref: modalRef3 },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            modals.forEach(({ show, setShow, ref }) => {
                if (ref.current && !ref.current.contains(event.target) && show) {
                    setShow(false);
                }
            });
        };

        const activeModals = modals.filter(({ show }) => show);

        if (activeModals.length > 0) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line
    }, [showModal, showModal2, showModal3]);

    const openModalWallet = (type) => {
        setModalWallet({ status: true, type: type })

        setShowModal3(false)
    }

    const openModalPayment = () => {
        setModalPayment({ ...modalPayment, status: true })

        setShowModal3(false)
    }


    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function fetchDataAndUpdate() {
        const url = "https://corsproxy.io/?" + encodeURIComponent("https://poodlana.com/api/trpc/getState");
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data.result.data)
                setDate(data.result.data.nextIncreaseTime)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    async function translateText(texts, targetLang) {
        const apiKey = "acdc58e4-982c-4baa-b802-c967a607f563";
        const params = new URLSearchParams();
        params.append("auth_key", apiKey);
        texts.forEach((text) => params.append("text", text));
        params.append("target_lang", targetLang);
        params.append("preserve_formatting", true);

        const response = await fetch("https://api.deepl.com/v2/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        });

        const data = await response.json();

        if (data && data.translations) {
            return data.translations.map((translation) => translation.text);
        } else {
            throw new Error("Translation failed");
        }
    }

    async function translateElements(targetLang) {
        const elements = document.querySelectorAll("[translate]");
        const textsToTranslate = [];
        const originalTexts = [];

        for (let element of elements) {
            const originalText = element.getAttribute("data-original-text");
            if (targetLang === "en") {
                // Повертаємо оригінальний текст
                if (originalText) {
                    element.textContent = originalText;
                }
            } else {
                // Зберігаємо оригінальний текст, якщо ще не збережено
                if (!originalText) {
                    element.setAttribute("data-original-text", element.textContent.trim());
                }
                const textToTranslate = element.textContent.trim();
                if (textToTranslate) {
                    originalTexts.push(originalText || textToTranslate);
                    textsToTranslate.push(textToTranslate);
                }
            }
        }

        if (textsToTranslate.length > 0) {
            try {
                const translatedTexts = await translateText(textsToTranslate, targetLang);
                elements.forEach((element, index) => {
                    if (targetLang !== "en") {
                        element.textContent = translatedTexts[index];
                    }
                });
            } catch (error) {
                console.error("Translation error:", error.message);
            }
        }
    }
    // eslint-disable-next-line
    function getValidLanguageCode(code) {
        let returnValue = "en"; // Default value

        if (code === "cz") {
            translateElements("cs");
            returnValue = "cs";
        } else if (code === "kr") {
            translateElements("ko");
            returnValue = "ko";
        } else if (code === "ch") {
            translateElements("zh");
            returnValue = "zh";
        } else {
            translateElements(code);
            // For the default case, `code` is used directly
            returnValue = code;
        }

        // Set cookie with the return value
        document.cookie = `lang=${returnValue}; path=/`;

        return returnValue;
    }
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

        setInterval(fetchDataAndUpdate(), 60000);

        const interval = setInterval(() => {
            setStyle(colors[index]);
            index = (index + 1) % colors.length;
        }, 2000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);



    const scrollToHome = () => {
        const homeElement = document.getElementById('tradeForm');
        const yOffset = homeElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
    };

    return (
        <div id="home" className="overflow-hidden relative z-[5] bg-primary max-lg:bg-black text-white pt-[74px] max-lg:pt-[64px] lg:min-h-[900px] lg:h-[100vh] lg:max-h-[1000px] mt-[-3px]">
            <video className="absolute bottom-0 left-0 w-full h-full object-cover max-lg:h-[720px] max-lg:top-[64px] max-lg:bottom-auto z-[0]" poster="/images/video-poster.jpg" autoPlay loop muted playsInline preload="true">
                <source src="https://cdn.poodlana.org/bck-pc.mp4" type="video/mp4" />
            </video>
            <div className="z-[1] flex max-lg:flex-col layout text-white justify-between mx-auto lg:pt-[70px] pt-[40px] lg:h-full max-lg:pb-[0px] max-lg:relative max-lg:z-[1]">
                <div className="lg:mr-10 lg:flex-1 max-w-[780px] text-left  max-lg:text-center max-lg:h-[680px]" style={{ opacity: 1, transform: 'translateX(0%) translateZ(0px)' }}>
                    <p className="font-ebGaramond text-[48px] italic font-medium max-lg:text-[24px] max-lg:leading-8">Invest in Glamour, Invest in Poodlana</p>
                    <h4 className="text-[96px] font-bold uppercase leading-none  mt-3 max-lg:text-[52px] md:text-center">The Hermès of Crypto</h4>
                    <div className="flex mt-6 max-lg:justify-center">
                        <span className="!px-[30px] tracking-wider btn max-lg:hidden" href="https://t.me/poodlana" target="_blank" rel="noopener noreferrer">
                            <img alt="wallet" loading="lazy" width="19" height="16" decoding="async" className="mr-2 max-lg:hidden" style={{ color: 'transparent' }}
                                src={plane} />
                            Join community
                        </span>
                    </div>
                    <div className="text-[18px] font-poppins font-[700] uppercase  tracking-wider mt-[30px] max-md:mt-[-15px] md:text-center">PRESALE ENDS IN:</div>
                    <div className="mt-[10px] max-md:mt-[0px] w-full max-md:flex max-md:justify-center">
                        <Tmr targetTime={new Date('2024-08-16 14:00:00').getTime()} x={true} />
                    </div>
                    <div className="text-[18px] font-poppins font-[700] uppercase  tracking-wider mt-[15px] max-md:hidden">FIRST EXCHANGE LISTING:</div>
                    <div className="text-[24px] font-libreBodoni italic text-white/90 max-md:hidden uppercase tracking-wider">12:00 PM UTC August 16</div>
                    <div className="text-[15px] font-libreBodoni italic text-white/90 max-md:hidden uppercase tracking-wider">60 minutes after presale end</div>
                    <div className="text-[15px] font-libreBodoni italic text-white/90 max-md:hidden uppercase tracking-wider">LISTING PRICE $0.060</div>
                    <div className="md:hidden flex w-full justify-center mt-[200px]">
                        <span className="content-center active">
                            <button onClick={scrollToHome} className="!px-[50px] btn max-lg:text-[18px] lg:hidden transition-all ease-linear duration-500 tracking-[3px]" type="button" style={style}>Purchase</button>
                        </span>
                    </div>
                </div>
                <div style={{ opacity: 1, transform: 'translateX(0%) translateZ(0px)' }}>
                    <div id="tradeForm" className="relative items-stretch w-full lg:max-w-[448px] flex-col z-[20] text-black">
                        <div className="flex items-center h-[58px] bg-black text-white px-6 uppercase text-[28px] font-bold italic max-lg:text-[23px]">
                            <p className="h-[1px] bg-white flex-1">

                            </p>
                            <div className="mx-5">
                                <span>${data ? formatNumberWithCommas(data.totalSoldUSD) : '$2, 930, 667.52'}</span>&nbsp;Raised
                            </div>
                            <p className="h-[1px] bg-white flex-1">

                            </p>
                        </div>
                        <div className="bg-[#ffffff]/85 max-lg:bg-[#fff]">
                            <div className="flex flex-col justify-between bg-count-down text-white pt-4 pb-6 h-[136px] max-md:h-[116px]">
                                <div className="text-center uppercase font-semibold italic text-[20px] max-md:text-[16px]">
                                    Buy in before price increases!
                                </div>
                                {date && <Tmr targetTime={new Date(date).getTime()} />}
                            </div>
                            <div className="flex flex-col p-6 max-md:p-5">
                                <div className="flex justify-between items-center w-full text-md max-md:text-[14px] font-ebGaramond">
                                    <div className="opacity-60">
                                        Current Price:<span className="ml-[3px]">{data && formatNumberWithCommas(data.currentPrice)}</span>
                                    </div>
                                    <div>
                                        <span className="opacity-60">Next Stage Price:</span>
                                        <span className="text-[#FF3846] ml-[2px]">{data && formatNumberWithCommas(data.nextPrice)}</span>
                                    </div>
                                </div>
                                <div className="w-full h-[3px] bg-black mt-5 mb-5">

                                </div>
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
                                            <div className="text-[13px] absolute leading-[16px] text-[#14151A]/80">
                                            </div>
                                        </div>
                                        <div className="flex justify-end flex-1 max-w-[50%] max-md:max-w-[45%]">
                                            {(modalPayment.type === null) && (
                                                <button onClick={openModalPayment} className="h-[40px] flex-center whitespace-normal py-[10px] px-2 border-[2px] border-black rounded font-bold hover:border-primary hover:text-primary transition-all duration-200">
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
                                                        <path d="m6 9 6 6 6-6">

                                                        </path>
                                                    </svg>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'ETH' && modalPayment.chain === "Ethereum") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={eth} style={{ color: 'transparent' }}>
                                                        </img>
                                                        <div className="absolute bottom-[2px] right-[2px] h-[21px] w-[21px] rounded-full ">
                                                            <img alt="icon" fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" className="absolute  inset-0 h-[20px] w-[20px] rounded-full items-center left-[1px] top-[1px] border border-white"
                                                                src={eth} style={{ color: 'transparent' }}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">ETH</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">Ethereum</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'ETH' && modalPayment.chain === "Tether USD") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={usdt} style={{ color: 'transparent' }}>
                                                        </img>
                                                        <div className="absolute bottom-[2px] right-[2px] h-[21px] w-[21px] rounded-full ">
                                                            <img alt="icon" fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" className="absolute  inset-0 h-[20px] w-[20px] rounded-full items-center left-[1px] top-[1px] border border-white"
                                                                src={eth} style={{ color: 'transparent' }}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">USDT</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">Ethereum</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'ETH' && modalPayment.chain === "USD Coin") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={usdc} style={{ color: 'transparent' }}>
                                                        </img>
                                                        <div className="absolute bottom-[2px] right-[2px] h-[21px] w-[21px] rounded-full ">
                                                            <img alt="icon" fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" className="absolute  inset-0 h-[20px] w-[20px] rounded-full items-center left-[1px] top-[1px] border border-white"
                                                                src={eth} style={{ color: 'transparent' }}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">USDC</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">Ethereum</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'BNB' && modalPayment.chain === "BNB") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={bnb} style={{ color: 'transparent' }}>
                                                        </img>
                                                        <div className="absolute bottom-[2px] right-[2px] h-[21px] w-[21px] rounded-full ">
                                                            <img alt="icon" fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" className="absolute  inset-0 h-[20px] w-[20px] rounded-full items-center left-[1px] top-[1px] border border-white"
                                                                src={bnb} style={{ color: 'transparent' }}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">BNB</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">BNB</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'BNB' && modalPayment.chain === "Tether USD") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={usdt} style={{ color: 'transparent' }}>
                                                        </img>
                                                        <div className="absolute bottom-[2px] right-[2px] h-[21px] w-[21px] rounded-full ">
                                                            <img alt="icon" fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" className="absolute  inset-0 h-[20px] w-[20px] rounded-full items-center left-[1px] top-[1px] border border-white"
                                                                src={bnb} style={{ color: 'transparent' }}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">USDT</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">Binance</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'BNB' && modalPayment.chain === "USD Coin") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={usdc} style={{ color: 'transparent' }}>
                                                        </img>
                                                        <div className="absolute bottom-[2px] right-[2px] h-[21px] w-[21px] rounded-full ">
                                                            <img alt="icon" fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" className="absolute  inset-0 h-[20px] w-[20px] rounded-full items-center left-[1px] top-[1px] border border-white"
                                                                src={bnb} style={{ color: 'transparent' }}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">USDC</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">Binance</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'SOL' && modalPayment.chain === "Solana") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={sol} style={{ color: 'transparent' }}>
                                                        </img>
                                                        <div className="absolute bottom-[2px] right-[2px] h-[21px] w-[21px] rounded-full ">
                                                            <img alt="icon" fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" className="absolute  inset-0 h-[20px] w-[20px] rounded-full items-center left-[1px] top-[1px] border border-white"
                                                                src={sol2} style={{ color: 'transparent' }}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">SOL</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">Solana</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'SOL' && modalPayment.chain === "Tether USD") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={usdt} style={{ color: 'transparent' }}>
                                                        </img>
                                                        <div className="absolute bottom-[2px] right-[2px] h-[21px] w-[21px] rounded-full ">
                                                            <img alt="icon" fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" className="absolute  inset-0 h-[20px] w-[20px] rounded-full items-center left-[1px] top-[1px] border border-white"
                                                                src={sol2} style={{ color: 'transparent' }}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">USDT</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">Solana</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'SOL' && modalPayment.chain === "USD Coin") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={usdc} style={{ color: 'transparent' }}>
                                                        </img>
                                                        <div className="absolute bottom-[2px] right-[2px] h-[21px] w-[21px] rounded-full ">
                                                            <img alt="icon" fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" className="absolute  inset-0 h-[20px] w-[20px] rounded-full items-center left-[1px] top-[1px] border border-white"
                                                                src={sol2} style={{ color: 'transparent' }}>
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">USDC</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">Solana</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}
                                            {(modalPayment.type === 'USD' && modalPayment.chain === "US Dolar") && (
                                                <button onClick={openModalPayment} className="pt-[4px] py-[3px] px-[10px] border-[2px] border-black bg-[#fff] rounded flex flex-row items-center gap-[4px] hover:bg-[#000000]/10 transition-all duration-200">
                                                    <div className="w-[34px] h-[36px] relative">
                                                        <img alt="icon" fetchpriority="high" width="32" height="32" decoding="async" data-nimg="1"
                                                            src={usd} style={{ color: 'transparent' }}>
                                                        </img>

                                                    </div>
                                                    <div className=" flex flew-center h-full">
                                                        <div className="flex flex-col items-start">
                                                            <div className="text-[17px] max-md:text-[14px] font-bold leading-[17px] tracking-[-0.408px] text-black">USD</div>
                                                            <div className="text-[13px] max-md:text-[10px] leading-[17px] tracking-[-0.408px] text-black ">US Dolar</div>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-2 mr-0 mt-[5px] min-w-[14px]">
                                                            <path d="m6 9 6 6 6-6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            )}

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[3px] bg-black mt-8 mb-4">

                                </div>
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
                                    {!pay &&
                                        <div ref={modalRef} className={`${showModal ? '' : 'hidden'} absolute w-full left-[50%] translate-x-[-50%] bottom-[60px]`}
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
                                                    >

                                                    </p>
                                                    <div onClick={() => openModalWallet('evm')}
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
                                                    <div onClick={() => openModalWallet('sol')}
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
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex flex-col items-center mt-[20px]">
                    <div className="text-[18px] font-poppins font-[700] uppercase tracking-wider mt-[15px] ">FIRST EXCHANGE LISTING:</div>
                    <div className="text-[24px] font-libreBodoni italic text-white/80  uppercase tracking-wider">12:00 PM UTC August 16</div>
                    <div className="text-[15px] font-libreBodoni italic text-white/80 uppercase tracking-wider">60 minutes after presale end</div>
                    <div className="text-[15px] font-libreBodoni italic text-white/80 uppercase tracking-wider">LISTING PRICE $0.060</div>
                </div>
            </div>

        </div >
    );
};

export default Home;
