import React, { useEffect, useRef, useState } from 'react';
import us from '../../images/flags/us.webp';
import cz from '../../images/flags/chinese.svg';
import de from '../../images/flags/deutsch.svg';
import ro from '../../images/flags/romanian.webp';
import vt from '../../images/flags/vt.webp';
import nl from '../../images/flags/nederlands.svg';
import ko from '../../images/flags/korean.svg';
import thai from '../../images/flags/thai.svg';
import jp from '../../images/flags/japanese.svg';
import fr from '../../images/flags/france.svg';
import es from '../../images/flags/spain.svg';
import pl from '../../images/flags/polish.svg';
import sk from '../../images/flags/sk.webp';
import pt from '../../images/flags/pt.webp';
import tr from '../../images/flags/turk.svg';
import logo from '../../images/2.svg';
import check from '../../images/check.svg';
import wallet from '../../images/wallet.svg';
import sol from '../../images/sol.svg';
import bnb from '../../images/bnb-36x36.svg';
import eth from '../../images/eth.svg';

const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const [showModalWallet, setShowModalWallet] = useState(false)
    const [showModals, setShowModals] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModals2, setShowModals2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    const [showModals3, setShowModals3] = useState(false)
    const modalRef = useRef();
    const modalRef2 = useRef();
    const modalRef3 = useRef();



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                if (showModals) {

                    setShowModal(false)
                    setShowModals(false)
                } else {

                    setShowModals(true)
                }
            }
            else {

                setShowModals(true)
            }
        };

        if (showModal) {


            if (showModals) {

                document.addEventListener('mousedown', handleClickOutside);
            } else {
                setShowModals(true)
            }
        } else {
            if (modalRef.current) {

                document.removeEventListener('mousedown', handleClickOutside);
                if (setShowModals) {

                    setShowModals(false)
                }
            }
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal, showModals]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef2.current && !modalRef2.current.contains(event.target)) {
                if (showModals2) {

                    setShowModal2(false)
                    setShowModals2(false)
                } else {


                    setShowModals2(true)
                }
            }
            else {


                setShowModals2(true)
            }
        };

        if (showModal2) {


            if (showModals2) {

                document.addEventListener('mousedown', handleClickOutside);
            } else {
                setShowModals2(true)
            }
        } else {
            if (modalRef2.current) {

                document.removeEventListener('mousedown', handleClickOutside);
                if (setShowModals2) {

                    setShowModals2(false)
                }
            }
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal2, showModals2]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef3.current && !modalRef3.current.contains(event.target)) {
                if (showModals3) {

                    setShowModal3(false)
                    setShowModals3(false)
                } else {


                    setShowModals3(true)
                }
            }
            else {


                setShowModals3(true)
            }
        };

        if (showModal3) {


            if (showModals3) {

                document.addEventListener('mousedown', handleClickOutside);
            } else {
                setShowModals3(true)
            }
        } else {
            if (modalRef3.current) {

                document.removeEventListener('mousedown', handleClickOutside);
                if (setShowModals3) {

                    setShowModals3(false)
                }
            }
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal3, showModals3]);


    const openModalWallet = (type) => {
        console.log(type)
    }

    return (
        <div className="h-[72px] justify-center items-center flex w-[100vw] flex-col px-8 py-4 max-lg:max-w-full backdrop-blur-lg top-0 left-0 z-[100] fixed max-lg:bg-white max-lg:h-[64px] max-lg:px-4">
            <div className="flex w-full h-full justify-between items-center max-lg:justify-start" style={{ opacity: 1, transform: 'translateY(0px) translateZ(0px)' }}>
                <button id="mobile-menu-button" className="focus:outline-none lg:hidden -ml-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" fill="none">
                        <rect x="8" y="12.5" width="16" height="2" rx="1" fill="black"></rect>
                        <rect x="8" y="20.5" width="16" height="2" rx="1" fill="black"></rect>
                    </svg>
                </button>
                <a href='/' className="cursor-pointer flex items-center flex-1 mr-4 lg:hidden active">
                    <img src={logo} alt="" className='md:logo' style={{ width: 274, height: 26 }} />
                </a>
                <div className="w-[200px] max-lg:hidden">
                    <div className="relative">
                        <button onClick={() => setShowModal(!showModal)} className="flex items-center h-[42px] transition-all duration-200 hover:text-primary max-lg:hidden" id="headlessui-menu-button-:R5p6haj6:" type="button" aria-haspopup="menu" aria-expanded="false">
                            <img alt="flag" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="overflow-hidden min-w-[18px] mr-2" style={{ color: 'transparent' }} src={us} />
                            English
                        </button>
                        <div ref={modalRef} className={`${showModal ? '' : 'hidden'} absolute left-0 max-lg:left-[-50%] max-lg:translate-x-[-50%] mt-2 w-[225px] divide-gray-100 bg-white border border-black`} aria-labelledby="headlessui-menu-button-:R5p6haj6:" id="headlessui-menu-items-:r2:" role="menu" tabIndex="0" data-headlessui-state="open">
                            <div className="py-[5px] px-1 flex flex-col gap-[10px]" role="none">
                                <div onClick={() => { console.log('eng'); setShowModal(!showModal) }} className="flex flex-row gap-[4px] bg-black text-white  hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="en" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={us} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">English</span>
                                    </div>
                                    <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} role="none" />
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="zh" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={cz} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">中文(简体)</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="de" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={de} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Deutsch</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="nl" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={nl} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Nederlands</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="ja" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={jp} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">日本語</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="ko" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={ko} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">한국어</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="fr" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={fr} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Français</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="es" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={es} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Español</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="ru" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={pl} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Polski</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="it" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={ro} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Română</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="vi" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={vt} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Tiếng Việt</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="el" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={sk} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Slovaški</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="pt" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={pt} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Português</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="hu" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={tr} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">Türkiye</span>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className="flex flex-row gap-[4px] hover:bg-[#f4f4f4] hover:cursor-pointer px-2 justify-between" role="none">
                                    <div className="hover:bg-[#f4f4f4] flex flex-row items-center gap-1" role="none">
                                        <img alt="th" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={thai} style={{ color: "transparent" }} role="none" />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" role="none">แบบไทย</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-[45px] max-lg:justify-center text-black text-[13px] max-lg:hidden">
                    <div className="relative">
                        <button onClick={() => setShowModal2(!showModal2)} className="align-top text-center grow whitespace-nowrap hover:cursor-pointer hover:text-primary text-opacity-60" id="headlessui-menu-button-:R1696haj6:" type="button" aria-haspopup="menu" aria-expanded="false">
                            About
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down align-middle h-4 w-4 transition-transform duration-200 inline ml-[4px]">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        <div className={`${showModal2 ? '' : 'hidden'} absolute left-0 mt-2 w-[240px] bg-white border border-black`} aria-labelledby="headlessui-menu-button-:R1696haj6:" id="headlessui-menu-items-:r6:" role="menu" tabIndex="0" data-headlessui-state="open">
                            <div className="px-2 py-3" role="none" ref={modalRef2} >
                                <div id="headlessui-menu-item-:r7:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#about' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">About</div></div></a></div>
                                <div className="" id="headlessui-menu-item-:r8:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#look' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">Look Book</div></div></a></div>
                                <div className="" id="headlessui-menu-item-:r9:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#runway' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">The Runway</div></div></a></div>
                                <div className="" id="headlessui-menu-item-:ra:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#fashion' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">Fashionomics</div></div></a></div>
                                <div className="" id="headlessui-menu-item-:rb:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#faq' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">FAQ</div></div></a></div></div></div>
                    </div>
                    <div className="relative">
                        <button className="align-top text-center leading-5 grow whitespace-nowrap hover:cursor-pointer hover:text-primary text-opacity-60" id="headlessui-menu-button-:R1a96haj6:" type="button" aria-haspopup="menu" aria-expanded="false">
                            Socials
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down align-middle h-4 w-4 transition-transform duration-200 inline ml-[4px]">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        <div className="absolute hidden left-0 mt-2 w-[240px] border border-black bg-white" aria-labelledby="headlessui-menu-button-:R1a96haj6:" id="headlessui-menu-items-:rc:" role="menu" tabIndex="0" data-headlessui-state="open"><div className="px-2 py-3" role="none"><aa className="flex w-full items-center px-2 cursor-pointer gap-3" href="https://x.com/Poodlana" target="_blank" id="headlessui-menu-item-:rd:" role="menuitem" tabIndex="-1" data-headlessui-state=""><p className="w-[20px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-[20px] h-[20px]"><path fill="black" d="M13.3322 10.9283L18.5432 5H17.3082L12.7825 10.1471L9.16905 5H5L10.4659 12.784L5 19H6.23495L11.0141 13.5645L14.8309 19H19L13.3322 10.9283ZM11.6404 12.8519L11.0863 12.077L6.68 5.91H8.57737L12.1334 10.887L12.6867 11.6619L17.3089 18.1313H15.4123L11.6397 12.8526L11.6404 12.8519Z"></path></svg></p><span className="font-libreBodoni text-[18px] font-bold leading-[44px]">X</span></aa><aa className="flex w-full items-center px-2 cursor-pointer gap-3" href="https://linktr.ee/Poodlana" target="_blank" id="headlessui-menu-item-:re:" role="menuitem" tabIndex="-1" data-headlessui-state=""><p className="w-[20px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-[20px] h-[20px]"><path fill="black" d="M10.7502 14.7744H13.2376V20H10.7502V14.7744ZM5 9.41836H9.2325L6.22361 6.7496L7.88853 5.15706L10.757 7.90044V4H13.2443V7.90044L16.1127 5.1633L17.7763 6.7496L14.7688 9.41211H19V11.6143H14.7447L17.7724 14.3514L16.1127 15.9067L12.0006 12.0622L7.88853 15.9067L6.22361 14.3577L9.25251 11.6205H5V9.41836Z"></path></svg></p><span className="font-libreBodoni text-[18px] font-bold leading-[44px]">LinkTree</span></aa><aa className="flex w-full items-center px-2 cursor-pointer gap-3" href="https://t.me/poodlana" target="_blank" id="headlessui-menu-item-:rf:" role="menuitem" tabIndex="-1" data-headlessui-state=""><p className="w-[20px]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className=" w-[20px] h-[20px]"><path fillRule="evenodd" clipRule="evenodd" fill="black" d="M3.52703 8.60679C7.55273 6.77797 10.2327 5.56276 11.5784 4.97321C15.4086 3.30079 16.2137 3.01203 16.7313 3C16.8464 3 17.0994 3.02406 17.2719 3.16844C17.41 3.28876 17.4445 3.44518 17.4675 3.56549C17.4905 3.68581 17.5135 3.93848 17.4905 4.13098C17.2834 6.41702 16.3863 11.9636 15.9262 14.5144C15.7307 15.5972 15.3511 15.9582 14.983 15.9943C14.1779 16.0665 13.5683 15.4408 12.7977 14.9114C11.5784 14.0812 10.8998 13.5639 9.71511 12.7457C8.34637 11.8072 9.23203 11.2899 10.0142 10.4477C10.2212 10.2311 13.7523 6.86219 13.8213 6.5614C13.8328 6.5253 13.8328 6.38092 13.7523 6.30873C13.6718 6.23654 13.5568 6.2606 13.4648 6.28467C13.3382 6.30873 11.4059 7.65629 7.64475 10.3153C7.09265 10.7123 6.59807 10.9049 6.14949 10.8928C5.6549 10.8808 4.71174 10.6041 3.99861 10.3634C3.13596 10.0747 2.44584 9.91825 2.50335 9.41292C2.53786 9.14822 2.88292 8.88352 3.52703 8.60679Z"></path></svg></p><span className="font-libreBodoni text-[18px] font-bold leading-[44px]">Telegram</span></aa><aa className="flex w-full items-center px-2 cursor-pointer gap-3" href="https://www.reddit.com/r/Poodlana/" target="_blank" id="headlessui-menu-item-:rg:" role="menuitem" tabIndex="-1" data-headlessui-state=""><p className="w-[20px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none" className="  w-[20px] h-[20px]"><path fill="black" d="M18 7.32648C18 6.23393 17.1013 5.34704 16.01 5.34704C15.4708 5.34704 14.9957 5.56555 14.6362 5.89974C13.2753 5 11.4522 4.43445 9.41084 4.37018L10.515 0.874036L13.5193 1.58098V1.61954C13.5193 2.51928 14.2511 3.23907 15.1498 3.23907C16.0485 3.23907 16.7803 2.50643 16.7803 1.61954C16.7803 0.732648 16.0485 0 15.1498 0C14.4565 0 13.8787 0.424165 13.6348 1.02828L10.3866 0.269923C10.2454 0.231362 10.1041 0.321337 10.0528 0.462725L8.80742 4.37018C6.67618 4.39589 4.7632 4.97429 3.33809 5.88689C2.9786 5.5527 2.5164 5.3599 1.99001 5.3599C0.898716 5.3599 0 6.24679 0 7.33933C0 8.07198 0.398003 8.7018 0.988588 9.03599C0.950071 9.24164 0.924394 9.46015 0.924394 9.67866C0.924394 12.6093 4.51926 15 8.94864 15C13.378 15 16.9729 12.6093 16.9729 9.67866C16.9729 9.47301 16.9472 9.26735 16.9215 9.07455C17.5506 8.74036 17.9743 8.08483 17.9743 7.33933L18 7.32648ZM5.097 8.68895C5.097 8.03342 5.62339 7.50643 6.27817 7.50643C6.93295 7.50643 7.45934 8.03342 7.45934 8.68895C7.45934 9.34447 6.93295 9.87146 6.27817 9.87146C5.62339 9.87146 5.097 9.34447 5.097 8.68895ZM11.8759 12.1851C11.2853 12.7763 10.3481 13.072 9.01284 13.072C7.6776 13.072 6.74037 12.7892 6.14979 12.1851C6.03424 12.0823 6.03424 11.9023 6.14979 11.7995C6.2525 11.6967 6.43224 11.6967 6.54779 11.7995C7.03566 12.2879 7.84451 12.5193 9.01284 12.5193C10.1812 12.5193 10.99 12.2879 11.4779 11.7995C11.5806 11.6967 11.7603 11.6967 11.8759 11.7995C11.9914 11.9023 11.9914 12.0823 11.8759 12.1979V12.1851ZM11.7347 9.87146C11.0799 9.87146 10.5535 9.34447 10.5535 8.68895C10.5535 8.03342 11.0799 7.50643 11.7347 7.50643C12.3894 7.50643 12.9158 8.03342 12.9158 8.68895C12.9158 9.34447 12.3894 9.87146 11.7347 9.87146Z"></path></svg></p><span className="font-libreBodoni text-[18px] font-bold leading-[44px]">Reddit</span></aa><aa className="flex w-full items-center px-2 cursor-pointer gap-3" href="https://www.youtube.com/@Poodlana" target="_blank" id="headlessui-menu-item-:rh:" role="menuitem" tabIndex="-1" data-headlessui-state=""><p className="w-[20px]"><aa className=" w-[20px] h-[20px]" href="https://www.youtube.com/@Poodlana" target="_blank"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="black" d="M17.3848 2.7832C17.1836 2.0293 16.5898 1.43555 15.8379 1.23438C14.4727 0.867188 9 0.867188 9 0.867188C9 0.867188 3.52734 0.867187 2.16211 1.23242C1.4082 1.43359 0.816406 2.02734 0.615234 2.78125C0.25 4.14844 0.25 7 0.25 7C0.25 7 0.25 9.85156 0.615234 11.2168C0.816406 11.9707 1.41016 12.5645 2.16211 12.7656C3.52734 13.1328 9 13.1328 9 13.1328C9 13.1328 14.4727 13.1328 15.8379 12.7656C16.5918 12.5645 17.1836 11.9707 17.3848 11.2168C17.75 9.85156 17.75 7 17.75 7C17.75 7 17.75 4.14844 17.3848 2.7832ZM7.26172 9.61719V4.38281L11.793 6.98047L7.26172 9.61719Z"></path></svg></aa></p><span className="font-libreBodoni text-[18px] font-bold leading-[44px]">Youtube</span></aa></div></div>
                    </div>
                    <a className="cursor-pointer flex items-center pb-2" href="/">
                        <img src={logo} alt="" /></a>
                    <aa href="#whitepaper" className="hover:text-gray-600 hover:cursor-pointer">Whitepaper</aa>
                    <aa href="#competition" className="hover:text-gray-600 hover:cursor-pointer">Competition</aa>
                </div>
                <div className="lg:w-[200px] flex justify-end"><div className="relative">
                    <button onClick={() => setShowModal3(!showModal3)} className="flex-center overflow-hidden px-4 md:px-4 bg-black hover:bg-black/80 cursor-pointer rounded text-[13px] font-semibold uppercase text-white transition-all duration-200 h-[40px] lg:max-w-[240px]" id="headlessui-menu-button-:r0:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" aria-controls="headlessui-menu-items-:r2:">
                        <img alt="wallet" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="mr-2" src={wallet} style={{ color: 'transparent' }}></img>Connect Wallet</button>

                    <div ref={modalRef3}
                        className={`${showModal3 ? '' : 'hidden'} absolute right-0 lg:min-w-[375px] max-lg:fixed max-lg:w-full max-lg:flex max-lg:justify-center`}
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
                                    onClick={() => console.log('xx')}
                                    className="font-bold font-libreBodoni text-xl uppercase leading-none"
                                    role="none"
                                >
                                    Connect Wallet
                                </h5>
                                <p
                                    className="w-[60px] h-[0.5px] bg-black my-4"
                                    role="none"
                                ></p>
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
                </div></div>
            </div>
        </div >
    );
}

export default Header;
