import React, { useContext, useEffect, useRef, useState } from 'react';
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
import { Context } from '../../context';
import Language from './Lang';
const languages = [
    { code: 'en', name: 'English', image: us },
    { code: 'zh', name: '中文(简体)', image: cz },
    { code: 'de', name: 'Deutsch', image: de },
    { code: 'nl', name: 'Nederlands', image: nl },
    { code: 'ja', name: '日本語', image: jp },
    { code: 'ko', name: '한국어', image: ko },
    { code: 'fr', name: 'Français', image: fr },
    { code: 'es', name: 'Español', image: es },
    { code: 'pl', name: 'Polski', image: pl },
    { code: 'ro', name: 'Română', image: ro },
    { code: 'vn', name: 'Tiếng Việt', image: vt },
    { code: 'sk', name: 'Slovaški', image: sk },
    { code: 'pt', name: 'Português', image: pt },
    { code: 'tr', name: 'Türkiye', image: tr },
    { code: 'th', name: 'แบบไทย', image: thai },
];
const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const style = { height: window.innerHeight - 50 || 1024 }
    const [showBurgerModal, setShowBurgerModal] = useState(false)
    const [showBurgerModalLinks, setShowBurgerModalLinks] = useState(false)
    const [showBurgerModalLang, setShowBurgerModalLang] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    const modalRef = useRef();
    const modalRef2 = useRef();
    const modalRef3 = useRef();
    const { setModalWallet } = useContext(Context)
    const [lang, setLang] = useState('en')
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


    const buttonProps = {
        className: "flex items-center h-[42px] transition-all duration-200 hover:text-primary max-lg:hidden",
        id: "headlessui-menu-button-:R5p6haj6:",
        type: "button",
        'aria-haspopup': "menu",
        'aria-expanded': showModal,
    };
    return (<>

        <div className="h-[72px] justify-center items-center flex w-[100vw] flex-col px-8 py-4 max-lg:max-w-full backdrop-blur-lg top-0 left-0 z-[100] fixed max-lg:bg-white max-lg:h-[64px] max-lg:px-4">
            <div className="flex w-full h-full justify-between items-center max-lg:justify-start" style={{ opacity: 1, transform: 'translateY(0px) translateZ(0px)' }}>
                <button onClick={() => setShowBurgerModal(true)} id="mobile-menu-button" className="focus:outline-none lg:hidden -ml-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" fill="none">
                        <rect x="8" y="12.5" width="16" height="2" rx="1" fill="black">

                        </rect>
                        <rect x="8" y="20.5" width="16" height="2" rx="1" fill="black">

                        </rect>
                    </svg>
                </button>
                <a href='/' className="cursor-pointer flex items-center flex-1 mr-4 lg:hidden active">
                    <img src={logo} alt="" className='md:logo' style={{ width: 274, height: 26 }} />
                </a>
                <div className="w-[200px] max-lg:hidden">
                    <div className="relative">

                        <Language
                            currentLanguage={lang}
                            languages={languages}
                            onClick={() => setShowModal(!showModal)}
                            buttonProps={buttonProps}
                        />
                        <div ref={modalRef} className={`${showModal ? '' : 'hidden'} absolute left-0 max-lg:left-[-50%] max-lg:translate-x-[-50%] mt-2 w-[225px] divide-gray-100 bg-white border border-black`} aria-labelledby="headlessui-menu-button-:R5p6haj6:" id="headlessui-menu-items-:r2:" role="menu" tabIndex="0" data-headlessui-state="open">
                            <div className="py-[5px] px-1 flex flex-col gap-[10px]" >
                                <div onClick={() => { setLang('en'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'en' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="en" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={us} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >English</span>
                                    </div>
                                    {lang === 'en' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }
                                </div>

                                <div onClick={() => { setLang('zh'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'zh' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="zh" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={cz} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >中文(简体)</span>
                                    </div>
                                    {lang === 'zh' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('de'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'de' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="de" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={de} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Deutsch</span>
                                    </div>
                                    {lang === 'de' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('nl'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'nl' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="nl" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={nl} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Nederlands</span>
                                    </div>
                                    {lang === 'nl' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('ja'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'ja' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="ja" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={jp} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >日本語</span>
                                    </div>
                                    {lang === 'js' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('ko'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'ko' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="ko" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={ko} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >한국어</span>
                                    </div>
                                    {lang === 'ko' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('fr'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'fr' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="fr" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={fr} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Français</span>
                                    </div>
                                    {lang === 'fr' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('es'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'es' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="es" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={es} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Español</span>
                                    </div>
                                    {lang === 'es' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('pl'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'pl' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="ru" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={pl} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Polski</span>
                                    </div>
                                    {lang === 'pl' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('ro'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'ro' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="it" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={ro} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Română</span>
                                    </div>
                                    {lang === 'ro' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('vn'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'vn' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="vi" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={vt} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Tiếng Việt</span>
                                    </div>
                                    {lang === 'vt' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('sk'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'sk' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="el" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={sk} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Slovaški</span>
                                    </div>
                                    {lang === 'sk' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('pt'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'pt' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="pt" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={pt} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Português</span>
                                    </div>
                                    {lang === 'pt' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('tr'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'tr' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="hu" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={tr} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >Türkiye</span>
                                    </div>
                                    {lang === 'tr' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                                <div onClick={() => { setLang('th'); setShowModal(!showModal) }} className={`flex flex-row gap-[4px] ${lang === 'th' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'} hover:cursor-pointer px-2 justify-between`} >
                                    <div className="flex flex-row items-center gap-1" >
                                        <img alt="th" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={thai} style={{ color: "transparent" }} />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]" >แบบไทย</span>
                                    </div>
                                    {lang === 'th' &&
                                        <img alt="check" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={check} style={{ color: "transparent" }} />
                                    }</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-[45px] max-lg:justify-center text-black text-[13px] max-lg:hidden">
                    <div className="relative">
                        <button onClick={() => setShowModal2(!showModal2)} className="align-top text-center grow whitespace-nowrap hover:cursor-pointer hover:text-primary text-opacity-60" id="headlessui-menu-button-:R1696haj6:" type="button" aria-haspopup="menu" aria-expanded="false">
                            About
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down align-middle h-4 w-4 transition-transform duration-200 inline ml-[4px]">
                                <path d="m6 9 6 6 6-6">

                                </path>
                            </svg>
                        </button>
                        <div className={`${showModal2 ? '' : 'hidden'} absolute left-0 mt-2 w-[240px] bg-white border border-black`} aria-labelledby="headlessui-menu-button-:R1696haj6:" id="headlessui-menu-items-:r6:" role="menu" tabIndex="0" data-headlessui-state="open">
                            <div className="px-2 py-3" ref={modalRef2} >
                                <div id="headlessui-menu-item-:r7:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#about' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">About</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="" id="headlessui-menu-item-:r8:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#look' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">Look Book</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="" id="headlessui-menu-item-:r9:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#runway' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">The Runway</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="" id="headlessui-menu-item-:ra:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#fashion' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">Fashionomics</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="" id="headlessui-menu-item-:rb:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <a href='#faq' onClick={() => setShowModal2(!showModal2)}>
                                        <div className="hover:bg-[#f4f4f4] flex w-full items-center px-2  cursor-pointer">
                                            <div className="font-libreBodoni text-[18px] font-bold leading-[44px] ">FAQ</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="align-top text-center leading-5 grow whitespace-nowrap hover:cursor-auto text-opacity-60" id="headlessui-menu-button-:R1a96haj6:" type="button" aria-haspopup="menu" aria-expanded="false">
                            Socials
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down align-middle h-4 w-4 transition-transform duration-200 inline ml-[4px]">
                                <path d="m6 9 6 6 6-6">

                                </path>
                            </svg>
                        </button>
                        <div className="absolute hidden left-0 mt-2 w-[240px] border border-black bg-white" aria-labelledby="headlessui-menu-button-:R1a96haj6:" id="headlessui-menu-items-:rc:" role="menu" tabIndex="0" data-headlessui-state="open">
                            <div className="px-2 py-3" >
                                <span className="flex w-full items-center px-2  gap-3" href="https://x.com/Poodlana" target="_blank" id="headlessui-menu-item-:rd:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <p className="w-[20px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-[20px] h-[20px]">
                                            <path fill="black" d="M13.3322 10.9283L18.5432 5H17.3082L12.7825 10.1471L9.16905 5H5L10.4659 12.784L5 19H6.23495L11.0141 13.5645L14.8309 19H19L13.3322 10.9283ZM11.6404 12.8519L11.0863 12.077L6.68 5.91H8.57737L12.1334 10.887L12.6867 11.6619L17.3089 18.1313H15.4123L11.6397 12.8526L11.6404 12.8519Z">
                                            </path>
                                        </svg>
                                    </p>
                                    <span className="font-libreBodoni text-[18px] font-bold leading-[44px]">X</span>
                                </span>
                                <span className="flex w-full items-center px-2  gap-3" href="https://linktr.ee/Poodlana" target="_blank" id="headlessui-menu-item-:re:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <p className="w-[20px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-[20px] h-[20px]">
                                            <path fill="black" d="M10.7502 14.7744H13.2376V20H10.7502V14.7744ZM5 9.41836H9.2325L6.22361 6.7496L7.88853 5.15706L10.757 7.90044V4H13.2443V7.90044L16.1127 5.1633L17.7763 6.7496L14.7688 9.41211H19V11.6143H14.7447L17.7724 14.3514L16.1127 15.9067L12.0006 12.0622L7.88853 15.9067L6.22361 14.3577L9.25251 11.6205H5V9.41836Z">
                                            </path>
                                        </svg>
                                    </p>
                                    <span className="font-libreBodoni text-[18px] font-bold leading-[44px]">LinkTree</span>
                                </span>
                                <span className="flex w-full items-center px-2  gap-3" href="https://t.me/poodlana" target="_blank" id="headlessui-menu-item-:rf:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <p className="w-[20px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className=" w-[20px] h-[20px]">
                                            <path fillRule="evenodd" clipRule="evenodd" fill="black" d="M3.52703 8.60679C7.55273 6.77797 10.2327 5.56276 11.5784 4.97321C15.4086 3.30079 16.2137 3.01203 16.7313 3C16.8464 3 17.0994 3.02406 17.2719 3.16844C17.41 3.28876 17.4445 3.44518 17.4675 3.56549C17.4905 3.68581 17.5135 3.93848 17.4905 4.13098C17.2834 6.41702 16.3863 11.9636 15.9262 14.5144C15.7307 15.5972 15.3511 15.9582 14.983 15.9943C14.1779 16.0665 13.5683 15.4408 12.7977 14.9114C11.5784 14.0812 10.8998 13.5639 9.71511 12.7457C8.34637 11.8072 9.23203 11.2899 10.0142 10.4477C10.2212 10.2311 13.7523 6.86219 13.8213 6.5614C13.8328 6.5253 13.8328 6.38092 13.7523 6.30873C13.6718 6.23654 13.5568 6.2606 13.4648 6.28467C13.3382 6.30873 11.4059 7.65629 7.64475 10.3153C7.09265 10.7123 6.59807 10.9049 6.14949 10.8928C5.6549 10.8808 4.71174 10.6041 3.99861 10.3634C3.13596 10.0747 2.44584 9.91825 2.50335 9.41292C2.53786 9.14822 2.88292 8.88352 3.52703 8.60679Z">
                                            </path>
                                        </svg>
                                    </p>
                                    <span className="font-libreBodoni text-[18px] font-bold leading-[44px]">Telegram</span>
                                </span>
                                <span className="flex w-full items-center px-2  gap-3" href="https://www.reddit.com/r/Poodlana/" target="_blank" id="headlessui-menu-item-:rg:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <p className="w-[20px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none" className="  w-[20px] h-[20px]">
                                            <path fill="black" d="M18 7.32648C18 6.23393 17.1013 5.34704 16.01 5.34704C15.4708 5.34704 14.9957 5.56555 14.6362 5.89974C13.2753 5 11.4522 4.43445 9.41084 4.37018L10.515 0.874036L13.5193 1.58098V1.61954C13.5193 2.51928 14.2511 3.23907 15.1498 3.23907C16.0485 3.23907 16.7803 2.50643 16.7803 1.61954C16.7803 0.732648 16.0485 0 15.1498 0C14.4565 0 13.8787 0.424165 13.6348 1.02828L10.3866 0.269923C10.2454 0.231362 10.1041 0.321337 10.0528 0.462725L8.80742 4.37018C6.67618 4.39589 4.7632 4.97429 3.33809 5.88689C2.9786 5.5527 2.5164 5.3599 1.99001 5.3599C0.898716 5.3599 0 6.24679 0 7.33933C0 8.07198 0.398003 8.7018 0.988588 9.03599C0.950071 9.24164 0.924394 9.46015 0.924394 9.67866C0.924394 12.6093 4.51926 15 8.94864 15C13.378 15 16.9729 12.6093 16.9729 9.67866C16.9729 9.47301 16.9472 9.26735 16.9215 9.07455C17.5506 8.74036 17.9743 8.08483 17.9743 7.33933L18 7.32648ZM5.097 8.68895C5.097 8.03342 5.62339 7.50643 6.27817 7.50643C6.93295 7.50643 7.45934 8.03342 7.45934 8.68895C7.45934 9.34447 6.93295 9.87146 6.27817 9.87146C5.62339 9.87146 5.097 9.34447 5.097 8.68895ZM11.8759 12.1851C11.2853 12.7763 10.3481 13.072 9.01284 13.072C7.6776 13.072 6.74037 12.7892 6.14979 12.1851C6.03424 12.0823 6.03424 11.9023 6.14979 11.7995C6.2525 11.6967 6.43224 11.6967 6.54779 11.7995C7.03566 12.2879 7.84451 12.5193 9.01284 12.5193C10.1812 12.5193 10.99 12.2879 11.4779 11.7995C11.5806 11.6967 11.7603 11.6967 11.8759 11.7995C11.9914 11.9023 11.9914 12.0823 11.8759 12.1979V12.1851ZM11.7347 9.87146C11.0799 9.87146 10.5535 9.34447 10.5535 8.68895C10.5535 8.03342 11.0799 7.50643 11.7347 7.50643C12.3894 7.50643 12.9158 8.03342 12.9158 8.68895C12.9158 9.34447 12.3894 9.87146 11.7347 9.87146Z">
                                            </path>
                                        </svg>
                                    </p>
                                    <span className="font-libreBodoni text-[18px] font-bold leading-[44px]">Reddit</span>
                                </span>
                                <span className="flex w-full items-center px-2  gap-3" href="https://www.youtube.com/@Poodlana" target="_blank" id="headlessui-menu-item-:rh:" role="menuitem" tabIndex="-1" data-headlessui-state="">
                                    <p className="w-[20px]">
                                        <span className=" w-[20px] h-[20px]" href="https://www.youtube.com/@Poodlana" target="_blank">
                                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="black" d="M17.3848 2.7832C17.1836 2.0293 16.5898 1.43555 15.8379 1.23438C14.4727 0.867188 9 0.867188 9 0.867188C9 0.867188 3.52734 0.867187 2.16211 1.23242C1.4082 1.43359 0.816406 2.02734 0.615234 2.78125C0.25 4.14844 0.25 7 0.25 7C0.25 7 0.25 9.85156 0.615234 11.2168C0.816406 11.9707 1.41016 12.5645 2.16211 12.7656C3.52734 13.1328 9 13.1328 9 13.1328C9 13.1328 14.4727 13.1328 15.8379 12.7656C16.5918 12.5645 17.1836 11.9707 17.3848 11.2168C17.75 9.85156 17.75 7 17.75 7C17.75 7 17.75 4.14844 17.3848 2.7832ZM7.26172 9.61719V4.38281L11.793 6.98047L7.26172 9.61719Z">
                                                </path>
                                            </svg>
                                        </span>
                                    </p>
                                    <span className="font-libreBodoni text-[18px] font-bold leading-[44px]">Youtube</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <a className="cursor-pointer flex items-center pb-2" href="/">
                        <img src={logo} alt="" />
                    </a>
                    <span href="#whitepaper" className="">Whitepaper</span>
                    <span href="#competition" className="">Competition</span>
                </div>
                <div className="lg:w-[200px] flex justify-end">
                    <div className="relative">
                        <button onClick={() => setShowModal3(!showModal3)} className="flex-center overflow-hidden px-4 md:px-4 bg-black hover:bg-black/80 cursor-pointer rounded text-[13px] font-semibold uppercase text-white transition-all duration-200 h-[40px] lg:max-w-[240px]" id="headlessui-menu-button-:r0:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" aria-controls="headlessui-menu-items-:r2:">
                            <img alt="wallet" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="mr-2" src={wallet} style={{ color: 'transparent' }}>
                            </img>Connect Wallet</button>
                        {showModal3 &&
                            <div ref={modalRef3}
                                className={`${showModal3 ? '' : 'hidden '} absolute right-0 lg:min-w-[375px] max-lg:fixed max-lg:w-full max-lg:flex max-lg:justify-center`}
                                aria-labelledby="headlessui-menu-button-:r5:"
                                id="headlessui-menu-items-:rc:"
                                role="menu"
                                tabIndex="0"
                                data-headlessui-state="open"
                            >
                                <div
                                    className="w-full p-[1px] border border-black bg-white backdrop-blur-[40px] overflow-hidden mt-[14px]"

                                >
                                    <div
                                        className="p-[24px]"

                                    >
                                        <h5

                                            className="font-bold font-libreBodoni text-xl uppercase leading-none"

                                        >
                                            Connect Wallet
                                        </h5>
                                        <p
                                            className="w-[60px] h-[0.5px] bg-black my-4"

                                        >

                                        </p>
                                        <div onClick={() => openModalWallet('evm')}
                                            className="flex flex-row justify-between items-center cursor-pointer hover:text-primary my-6"

                                        >
                                            <div className="flex flex-col gap-[6px]" >
                                                <p className="text-[17px] font-bold leading-none" >
                                                    EVM
                                                </p>
                                                <span className="font-ebGaramond text-sm font-medium leading-none opacity-60" >
                                                    Ethereum / BNB
                                                </span>
                                            </div>
                                            <div className="flex items-center" >
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

                                                />
                                            </div>
                                        </div>
                                        <div onClick={() => openModalWallet('sol')}
                                            className="flex justify-between items-center cursor-pointer hover:text-primary"

                                        >
                                            <div className="flex flex-col gap-[6px]" >
                                                <p className="text-[17px] font-bold leading-none" >
                                                    Solana
                                                </p>
                                            </div>
                                            <div className="flex flex-row gap-[8px] items-center" >
                                                <img
                                                    alt="icon"
                                                    loading="lazy"
                                                    width="24"
                                                    height="24"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    src={sol}
                                                    style={{ color: 'transparent' }}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </div >
        <div className={`${showBurgerModal ? 'flex' : 'hidden'} lg:hidden absolute max-lg:flex-col max-lg:w-[100vw] max-lg:fixed z-[999] bg-white`}>
            <div className="flex items-center justify-between h-[64px] w-full px-6 border-b border-b-[#c7c7c7]">
                <svg width="126" height="26" viewBox="0 0 126 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[127px] h-[24px]">
                    <path d="M5.06482 14.7957H5.09941C7.4516 14.7957 9.38869 12.7894 9.38869 8.29258C9.38869 3.72657 7.41701 1.65112 5.134 1.65112H5.06482V14.7957ZM5.134 0.786344C9.56165 0.786344 13.5396 3.17312 13.5396 8.1888C13.5396 13.2391 9.52705 15.6604 5.1686 15.6604H5.06482V22.2327C5.06482 23.9623 5.37614 24.5157 6.10255 24.6541V25H0.222092V24.6541C0.948502 24.5157 1.25982 23.9623 1.25982 22.2327V3.55362C1.25982 1.82407 0.948502 1.27062 0.222092 1.13225V0.786344H5.134ZM15.745 12.8932C15.745 5.87121 18.3048 0.440435 22.4903 0.440435C26.6758 0.440435 29.2355 5.87121 29.2355 12.8932C29.2355 19.9151 26.6758 25.3459 22.4903 25.3459C18.3048 25.3459 15.745 19.9151 15.745 12.8932ZM19.896 12.8586C19.896 20.2956 20.9337 24.4811 22.4903 24.4811C24.0469 24.4811 25.0846 20.2956 25.0846 12.8586C25.0846 5.49071 24.0469 1.30521 22.4903 1.30521C20.9337 1.30521 19.896 5.49071 19.896 12.8586ZM31.4353 12.8932C31.4353 5.87121 33.995 0.440435 38.1805 0.440435C42.366 0.440435 44.9257 5.87121 44.9257 12.8932C44.9257 19.9151 42.366 25.3459 38.1805 25.3459C33.995 25.3459 31.4353 19.9151 31.4353 12.8932ZM35.5862 12.8586C35.5862 20.2956 36.6239 24.4811 38.1805 24.4811C39.7371 24.4811 40.7748 20.2956 40.7748 12.8586C40.7748 5.49071 39.7371 1.30521 38.1805 1.30521C36.6239 1.30521 35.5862 5.49071 35.5862 12.8586ZM52.0028 25H47.0563V24.6541C47.7827 24.5157 48.0941 23.9623 48.0941 22.2327V3.55362C48.0941 1.82407 47.7827 1.27062 47.0563 1.13225V0.786344H52.0028C56.6726 0.786344 60.8927 5.07562 60.8927 12.8932C60.8927 20.7107 56.6726 25 52.0028 25ZM51.8991 24.1352H51.9682C54.5626 24.1352 56.7418 20.4686 56.7418 12.8586C56.7418 5.31776 54.6317 1.65112 51.9682 1.65112H51.8991V24.1352ZM63.0506 25V24.6541C63.777 24.5157 64.0883 23.9623 64.0883 22.2327V3.55362C64.0883 1.82407 63.777 1.27062 63.0506 1.13225V0.786344H68.931V1.13225C68.2046 1.27062 67.8933 1.82407 67.8933 3.55362V24.1352H67.9625C72.4593 24.1352 74.431 22.1635 75.8492 16.3869H76.1951L75.365 25H63.0506ZM83.6457 1.61653C84.718 1.40898 85.3407 1.09766 86.1017 0.440435H86.2746L91.3595 22.5095C91.7054 23.8239 92.0167 24.3774 92.6393 24.6541V25H86.6551V24.6541C87.4507 24.3774 87.6582 23.478 87.3815 22.0944L86.413 17.9089H80.8092L80.6709 18.5661C79.9791 21.9214 80.3596 23.7893 81.9507 24.6541V25H77.4193V24.6541C78.1457 24.2736 78.63 23.3742 79.0451 21.6793L83.6457 1.61653ZM81.0168 17.0441H86.2054L83.6111 5.76744L81.0168 17.0441ZM107.227 25H104.495L96.6078 5.5253V19.1195C96.6078 22.4057 97.1613 23.8931 98.6833 24.6541V25H94.5324V24.6541C95.3972 24.0315 95.7431 22.9591 95.7431 20.8491V4.93726C95.7431 2.82721 95.3972 1.75489 94.5324 1.13225V0.786344H98.8217L106.362 19.4309V6.6668C106.362 3.38067 105.809 1.89325 104.287 1.13225V0.786344H108.438V1.13225C107.573 1.75489 107.227 2.82721 107.227 4.93726V25ZM116.58 1.61653C117.652 1.40898 118.275 1.09766 119.036 0.440435H119.209L124.294 22.5095C124.64 23.8239 124.951 24.3774 125.574 24.6541V25H119.589V24.6541C120.385 24.3774 120.593 23.478 120.316 22.0944L119.347 17.9089H113.744L113.605 18.5661C112.913 21.9214 113.294 23.7893 114.885 24.6541V25H110.354V24.6541C111.08 24.2736 111.564 23.3742 111.979 21.6793L116.58 1.61653ZM113.951 17.0441H119.14L116.545 5.76744L113.951 17.0441Z" fill="#000">
                    </path>
                </svg>
                <button onClick={() => setShowBurgerModal(false)} id="mobile-menu-button" className="focus:outline-none">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.1212 9.70696C10.7306 9.31643 10.0975 9.31643 9.70696 9.70696C9.31643 10.0975 9.31643 10.7306 9.70696 11.1212L14.6568 16.071L9.70711 21.0208C9.31658 21.4113 9.31658 22.0445 9.70711 22.435C10.0976 22.8255 10.7308 22.8255 11.1213 22.435L16.071 17.4853L21.0207 22.4349C21.4112 22.8254 22.0444 22.8254 22.4349 22.4349C22.8254 22.0444 22.8254 21.4112 22.4349 21.0207L17.4853 16.071L22.435 11.1213C22.8256 10.7308 22.8256 10.0976 22.435 9.70706C22.0445 9.31654 21.4113 9.31654 21.0208 9.70706L16.071 14.6568L11.1212 9.70696Z" fill="black">
                        </path>
                    </svg>
                </button>
            </div>
            <div className="font-ebGaramond text-[28px] font-bold p-6 overflow-x-hidden overflow-y-scroll w-full leading-[42px]" style={style}>
                <div className="flex flex-col gap-[28px]">
                    <span className="active" href="" target="_blank">Buy</span>
                    <button onClick={() => { setShowBurgerModalLinks(!showBurgerModalLinks) }} data-state="true" className="w-full [data-state=true]>svg]:rotate-180 flex flex-row items-center">
                        <span>About</span>
                        {showBurgerModalLinks
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-6 w-6 transition-transform duration-200 inline ml-[10px]" style={{ transform: 'rotate(180deg)' }}>
                                <path d="m6 9 6 6 6-6">

                                </path>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-6 w-6 transition-transform duration-200 inline ml-[10px]">
                                <path d="m6 9 6 6 6-6">
                                </path>
                            </svg>
                        }
                    </button>
                    <div className={`pl-8 ${showBurgerModalLinks ? 'flex' : 'hidden'} flex-col gap-[28px] `}>
                        <a href='#about' onClick={() => { setShowBurgerModal(false) }}>
                            <div>About</div>
                        </a>
                        <a href='#look' onClick={() => { setShowBurgerModal(false) }}>
                            <div>Look Book</div>
                        </a>
                        <a href='#runway' onClick={() => { setShowBurgerModal(false) }}>
                            <div>The Runway</div>
                        </a>
                        <a href='#fashionomics' onClick={() => { setShowBurgerModal(false) }}>
                            <div>Fashionomics</div>
                        </a>
                        <a href='#faq' onClick={() => { setShowBurgerModal(false) }}>
                            <div>FAQ</div>
                        </a>
                    </div>
                    <span href="https://whitepaper.poodlana.com/" target="_blank">Whitepaper</span>
                    <span href="/competition">Competition</span>
                    <div>
                        <button data-state="false" className="w-full [data-state=true]>svg]:rotate-180 flex flex-row items-center">Socials<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-6 w-6 transition-transform duration-200 inline ml-[10px]">
                            <path d="m6 9 6 6 6-6">
                            </path>
                        </svg>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setShowBurgerModalLang(!showBurgerModalLang)} data-state="true" className="w-full [[data-state=true]>svg]:rotate-180 flex flex-row items-center">
                            <span>Languages</span>
                            {showBurgerModalLang
                                ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-6 w-6 transition-transform duration-200 inline ml-[10px]" style={{ transform: 'rotate(180deg)' }}>
                                    <path d="m6 9 6 6 6-6">

                                    </path>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-6 w-6 transition-transform duration-200 inline ml-[10px]">
                                    <path d="m6 9 6 6 6-6">
                                    </path>
                                </svg>
                            }
                        </button>
                        {showBurgerModalLang &&
                            <div className="py-[5px] px-1 flex flex-col gap-[20px] mt-4 pl-7 overflow-auto">
                                <div
                                    onClick={() => {
                                        setLang('en'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'en' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="en"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={us}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            English
                                        </span>
                                    </div>
                                    {lang === 'en' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('zh'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'zh' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="zh"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={cz}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            中文(简体)
                                        </span>
                                    </div>
                                    {lang === 'zh' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('de'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'de' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="de"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={de}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Deutsch
                                        </span>
                                    </div>
                                    {lang === 'de' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('nl'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'nl' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="nl"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={nl}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Nederlands
                                        </span>
                                    </div>
                                    {lang === 'nl' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('ja'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'ja' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="ja"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={jp}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            日本語
                                        </span>
                                    </div>
                                    {lang === 'ja' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('ko'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'ko' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="ko"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={ko}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            한국어
                                        </span>
                                    </div>
                                    {lang === 'ko' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('fr'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'fr' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="fr"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={fr}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Français
                                        </span>
                                    </div>
                                    {lang === 'fr' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('es'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'es' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="es"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={es}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Español
                                        </span>
                                    </div>
                                    {lang === 'es' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('pl'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'pl' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="it"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={pl}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Polski
                                        </span>
                                    </div>
                                    {lang === 'pl' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('ro'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'ro' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="pt"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={ro}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Română
                                        </span>
                                    </div>
                                    {lang === 'ro' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>
                                <div
                                    onClick={() => {
                                        setLang('vt'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'vt' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="vt"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={vt}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Tiếng Việt
                                        </span>
                                    </div>
                                    {lang === 'vt' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>
                                <div
                                    onClick={() => {
                                        setLang('sk'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'sk' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="sk"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={sk}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Slovaški
                                        </span>
                                    </div>
                                    {lang === 'sk' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setLang('pt'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'pt' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="pt"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={pt}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Português
                                        </span>
                                    </div>
                                    {lang === 'pt' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>
                                <div
                                    onClick={() => {
                                        setLang('tr'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'tr' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="th"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={tr}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            Türkiye
                                        </span>
                                    </div>
                                    {lang === 'tr' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>
                                <div
                                    onClick={() => {
                                        setLang('th'); setShowBurgerModal(false)
                                    }}
                                    className={`flex flex-row gap-[4px] ${lang === 'th' ? 'bg-black text-white' : 'hover:bg-[#f4f4f4]'
                                        } hover:cursor-pointer px-2 justify-between`}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img
                                            alt="th"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            src={thai}
                                            style={{ color: 'transparent' }}
                                        />
                                        <span className="font-ebGaramond font-bold leading-[36px] px-[4px]">
                                            แบบไทย
                                        </span>
                                    </div>
                                    {lang === 'th' && (
                                        <img
                                            alt="check"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src={check}
                                            style={{ color: 'transparent' }}
                                        />
                                    )}
                                </div>
                            </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Header;
