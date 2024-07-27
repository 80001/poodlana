import React, { useEffect, useState, useContext, useRef } from 'react';

import img01 from "../../images/01.svg";
import img02 from "../../images/02.svg";
import sol from "../../images/sol.svg";
import sol2 from "../../images/sol2.svg";
import usd from "../../images/usd.svg";
import bsc from "../../images/bsc-org.svg";
import bnb from "../../images/bnb-36x36.svg";
import bnbWhite from "../../images/bnb-white.svg";
import eth from "../../images/eth.svg";
import ethWhite from "../../images/eth-white.svg";
import ethBlue from "../../images/eth-blue.svg";
import solColor from "../../images/sol-color.svg";
import solWhite from "../../images/sol-white.svg";
import cardGreen from "../../images/card-green.svg";
import cardWhite from "../../images/card-white.svg";
import ethereum from "../../images/ethereum.svg";
import usdt from "../../images/usdt.svg";
import usdc from "../../images/usdc-36x36.svg";
import Clover from "../../images/Clover.svg";
import MathWallet from "../../images/MathWallet.svg";
import Solflare from "../../images/Solflare.svg";
import Solong from "../../images/Solong.png";
import Ledger from "../../images/Ledger.svg";
import Coin98 from "../../images/Coin98.svg";
import Coinbase from "../../images/Coinbase.svg";
import Phantom from "../../images/Phantom.svg";
import led from '../../images/led.svg'
import arg from '../../images/arg.svg'
import trust from '../../images/trust.svg'
import phan from '../../images/phan.svg'
import okx from '../../images/okx.svg'
import coin from '../../images/coin.svg'
import meta from '../../images/meta.svg'
import wallet2 from '../../images/wallet2.svg'


import { Context } from '../../context';

const Modal = ({ info }) => {
    const [method, setMethod] = useState('ETH')
    const [payment, setPayment] = useState(false)
    const { setDefaultWallet, setDefaultPayment, modalPayment, setModalPayment } = useContext(Context)

    const modalRef = useRef();
    const modalRef2 = useRef();
    const modalRef3 = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {


                closeModal()
            } else {
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line
    }, [modalRef]);
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef2.current && !modalRef2.current.contains(event.target)) {


                closeModal()
            } else {
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line
    }, [modalRef2]);
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef3.current && !modalRef3.current.contains(event.target)) {


                closeModal()
            } else {
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line
    }, [modalRef3]);
    useEffect(() => {

        if (method === 'ETH' || method === 'BNB' || method === 'SOL' || method === 'CARD') {
            setPayment(true)
        } else {
            setMethod(null)
            setPayment(false)
        }

    }, [method, info.type, payment])

    const closeModal = () => {

        if (method) {
            setDefaultPayment()
        } else {
            setDefaultWallet()
        }
        setDefaultWallet()
        setDefaultPayment()
    }

    const setPayMethods = (type, chain) => {
        setModalPayment({ ...modalPayment, type, chain, status: false })
    }




    if (info.type === 'evm') {
        if (window.innerWidth <= 768) {
            return (
                <div>
                    <div className="iekbcc0" data-rk="">
                        <div className="iekbcc0 ju367v2 ju367v8q _9pm4ki3 ju367v9h ju367vb3 ju367va ju367v2q ju367v8q" data-rk="" aria-labelledby="rk_connect_title" aria-modal="true" role="dialog">
                            <div >
                            </div>
                            <div className="_9pm4ki5 ju367va ju367v15 ju367v8r" role="document" style={{ outline: 'none' }}>
                                <div className="iekbcc0">
                                    <div className="iekbcc0 _1ckjpok2 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r _1ckjpok6 ju367vq _1ckjpok7">
                                        <div className="iekbcc0 ju367v84 ju367v6d ju367v6y ju367v7j">
                                            <div className="iekbcc0 ju367va ju367v15 ju367v6u">
                                                <div className="iekbcc0 ju367vbr ju367va ju367v15 ju367v6h ju367v8e">
                                                    <div className="iekbcc0 ju367v7b ju367v7w ju367va ju367v2q ju367v6j ju367v8r">
                                                        <div className="iekbcc0 ju367v4r ju367v2u ju367v9f">
                                                            <h1 className="iekbcc0 ju367vgu ju367v16 ju367v1c ju367v1h ju367v2v" id="rk_connect_title">Connect a Wallet</h1>
                                                        </div>
                                                        <div className="iekbcc0 ju367v4 ju367va ju367v2d ju367v7t ju367v8p ju367v8t">
                                                            <div className="iekbcc0" style={{ marginBottom: '-20px', marginTop: '-20px' }}>
                                                                <button onClick={closeModal} className="iekbcc0 iekbcc9 ju367v4 ju367va0 ju367vc6 ju367vs ju367vt ju367vu ju367vff ju367va ju367v2c ju367v2q ju367v8u ju367v95 _12cbo8i3 ju367v8r _12cbo8i5 _12cbo8i7" aria-label="Close" type="button" style={{ willChange: 'transform' }}>
                                                                    <svg aria-hidden="true" fill="none" height="11.5" viewBox="0 0 11.5 11.5" width="11.5" xmlns="http://www.w3.org/2000/svg">
                                                                        <title>Close</title>
                                                                        <path d="M2.13388 0.366117C1.64573 -0.122039 0.854272 -0.122039 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L3.98223 5.75L0.366117 9.36612C-0.122039 9.85427 -0.122039 10.6457 0.366117 11.1339C0.854272 11.622 1.64573 11.622 2.13388 11.1339L5.75 7.51777L9.36612 11.1339C9.85427 11.622 10.6457 11.622 11.1339 11.1339C11.622 10.6457 11.622 9.85427 11.1339 9.36612L7.51777 5.75L11.1339 2.13388C11.622 1.64573 11.622 0.854272 11.1339 0.366117C10.6457 -0.122039 9.85427 -0.122039 9.36612 0.366117L5.75 3.98223L2.13388 0.366117Z" fill="currentColor">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="iekbcc0 ju367va ju367v15">
                                                    <div className="iekbcc0">
                                                        <div className="iekbcc0 ju367vbr ju367va ju367v6q ju367v8a _1am14410">
                                                            <div className="iekbcc0 ju367va" style={{ margin: '0px auto' }}>
                                                                <div className="iekbcc0 ju367v7b ju367v7w">
                                                                    <div className="iekbcc0 ju367v9d">
                                                                        <button className="iekbcc0 iekbcc9 ju367vgu ju367v16 ju367v9f" type="button" data-testid="rk-wallet-option-metaMask" style={{ overflow: 'visible', textAlign: 'center' }}>
                                                                            <div className="iekbcc0 ju367v4 ju367va ju367v15 ju367v2q">
                                                                                <div className="iekbcc0 ju367va ju367v4 ju367v2q ju367v6k ju367v8c ju367v8r">
                                                                                    <div className="iekbcc0 ju367vl ju367vex ju367v2k ju367v6c ju367v8r ju367v9d" role="img" style={{ background: 'rgb(255, 255, 255)' }}>
                                                                                        <img className="iekbcc0 ju367v2m ju367v8p ju367v8s ju367v9f" aria-hidden="true" src="data:image/svg+xml,<svg width=&quot;28&quot; height=&quot;28&quot; viewBox=&quot;0 0 28 28&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>%0A<rect width=&quot;28&quot; height=&quot;28&quot; fill=&quot;white&quot;/>%0A<path d=&quot;M24.0891 3.1199L15.3446 9.61456L16.9617 5.7828L24.0891 3.1199Z&quot; fill=&quot;%23E2761B&quot; stroke=&quot;%23E2761B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M3.90207 3.1199L12.5763 9.67608L11.0383 5.7828L3.90207 3.1199Z&quot; fill=&quot;%23E4761B&quot; stroke=&quot;%23E4761B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M20.9429 18.1745L18.6139 21.7426L23.597 23.1136L25.0295 18.2536L20.9429 18.1745Z&quot; fill=&quot;%23E4761B&quot; stroke=&quot;%23E4761B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M2.97929 18.2536L4.40301 23.1136L9.38607 21.7426L7.05713 18.1745L2.97929 18.2536Z&quot; fill=&quot;%23E4761B&quot; stroke=&quot;%23E4761B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M9.10483 12.1456L7.71626 14.2461L12.6642 14.4658L12.4884 9.14877L9.10483 12.1456Z&quot; fill=&quot;%23E4761B&quot; stroke=&quot;%23E4761B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M18.8864 12.1456L15.4589 9.08725L15.3446 14.4658L20.2837 14.2461L18.8864 12.1456Z&quot; fill=&quot;%23E4761B&quot; stroke=&quot;%23E4761B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M9.38606 21.7426L12.3566 20.2925L9.79033 18.2888L9.38606 21.7426Z&quot; fill=&quot;%23E4761B&quot; stroke=&quot;%23E4761B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M15.6347 20.2925L18.6139 21.7426L18.2009 18.2888L15.6347 20.2925Z&quot; fill=&quot;%23E4761B&quot; stroke=&quot;%23E4761B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M18.6139 21.7426L15.6347 20.2925L15.8719 22.2348L15.8456 23.0521L18.6139 21.7426Z&quot; fill=&quot;%23D7C1B3&quot; stroke=&quot;%23D7C1B3&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M9.38606 21.7426L12.1544 23.0521L12.1368 22.2348L12.3566 20.2925L9.38606 21.7426Z&quot; fill=&quot;%23D7C1B3&quot; stroke=&quot;%23D7C1B3&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M12.1984 17.0056L9.72002 16.2762L11.4689 15.4765L12.1984 17.0056Z&quot; fill=&quot;%23233447&quot; stroke=&quot;%23233447&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M15.7928 17.0056L16.5223 15.4765L18.28 16.2762L15.7928 17.0056Z&quot; fill=&quot;%23233447&quot; stroke=&quot;%23233447&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M9.38606 21.7426L9.80791 18.1745L7.05712 18.2536L9.38606 21.7426Z&quot; fill=&quot;%23CD6116&quot; stroke=&quot;%23CD6116&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M18.1921 18.1745L18.6139 21.7426L20.9429 18.2536L18.1921 18.1745Z&quot; fill=&quot;%23CD6116&quot; stroke=&quot;%23CD6116&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M20.2837 14.2461L15.3446 14.4658L15.8016 17.0057L16.5311 15.4765L18.2888 16.2762L20.2837 14.2461Z&quot; fill=&quot;%23CD6116&quot; stroke=&quot;%23CD6116&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M9.72002 16.2762L11.4777 15.4765L12.1984 17.0057L12.6642 14.4658L7.71626 14.2461L9.72002 16.2762Z&quot; fill=&quot;%23CD6116&quot; stroke=&quot;%23CD6116&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M7.71626 14.2461L9.79033 18.2888L9.72002 16.2762L7.71626 14.2461Z&quot; fill=&quot;%23E4751F&quot; stroke=&quot;%23E4751F&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M18.2888 16.2762L18.2009 18.2888L20.2837 14.2461L18.2888 16.2762Z&quot; fill=&quot;%23E4751F&quot; stroke=&quot;%23E4751F&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M12.6642 14.4658L12.1984 17.0057L12.7784 20.0025L12.9102 16.0565L12.6642 14.4658Z&quot; fill=&quot;%23E4751F&quot; stroke=&quot;%23E4751F&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M15.3446 14.4658L15.1073 16.0477L15.2128 20.0025L15.8016 17.0057L15.3446 14.4658Z&quot; fill=&quot;%23E4751F&quot; stroke=&quot;%23E4751F&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M15.8016 17.0056L15.2128 20.0025L15.6347 20.2925L18.2009 18.2888L18.2888 16.2762L15.8016 17.0056Z&quot; fill=&quot;%23F6851B&quot; stroke=&quot;%23F6851B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M9.72002 16.2762L9.79033 18.2888L12.3566 20.2925L12.7784 20.0025L12.1984 17.0056L9.72002 16.2762Z&quot; fill=&quot;%23F6851B&quot; stroke=&quot;%23F6851B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M15.8456 23.0521L15.8719 22.2348L15.6522 22.0414H12.339L12.1368 22.2348L12.1544 23.0521L9.38606 21.7426L10.3528 22.5336L12.3126 23.8958H15.6786L17.6472 22.5336L18.6139 21.7426L15.8456 23.0521Z&quot; fill=&quot;%23C0AD9E&quot; stroke=&quot;%23C0AD9E&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M15.6347 20.2925L15.2128 20.0025H12.7784L12.3566 20.2925L12.1368 22.2348L12.339 22.0414H15.6522L15.8719 22.2348L15.6347 20.2925Z&quot; fill=&quot;%23161616&quot; stroke=&quot;%23161616&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M24.4583 10.0364L25.2053 6.45072L24.0891 3.1199L15.6347 9.39485L18.8864 12.1456L23.4827 13.4903L24.5022 12.3038L24.0628 11.9874L24.7658 11.3459L24.221 10.924L24.924 10.3879L24.4583 10.0364Z&quot; fill=&quot;%23763D16&quot; stroke=&quot;%23763D16&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M2.79472 6.45072L3.54174 10.0364L3.06717 10.3879L3.77024 10.924L3.23415 11.3459L3.93722 11.9874L3.4978 12.3038L4.50847 13.4903L9.10483 12.1456L12.3566 9.39485L3.90207 3.1199L2.79472 6.45072Z&quot; fill=&quot;%23763D16&quot; stroke=&quot;%23763D16&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M23.4827 13.4903L18.8864 12.1456L20.2837 14.2461L18.2009 18.2888L20.9429 18.2536H25.0295L23.4827 13.4903Z&quot; fill=&quot;%23F6851B&quot; stroke=&quot;%23F6851B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M9.10484 12.1456L4.50848 13.4903L2.97929 18.2536H7.05713L9.79033 18.2888L7.71626 14.2461L9.10484 12.1456Z&quot; fill=&quot;%23F6851B&quot; stroke=&quot;%23F6851B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A<path d=&quot;M15.3446 14.4658L15.6347 9.39485L16.9705 5.7828H11.0383L12.3566 9.39485L12.6642 14.4658L12.7696 16.0653L12.7784 20.0025H15.2128L15.2304 16.0653L15.3446 14.4658Z&quot; fill=&quot;%23F6851B&quot; stroke=&quot;%23F6851B&quot; stroke-width=&quot;0.0878845&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>%0A</svg>%0A" style={{ transition: 'opacity 0.15s linear 0s', userSelect: 'none' }}>
                                                                                        </img></div>
                                                                                </div>
                                                                                <div className="iekbcc0 ju367va ju367v15 ju367v2u">
                                                                                    <h2 className="iekbcc0 ju367vgu ju367v16 ju367v18 ju367v1f ju367v2v">
                                                                                        <span className="iekbcc0 ju367v8r">MetaMask</span>
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="iekbcc0 ju367v7b ju367v7w">
                                                                    <div className="iekbcc0 ju367v9d">
                                                                        <button className="iekbcc0 iekbcc9 ju367vgu ju367v16 ju367v9f" type="button" data-testid="rk-wallet-option-coinbase" style={{ overflow: 'visible', textAlign: 'center' }}>
                                                                            <div className="iekbcc0 ju367v4 ju367va ju367v15 ju367v2q">
                                                                                <div className="iekbcc0 ju367va ju367v4 ju367v2q ju367v6k ju367v8c ju367v8r">
                                                                                    <div className="iekbcc0 ju367vl ju367vex ju367v2k ju367v6c ju367v8r ju367v9d" role="img" style={{ background: 'rgb(44, 95, 246)' }}>
                                                                                        <img className="iekbcc0 ju367v2m ju367v8p ju367v8s ju367v9f" aria-hidden="true" src="data:image/svg+xml,<svg width=&quot;28&quot; height=&quot;28&quot; viewBox=&quot;0 0 28 28&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>%0A<rect width=&quot;28&quot; height=&quot;28&quot; fill=&quot;%232C5FF6&quot;/>%0A<path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M14 23.8C19.4124 23.8 23.8 19.4124 23.8 14C23.8 8.58761 19.4124 4.2 14 4.2C8.58761 4.2 4.2 8.58761 4.2 14C4.2 19.4124 8.58761 23.8 14 23.8ZM11.55 10.8C11.1358 10.8 10.8 11.1358 10.8 11.55V16.45C10.8 16.8642 11.1358 17.2 11.55 17.2H16.45C16.8642 17.2 17.2 16.8642 17.2 16.45V11.55C17.2 11.1358 16.8642 10.8 16.45 10.8H11.55Z&quot; fill=&quot;white&quot;/>%0A</svg>%0A" style={{ transition: 'opacity 0.15s linear 0s', userSelect: 'none' }}>
                                                                                        </img></div>
                                                                                </div>
                                                                                <div className="iekbcc0 ju367va ju367v15 ju367v2u">
                                                                                    <h2 className="iekbcc0 ju367vgu ju367v16 ju367v18 ju367v1f ju367v2v">
                                                                                        <span className="iekbcc0 ju367v8r">Coinbase</span>
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="iekbcc0 ju367v7b ju367v7w">
                                                                    <div className="iekbcc0 ju367v9d">
                                                                        <button className="iekbcc0 iekbcc9 ju367vgu ju367v16 ju367v9f" type="button" data-testid="rk-wallet-option-walletConnect" style={{ overflow: 'visible', textAlign: 'center' }}>
                                                                            <div className="iekbcc0 ju367v4 ju367va ju367v15 ju367v2q">
                                                                                <div className="iekbcc0 ju367va ju367v4 ju367v2q ju367v6k ju367v8c ju367v8r">
                                                                                    <div className="iekbcc0 ju367vl ju367vex ju367v2k ju367v6c ju367v8r ju367v9d" role="img" style={{ background: 'rgb(59, 153, 252)' }}>
                                                                                        <img className="iekbcc0 ju367v2m ju367v8p ju367v8s ju367v9f" aria-hidden="true" src="data:image/svg+xml,<svg width=&quot;28&quot; height=&quot;28&quot; viewBox=&quot;0 0 28 28&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>%0A<rect width=&quot;28&quot; height=&quot;28&quot; fill=&quot;%233B99FC&quot;/>%0A<path d=&quot;M8.38969 10.3739C11.4882 7.27538 16.5118 7.27538 19.6103 10.3739L19.9832 10.7468C20.1382 10.9017 20.1382 11.1529 19.9832 11.3078L18.7076 12.5835C18.6301 12.6609 18.5045 12.6609 18.4271 12.5835L17.9139 12.0703C15.7523 9.9087 12.2477 9.9087 10.0861 12.0703L9.53655 12.6198C9.45909 12.6973 9.3335 12.6973 9.25604 12.6198L7.98039 11.3442C7.82547 11.1893 7.82547 10.9381 7.98039 10.7832L8.38969 10.3739ZM22.2485 13.012L23.3838 14.1474C23.5387 14.3023 23.5387 14.5535 23.3838 14.7084L18.2645 19.8277C18.1096 19.9827 17.8584 19.9827 17.7035 19.8277C17.7035 19.8277 17.7035 19.8277 17.7035 19.8277L14.0702 16.1944C14.0314 16.1557 13.9686 16.1557 13.9299 16.1944C13.9299 16.1944 13.9299 16.1944 13.9299 16.1944L10.2966 19.8277C10.1417 19.9827 9.89053 19.9827 9.73561 19.8278C9.7356 19.8278 9.7356 19.8277 9.7356 19.8277L4.61619 14.7083C4.46127 14.5534 4.46127 14.3022 4.61619 14.1473L5.75152 13.012C5.90645 12.857 6.15763 12.857 6.31255 13.012L9.94595 16.6454C9.98468 16.6841 10.0475 16.6841 10.0862 16.6454C10.0862 16.6454 10.0862 16.6454 10.0862 16.6454L13.7194 13.012C13.8743 12.857 14.1255 12.857 14.2805 13.012C14.2805 13.012 14.2805 13.012 14.2805 13.012L17.9139 16.6454C17.9526 16.6841 18.0154 16.6841 18.0541 16.6454L21.6874 13.012C21.8424 12.8571 22.0936 12.8571 22.2485 13.012Z&quot; fill=&quot;white&quot;/>%0A</svg>%0A" style={{ transition: 'opacity 0.15s linear 0s', userSelect: 'none' }}>
                                                                                        </img></div>
                                                                                </div>
                                                                                <div className="iekbcc0 ju367va ju367v15 ju367v2u">
                                                                                    <h2 className="iekbcc0 ju367vgu ju367v16 ju367v18 ju367v1f ju367v2v">
                                                                                        <span className="iekbcc0 ju367v8r">WalletConnect</span>
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="iekbcc0 ju367v7b ju367v7w">
                                                                    <div className="iekbcc0 ju367v9d">
                                                                        <button className="iekbcc0 iekbcc9 ju367vgu ju367v16 ju367v9f" type="button" data-testid="rk-wallet-option-okx" style={{ overflow: 'visible', textAlign: 'center' }}>
                                                                            <div className="iekbcc0 ju367v4 ju367va ju367v15 ju367v2q">
                                                                                <div className="iekbcc0 ju367va ju367v4 ju367v2q ju367v6k ju367v8c ju367v8r">
                                                                                    <div className="iekbcc0 ju367vl ju367vex ju367v2k ju367v6c ju367v8r ju367v9d" role="img" style={{ background: 'rgb(0, 0, 0)' }}>
                                                                                        <img className="iekbcc0 ju367v2m ju367v8p ju367v8s ju367v9f" aria-hidden="true" src="data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 28 28&quot;>                <path fill=&quot;%23000&quot; d=&quot;M0 0h28v28H0z&quot;/>                <path fill=&quot;%23fff&quot; fill-rule=&quot;evenodd&quot; d=&quot;M10.819 5.556H5.93a.376.376 0 0 0-.375.375v4.888c0 .207.168.375.375.375h4.888a.376.376 0 0 0 .375-.376V5.932a.376.376 0 0 0-.376-.375Zm5.64 5.638h-4.886a.376.376 0 0 0-.376.376v4.887c0 .208.168.376.376.376h4.887a.376.376 0 0 0 .376-.375V11.57a.376.376 0 0 0-.376-.377Zm.75-5.638h4.887c.208 0 .376.168.376.375v4.888a.376.376 0 0 1-.376.375H17.21a.376.376 0 0 1-.376-.376V5.933c0-.208.169-.376.376-.376Zm-6.39 11.277H5.93a.376.376 0 0 0-.375.376v4.887c0 .208.168.376.375.376h4.888a.376.376 0 0 0 .375-.376V17.21a.376.376 0 0 0-.376-.376Zm6.39 0h4.887c.208 0 .376.169.376.376v4.887a.376.376 0 0 1-.376.376H17.21a.376.376 0 0 1-.376-.376V17.21c0-.207.169-.376.376-.376Z&quot; clip-rule=&quot;evenodd&quot;/> </svg>" style={{ transition: 'opacity 0.15s linear 0s', userSelect: 'none' }}>
                                                                                        </img></div>
                                                                                </div>
                                                                                <div className="iekbcc0 ju367va ju367v15 ju367v2u">
                                                                                    <h2 className="iekbcc0 ju367vgu ju367v16 ju367v18 ju367v1f ju367v2v">
                                                                                        <span className="iekbcc0 ju367v8r">OKX Wallet</span>
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="iekbcc0 ju367v7b ju367v7w">
                                                                    <div className="iekbcc0 ju367v9d">
                                                                        <button className="iekbcc0 iekbcc9 ju367vgu ju367v16 ju367v9f" type="button" data-testid="rk-wallet-option-trust" style={{ overflow: 'visible', textAlign: 'center' }}>
                                                                            <div className="iekbcc0 ju367v4 ju367va ju367v15 ju367v2q">
                                                                                <div className="iekbcc0 ju367va ju367v4 ju367v2q ju367v6k ju367v8c ju367v8r">
                                                                                    <div className="iekbcc0 ju367vl ju367vex ju367v2k ju367v6c ju367v8r ju367v9d" role="img" style={{ background: 'rgb(255, 255, 255)' }}>
                                                                                        <img class="iekbcc0 ju367v2m ju367v8p ju367v8s ju367v9f" aria-hidden="true" src="data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; width=&quot;28&quot; height=&quot;28&quot; viewBox=&quot;0 0 28 28&quot;><path fill=&quot;%23fff&quot; d=&quot;M0 0h28v28H0z&quot;/><path fill=&quot;%230500FF&quot; d=&quot;M6 7.583 13.53 5v17.882C8.15 20.498 6 15.928 6 13.345V7.583Z&quot;/><path fill=&quot;url(%23a)&quot; d=&quot;M22 7.583 13.53 5v17.882c6.05-2.384 8.47-6.954 8.47-9.537V7.583Z&quot;/><defs><linearGradient id=&quot;a&quot; x1=&quot;19.768&quot; x2=&quot;14.072&quot; y1=&quot;3.753&quot; y2=&quot;22.853&quot; gradientUnits=&quot;userSpaceOnUse&quot;><stop offset=&quot;.02&quot; stop-color=&quot;%2300F&quot;/><stop offset=&quot;.08&quot; stop-color=&quot;%230094FF&quot;/><stop offset=&quot;.16&quot; stop-color=&quot;%2348FF91&quot;/><stop offset=&quot;.42&quot; stop-color=&quot;%230094FF&quot;/><stop offset=&quot;.68&quot; stop-color=&quot;%230038FF&quot;/><stop offset=&quot;.9&quot; stop-color=&quot;%230500FF&quot;/></linearGradient></defs></svg>%0A" style={{ transition: 'opacity 0.15s linear 0s', userSelect: 'none' }}>
                                                                                        </img></div>
                                                                                </div>
                                                                                <div className="iekbcc0 ju367va ju367v15 ju367v2u">
                                                                                    <h2 className="iekbcc0 ju367vgu ju367v16 ju367v18 ju367v1f ju367v2v">
                                                                                        <span className="iekbcc0 ju367v8r">Trust Wallet</span>
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="iekbcc0 ju367v7b ju367v7w">
                                                                    <div className="iekbcc0 ju367v9d">
                                                                        <button className="iekbcc0 iekbcc9 ju367vgu ju367v16 ju367v9f" type="button" data-testid="rk-wallet-option-argent" style={{ overflow: 'visible', textAlign: 'center' }}>
                                                                            <div className="iekbcc0 ju367v4 ju367va ju367v15 ju367v2q">
                                                                                <div className="iekbcc0 ju367va ju367v4 ju367v2q ju367v6k ju367v8c ju367v8r">
                                                                                    <div className="iekbcc0 ju367vl ju367vex ju367v2k ju367v6c ju367v8r ju367v9d" role="img" style={{ background: 'rgb(255, 255, 255)' }}>
                                                                                        <img className="iekbcc0 ju367v2m ju367v8p ju367v8s ju367v9f" aria-hidden="true"
                                                                                            src="data:image/svg+xml,<svg width=&quot;28&quot; height=&quot;28&quot; viewBox=&quot;0 0 28 28&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>%0A<rect width=&quot;28&quot; height=&quot;28&quot; fill=&quot;white&quot;/><path d=&quot;M15.9033 7H11.8495C11.714 7 11.6055 7.10935 11.6026 7.24527C11.5207 11.0658 9.52894 14.6919 6.10076 17.2603C5.99192 17.3418 5.96712 17.495 6.04669 17.6053L8.41849 20.8966C8.49918 21.0086 8.6564 21.0338 8.76706 20.9515C10.9106 19.3561 12.6348 17.4314 13.8764 15.2981C15.118 17.4314 16.8423 19.3561 18.9858 20.9515C19.0964 21.0338 19.2536 21.0086 19.3344 20.8966L21.7062 17.6053C21.7857 17.495 21.7609 17.3418 21.6522 17.2603C18.2239 14.6919 16.2322 11.0658 16.1504 7.24527C16.1474 7.10935 16.0388 7 15.9033 7Z&quot; fill=&quot;%23FF875B&quot;/></svg>" style={{ transition: 'opacity 0.15s linear 0s', userSelect: 'none' }}>
                                                                                        </img></div>
                                                                                </div>
                                                                                <div className="iekbcc0 ju367va ju367v15 ju367v2u">
                                                                                    <h2 className="iekbcc0 ju367vgu ju367v16 ju367v18 ju367v1f ju367v2v">
                                                                                        <span className="iekbcc0 ju367v8r">Argent</span>
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="iekbcc0 ju367v7b ju367v7w">
                                                                    <div className="iekbcc0 ju367v9d">
                                                                        <button className="iekbcc0 iekbcc9 ju367vgu ju367v16 ju367v9f" type="button" data-testid="rk-wallet-option-ledger" style={{ overflow: 'visible', textAlign: 'center' }}>
                                                                            <div className="iekbcc0 ju367v4 ju367va ju367v15 ju367v2q">
                                                                                <div className="iekbcc0 ju367va ju367v4 ju367v2q ju367v6k ju367v8c ju367v8r">
                                                                                    <div className="iekbcc0 ju367vl ju367vex ju367v2k ju367v6c ju367v8r ju367v9d" role="img" style={{ background: 'rgb(0, 0, 0)' }}>
                                                                                        <img className="iekbcc0 ju367v2m ju367v8p ju367v8s ju367v9f" aria-hidden="true" src="data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;28&quot; height=&quot;28&quot; fill=&quot;none&quot;>
                <path fill=&quot;%23000&quot; d=&quot;M0 0h28v28H0z&quot;/>
                <path fill=&quot;%23fff&quot; fill-rule=&quot;evenodd&quot; d=&quot;M11.65 4.4H4.4V9h1.1V5.5l6.15-.04V4.4Zm.05 5.95v7.25h4.6v-1.1h-3.5l-.04-6.15H11.7ZM4.4 23.6h7.25v-1.06L5.5 22.5V19H4.4v4.6ZM16.35 4.4h7.25V9h-1.1V5.5l-6.15-.04V4.4Zm7.25 19.2h-7.25v-1.06l6.15-.04V19h1.1v4.6Z&quot; clip-rule=&quot;evenodd&quot;/>
                </svg>" style={{ transition: 'opacity 0.15s linear 0s', userSelect: 'none' }}>
                                                                                        </img></div>
                                                                                </div>
                                                                                <div className="iekbcc0 ju367va ju367v15 ju367v2u">
                                                                                    <h2 className="iekbcc0 ju367vgu ju367v16 ju367v18 ju367v1f ju367v2v">
                                                                                        <span className="iekbcc0 ju367v8r">Ledger</span>
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="iekbcc0 ju367vau ju367v24 ju367v3c ju367v57">
                                                        </div>
                                                        <div className="iekbcc0 ju367v7e ju367v7z ju367v4 ju367va ju367v15 ju367v1z" style={{ textAlign: 'center' }}>
                                                            <div className="iekbcc0 ju367va ju367v15 ju367v1q ju367v2u">
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v2v">What is a Wallet?</div>
                                                                <div className="iekbcc0 ju367vh0 ju367v16 ju367v1a ju367v1e ju367v2v">A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.</div>
                                                            </div>
                                                        </div>
                                                        <div className="iekbcc0 ju367v7b ju367v7w ju367v8k">
                                                            <div className="iekbcc0 ju367va ju367v1t ju367v2q">
                                                                <button className="iekbcc0 iekbcc9 ju367v7c ju367v7x ju367v8c ju367v6l ju367vc9 ju367vt ju367vv ju367vm ju367v8 ju367v2u ju367v8v _12cbo8i3 ju367v8r _12cbo8i4 _12cbo8i7" type="button" style={{ willChange: 'transform' }}>
                                                                    <div className="iekbcc0 ju367vf0 ju367v16 ju367v1a ju367v1h ju367v2v">Get a Wallet</div>
                                                                </button>
                                                                <a className="iekbcc0 iekbcca ju367v7c ju367v7x ju367v8c ju367v6l ju367vc9 ju367vt ju367vv ju367vm ju367v8 ju367v2u ju367v8v _12cbo8i3 ju367v8r _12cbo8i4 _12cbo8i7" href="https://learn.rainbow.me/understanding-web3?utm_source=rainbowkit&amp;utm_campaign=learnmore" rel="noreferrer noopener" target="_blank" style={{ willChange: 'transform' }}>
                                                                    <div className="iekbcc0 ju367vf0 ju367v16 ju367v1a ju367v1h ju367v2v">Learn More</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="iekbcc0" data-rk="">
                    <div className="iekbcc0 ju367v4 ju367v8q _9pm4ki3 ju367v9h ju367vb3 ju367va ju367v2q ju367v8q" data-rk="" aria-labelledby="rk_connect_title" aria-modal="true" role="dialog">
                        <div >
                        </div>
                        <div className="_9pm4ki5 ju367va ju367v15 ju367v8r" role="document" style={{ outline: 'none' }}>
                            <div className="iekbcc0" ref={modalRef}>
                                <div className="iekbcc0 _1ckjpok3 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r  ">
                                    <div className="iekbcc0 ju367v84 ju367v6d ju367v6y ju367v7j">
                                        <div className="iekbcc0 ju367va ju367v14" style={{ maxHeight: '504px' }}>
                                            <div className="iekbcc0 ju367va ju367v15 ju367v4y _1vwt0cg3">
                                                <div className="iekbcc0 ju367va ju367v2r">
                                                    <div className="iekbcc0 ju367v7a ju367v7v ju367v3n ju367v6k ju367v86">
                                                        <h1 className="iekbcc0 ju367vgu ju367v16 ju367v1b ju367v1i ju367v2v" id="rk_connect_title" data-testid="rk-connect-header-label">Connect a Wallet</h1>
                                                    </div>
                                                </div>
                                                <div className="iekbcc0 ju367v6p _1vwt0cg2 ju367v7a ju367v7v">
                                                    <div className="iekbcc0 ju367v3n ju367v48 ju367v33 ju367v4y">
                                                        <div className="iekbcc0 ju367vh0 ju367v16 ju367v19 ju367v1h ju367v2v">Suggested</div>
                                                    </div>
                                                    <div className="iekbcc0 ju367va ju367v15 ju367v1n">
                                                        <div className="iekbcc0 ju367va ju367v15">
                                                            <button className="iekbcc0 iekbcc9 ju367v89 ju367v6i ju367v73 ju367v7o ju367vo ju367vt ju367vv ju367v8u ju367v9f ju367vb1 g5kl0l0 _12cbo8i3 ju367v8r _12cbo8i6" data-testid="rk-wallet-option-metaMask" style={{ willChange: 'transform' }}>
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v8u">
                                                                    <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s">
                                                                        <div className="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v94" role="img" style={{ background: 'rgb(255, 255, 255)' }}>
                                                                            <div className="iekbcc0 ju367vc6 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9f">
                                                                                <img src={meta} width={28} height={28} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="iekbcc0">
                                                                            <div className="iekbcc0 ju367v5p">MetaMask</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="iekbcc0 ju367va ju367v15">
                                                            <button className="iekbcc0 iekbcc9 ju367v89 ju367v6i ju367v73 ju367v7o ju367vo ju367vt ju367vv ju367v8u ju367v9f ju367vb1 g5kl0l0 _12cbo8i3 ju367v8r _12cbo8i6" data-testid="rk-wallet-option-coinbase" style={{ willChange: 'transform' }}>
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v8u">
                                                                    <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s">
                                                                        <div className="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v94" role="img" style={{ background: 'rgb(44, 95, 246)' }}>
                                                                            <div className="iekbcc0 ju367vc6 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9f">
                                                                                <img src={coin} width={28} height={28} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="iekbcc0">
                                                                            <div className="iekbcc0 ju367v5p">Coinbase Wallet</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="iekbcc0 ju367va ju367v15">
                                                            <button className="iekbcc0 iekbcc9 ju367v89 ju367v6i ju367v73 ju367v7o ju367vo ju367vt ju367vv ju367v8u ju367v9f ju367vb1 g5kl0l0 _12cbo8i3 ju367v8r _12cbo8i6" data-testid="rk-wallet-option-walletConnect" style={{ willChange: 'transform' }}>
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v8u">
                                                                    <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s">
                                                                        <div className="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v94" role="img" style={{ background: 'rgb(59, 153, 252)' }}>
                                                                            <div className="iekbcc0 ju367vc6 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9f">
                                                                                <img src={wallet2} width={28} height={28} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="iekbcc0">
                                                                            <div className="iekbcc0 ju367v5p">WalletConnect</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="iekbcc0 ju367va ju367v15">
                                                            <button className="iekbcc0 iekbcc9 ju367v89 ju367v6i ju367v73 ju367v7o ju367vo ju367vt ju367vv ju367v8u ju367v9f ju367vb1 g5kl0l0 _12cbo8i3 ju367v8r _12cbo8i6" data-testid="rk-wallet-option-okx" style={{ willChange: 'transform' }}>
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v8u">
                                                                    <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s">
                                                                        <div className="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v94" role="img" style={{ background: 'rgb(0, 0, 0)' }}>
                                                                            <div className="iekbcc0 ju367vc6 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9f">
                                                                                <img src={okx} width={28} height={28} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="iekbcc0">
                                                                            <div className="iekbcc0 ju367v5p">OKX Wallet</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="iekbcc0 ju367va ju367v15">
                                                            <button className="iekbcc0 iekbcc9 ju367v89 ju367v6i ju367v73 ju367v7o ju367vo ju367vt ju367vv ju367v8u ju367v9f ju367vb1 g5kl0l0 _12cbo8i3 ju367v8r _12cbo8i6" data-testid="rk-wallet-option-phantom" style={{ willChange: 'transform' }}>
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v8u" disabled="">
                                                                    <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s">
                                                                        <div className="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v94" role="img" style={{ background: 'rgb(154, 138, 238)' }}>
                                                                            <div className="iekbcc0 ju367vc6 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9f">
                                                                                <img src={phan} width={28} height={28} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="iekbcc0">
                                                                            <div className="iekbcc0 ju367v5p">Phantom</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="iekbcc0 ju367va ju367v15">
                                                            <button className="iekbcc0 iekbcc9 ju367v89 ju367v6i ju367v73 ju367v7o ju367vo ju367vt ju367vv ju367v8u ju367v9f ju367vb1 g5kl0l0 _12cbo8i3 ju367v8r _12cbo8i6" data-testid="rk-wallet-option-trust" style={{ willChange: 'transform' }}>
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v8u">
                                                                    <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s">
                                                                        <div className="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v94" role="img" style={{ background: 'rgb(255, 255, 255)' }}>
                                                                            <div className="iekbcc0 ju367vc6 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9f">
                                                                                <img src={trust} width={28} height={28} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="iekbcc0">
                                                                            <div className="iekbcc0 ju367v5p">Trust Wallet</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="iekbcc0 ju367va ju367v15">
                                                            <button className="iekbcc0 iekbcc9 ju367v89 ju367v6i ju367v73 ju367v7o ju367vo ju367vt ju367vv ju367v8u ju367v9f ju367vb1 g5kl0l0 _12cbo8i3 ju367v8r _12cbo8i6" data-testid="rk-wallet-option-argent" style={{ willChange: 'transform' }}>
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v8u">
                                                                    <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s">
                                                                        <div className="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v94" role="img" style={{ background: 'rgb(255, 255, 255)' }}>
                                                                            <div className="iekbcc0 ju367vc6 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9f">
                                                                                <img src={arg} width={28} height={28} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="iekbcc0">
                                                                            <div className="iekbcc0 ju367v5p">Argent</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="iekbcc0 ju367va ju367v15">
                                                            <button className="iekbcc0 iekbcc9 ju367v89 ju367v6i ju367v73 ju367v7o ju367vo ju367vt ju367vv ju367v8u ju367v9f ju367vb1 g5kl0l0 _12cbo8i3 ju367v8r _12cbo8i6" data-testid="rk-wallet-option-ledger" style={{ willChange: 'transform' }}>
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v8u">
                                                                    <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s">
                                                                        <div className="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v94" role="img" style={{ background: 'rgb(0, 0, 0)' }}>
                                                                            <div className="iekbcc0 ju367vc6 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9f">
                                                                                <img src={led} width={28} height={28} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="iekbcc0">
                                                                            <div className="iekbcc0 ju367v5p">Ledger</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iekbcc0 ju367vau ju367v5s ju367v8x">
                                            </div>
                                            <div className="iekbcc0 ju367v4y ju367v37 ju367v3s ju367v4d ju367va ju367v15" style={{ flexGrow: 1 }}>
                                                <div className="iekbcc0 ju367v4 ju367va ju367v2r ju367v35">
                                                    <div className="iekbcc0 ju367v94">
                                                    </div>
                                                    <div className="iekbcc0 ju367va ju367v2q" style={{ flexGrow: 1 }}>
                                                    </div>
                                                    <button onClick={closeModal} className="iekbcc0 iekbcc9 ju367v4 ju367va0 ju367vc6 ju367vs ju367vt ju367vv ju367vff ju367va ju367v2b ju367v2q ju367v8u ju367v94 _12cbo8i3 ju367v8r _12cbo8i5 _12cbo8i7" aria-label="Close" type="button" style={{ willChange: 'transform' }}>
                                                        <svg aria-hidden="true" fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
                                                            <title>Close</title>
                                                            <path d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" fill="currentColor">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="iekbcc0 ju367va ju367v15" style={{ minHeight: '432px' }}>
                                                    <div className="iekbcc0 ju367v3o ju367v49 ju367v4 ju367va ju367v15 ju367v1p ju367v2m ju367v2q">
                                                        <div className="iekbcc0 ju367v4 ju367vf0 ju367va ju367v15 ju367v2m ju367v2s">
                                                            <div className="iekbcc0 ju367v34">
                                                                <div className="iekbcc0 ju367vgu ju367v16 ju367v1b ju367v1i ju367v2v">What is a Wallet?</div>
                                                            </div>
                                                            <div className="iekbcc0 ju367v50 ju367v39 ju367va ju367v15 ju367v1z ju367v2q" style={{ maxWidth: '312px' }}>
                                                                <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1u">
                                                                    <div className="iekbcc0 ju367vj ju367v2i ju367v66 ju367v9b">
                                                                        <div className="iekbcc0 ju367vk ju367v2i ju367v6c ju367v8r ju367v9b" role="img" style={{ background: 'rgb(208, 213, 222)' }}>
                                                                            <img src={img01} alt="" width={48} height={48} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="iekbcc0 ju367va ju367v15 ju367v1n">
                                                                        <div className="iekbcc0 ju367vgu ju367v16 ju367v19 ju367v1h ju367v2v">A Home for your Digital Assets</div>
                                                                        <div className="iekbcc0 ju367vh0 ju367v16 ju367v19 ju367v1f ju367v2v">Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</div>
                                                                    </div>
                                                                </div>
                                                                <div className="iekbcc0 ju367v4 ju367va ju367v14 ju367v1u">
                                                                    <div className="iekbcc0 ju367vj ju367v2i ju367v66 ju367v9b">
                                                                        <div className="iekbcc0 ju367vk ju367v2i ju367v6c ju367v8r ju367v9b" role="img" style={{ background: 'rgb(208, 213, 222)' }}>
                                                                            <img src={img02} alt="" width={48} height={48} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="iekbcc0 ju367va ju367v15 ju367v1n">
                                                                        <div className="iekbcc0 ju367vgu ju367v16 ju367v19 ju367v1h ju367v2v">A New Way to Log In</div>
                                                                        <div className="iekbcc0 ju367vh0 ju367v16 ju367v19 ju367v1f ju367v2v">Instead of creating new accounts and passwords on every website, just connect your wallet.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="iekbcc0 ju367v4v ju367v34 ju367v3p ju367v4a ju367v4 ju367va ju367v15 ju367v1s ju367v2q">
                                                                <button className="iekbcc0 iekbcc9 ju367v77 ju367v7s ju367v88 ju367v6h ju367vc6 ju367vt ju367vv ju367vm ju367v8 ju367v2u ju367v8v ju367v9i ju367v2b _12cbo8i3 ju367v8r _12cbo8i4 _12cbo8i7" type="button" style={{ willChange: 'transform' }}>
                                                                    <div className="iekbcc0 ju367vf3 ju367v16 ju367v19 ju367v1h ju367v2v">Get a Wallet</div>
                                                                </button>
                                                                <a className="iekbcc0 iekbcca ju367v77 ju367v7s ju367v88 ju367v6h ju367v8 ju367v8u _12cbo8i3 ju367v8r _12cbo8i4 _12cbo8i6" href="https://learn.rainbow.me/understanding-web3?utm_source=rainbowkit&amp;utm_campaign=learnmore" rel="noreferrer" target="_blank" style={{ willChange: 'transform' }}>
                                                                    <div className="iekbcc0 ju367vf0 ju367v16 ju367v19 ju367v1h ju367v2v">Learn More</div>
                                                                </a>
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
                        <div >
                        </div>
                    </div>
                </div>
            </div>
        );

    }
    if (info.type === 'sol') {
        return (
            <div aria-labelledby="wallet-adapter-modal-title" aria-modal="true" className="wallet-adapter-modal wallet-adapter-modal-fade-in " role="dialog">
                <div className="wallet-adapter-modal-container">
                    <div className="wallet-adapter-modal-wrapper" ref={modalRef2}>
                        <button className="wallet-adapter-modal-button-close" onClick={closeModal}>
                            <svg width="14" height="14">
                                <path d="M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z">
                                </path>
                            </svg>
                        </button>
                        <h1 className="wallet-adapter-modal-title">Connect a wallet on Solana to continue</h1>
                        <ul className="wallet-adapter-modal-list">
                            <li>
                                <button className="wallet-adapter-button " type="button">
                                    <i className="wallet-adapter-button-start-icon">
                                        <img src={Phantom} alt="" width='28' height='28' />
                                    </i>Phantom</button>
                            </li>
                            <li>
                                <button className="wallet-adapter-button " type="button">
                                    <i className="wallet-adapter-button-start-icon">
                                        <img src={Coinbase} alt="" width='28' height='28' />
                                    </i>Coinbase Wallet</button>
                            </li>
                            <li>
                                <button className="wallet-adapter-button " type="button">
                                    <i className="wallet-adapter-button-start-icon">
                                        <img src={Coin98} alt="" width='28' height='28' />
                                    </i>Coin98</button>
                            </li>
                            <li>
                                <button className="wallet-adapter-button " type="button">
                                    <i className="wallet-adapter-button-start-icon">
                                        <img src={Ledger} alt="" width='28' height='28' />
                                    </i>Ledger</button>
                            </li>
                            <li>
                                <button className="wallet-adapter-button " type="button">
                                    <i className="wallet-adapter-button-start-icon">
                                        <img src={Solong} alt="" width='28' height='28' />
                                    </i>Solong</button>
                            </li>
                            <li>
                                <button className="wallet-adapter-button " type="button">
                                    <i className="wallet-adapter-button-start-icon">
                                        <img src={Solflare} alt="" width='28' height='28' />
                                    </i>Solflare</button>
                            </li>
                            <li>
                                <button className="wallet-adapter-button " type="button">
                                    <i className="wallet-adapter-button-start-icon">
                                        <img src={MathWallet} alt="" width='28' height='28' />
                                    </i>MathWallet</button>
                            </li>
                            <li>
                                <button className="wallet-adapter-button " type="button">
                                    <i className="wallet-adapter-button-start-icon">
                                        <img src={Clover} alt="" width='28' height='28' />
                                    </i>Clover</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="wallet-adapter-modal-overlay">
                </div>
            </div>
        )
    }
    else {

        return (
            <div id="headlessui-portal-root">
                <div data-headlessui-portal="">
                    <button
                        type="button"
                        data-headlessui-focus-guard="true"
                        aria-hidden="true"
                        style={{
                            position: "fixed",
                            top: "1px",
                            left: "1px",
                            width: "1px",
                            height: "0px",
                            padding: "0px",
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0px, 0px, 0px, 0px)",
                            whiteSpace: "nowrap",
                            borderWidth: "0px",
                        }}
                    >

                    </button>
                    <div>
                        <div className="absolute z-1000" role="dialog" aria-modal="true" aria-labelledby="headlessui-dialog-title">
                            <div className="fixed inset-0 overflow-y-auto z-[200]">
                                <div className="flex min-h-full items-center justify-center md:p-4 p-2 text-center bg-black/50">
                                    <div
                                        ref={modalRef3}
                                        className="md:w-[480px] max-md:w-[94vw] w-[27%] transform overflow-hidden bg-white border-black p-8 max-md:p-[12px] align-middle shadow-xl transition-all z-20 border"
                                        id="headlessui-dialog-panel"
                                    >
                                        <h3 className="flex flex-row justify-between items-center" id="headlessui-dialog-title">
                                            <span className="text-[20px] max-md:text-[15px] font-libreBodoni uppercase">Select payment method</span>
                                            <svg
                                                onClick={closeModal}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#000"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-x w-[24px] h-[24px] hover:opacity-60 hover:cursor-pointer"
                                            >
                                                <path d="M18 6L6 18">

                                                </path>
                                                <path d="M6 6l12 12">

                                                </path>
                                            </svg>
                                        </h3>
                                        <div className="flex items-center gap-1 w-full mb-[10px] lg:mt-8 mt-4">
                                            <div onClick={() => setMethod('ETH')} className={`flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all ${method === 'ETH' ? 'bg-black' : ''}`}>
                                                {method === 'ETH' ?
                                                    <img alt="icon" width={24} height={24} src={ethWhite} />
                                                    :
                                                    <img alt="icon" width={24} height={24} src={ethBlue} />
                                                }
                                                <div className={`text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 ${method === 'ETH' ? 'text-[#fff]' : 'text-[#000]'}`}>
                                                    ETH
                                                </div>
                                            </div>
                                            <div onClick={() => setMethod('BNB')} className={`flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all ${method === 'BNB' ? 'bg-black' : ''}`}>
                                                {method === 'BNB' ?
                                                    <img alt="icon" width={24} height={24} src={bnbWhite} />
                                                    :
                                                    <img alt="icon" width={24} height={24} src={bsc} />
                                                }
                                                <div className={`text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 ${method === 'BNB' ? 'text-[#fff]' : 'text-[#000]'}`}>
                                                    BNB
                                                </div>
                                            </div>
                                            <div onClick={() => setMethod('SOL')} className={`flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all ${method === 'SOL' ? 'bg-black' : ''}`}>
                                                {method === 'SOL' ?
                                                    <img alt="icon" width={24} height={24} src={solWhite} />
                                                    :
                                                    <img alt="icon" width={24} height={24} src={solColor} />
                                                }
                                                <div className={`text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 ${method === 'SOL' ? 'text-[#fff]' : 'text-[#000]'}`}>
                                                    SOL
                                                </div>
                                            </div>
                                            <div onClick={() => setMethod('CARD')} className={`flex-center flex-1 h-[44px] max-md:h-[38px] justify-center items-center border-[0.5px] rounded-[2px] border-[#e5e5e5] group cursor-pointer duration-200 transition-all ${method === 'CARD' ? 'bg-black' : ''}`}>
                                                {method === 'CARD' ?
                                                    <img alt="icon" width={24} height={24} src={cardWhite} />
                                                    :
                                                    <img alt="icon" width={24} height={24} src={cardGreen} />
                                                }
                                                <div className={`text-[16px] max-md:text-[13px] font-semibold leading-[24px] ml-2 ${method === 'CARD' ? 'text-[#fff]' : 'text-[#000]'}`}>
                                                    CARD
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-5 lg:mb-4">
                                            <div className="flex-1 flex h-[1px] bg-[#999]">

                                            </div>
                                            {method === 'ETH' &&
                                                <div className="font-ebGaramond italic text-[18px] mx-2">Ethereum Mainnet</div>
                                            }
                                            {method === 'BNB' &&
                                                <div className="font-ebGaramond italic text-[18px] mx-2">BNB Smart Chain</div>
                                            }
                                            {method === 'SOL' &&
                                                <div className="font-ebGaramond italic text-[18px] mx-2">Solana</div>
                                            }
                                            {method === 'CARD' &&
                                                <div className="font-ebGaramond italic text-[18px] mx-2">Card</div>
                                            }
                                            <div className="flex-1 flex h-[1px] bg-[#999]">

                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[16px]">
                                            {method === 'ETH' &&
                                                <div>

                                                    <div>
                                                        <div onClick={() => setPayMethods('ETH', 'Ethereum')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img alt="icon" width={36} height={36} src={ethereum} />
                                                                <img
                                                                    alt="icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover"
                                                                    src={eth}
                                                                />
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
                                                        <div onClick={() => setPayMethods('ETH', 'Tether USD')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img alt="icon" width={36} height={36} src={usdt} />
                                                                <img
                                                                    alt="icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover"
                                                                    src={eth}
                                                                />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="font-bold font-libreBodoni text-xl">USDT</div>
                                                                    <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">
                                                                        Tether USD
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div onClick={() => setPayMethods('ETH', 'USD Coin')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img
                                                                    alt="icon"
                                                                    width={36}
                                                                    height={36}
                                                                    src={usdc}
                                                                />
                                                                <img
                                                                    alt="icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover"
                                                                    src={eth}
                                                                />
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
                                            }
                                            {method === 'BNB' &&
                                                <div>

                                                    <div>
                                                        <div onClick={() => setPayMethods('BNB', 'BNB')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img alt="icon" width={36} height={36} src={bnb} />
                                                                <img
                                                                    alt="icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover"
                                                                    src={bnb}
                                                                />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="font-bold font-libreBodoni text-xl">BNB</div>
                                                                    <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">BNB</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div onClick={() => setPayMethods('BNB', 'Tether USD')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img alt="icon" width={36} height={36} src={usdt} />
                                                                <img
                                                                    alt="icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover"
                                                                    src={bnb}
                                                                />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="font-bold font-libreBodoni text-xl">USDT</div>
                                                                    <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">
                                                                        Tether USD
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div onClick={() => setPayMethods('BNB', 'USD Coin')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img
                                                                    alt="icon"
                                                                    width={36}
                                                                    height={36}
                                                                    src={usdc}
                                                                />
                                                                <img
                                                                    alt="icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover"
                                                                    src={bnb}
                                                                />
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
                                            }
                                            {method === 'SOL' &&
                                                <div>

                                                    <div>
                                                        <div onClick={() => setPayMethods('SOL', 'Solana')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img alt="icon" width={36} height={36} src={sol} />
                                                                <img
                                                                    alt="icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover"
                                                                    src={sol2}
                                                                />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="font-bold font-libreBodoni text-xl">SOL</div>
                                                                    <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">Solana</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div onClick={() => setPayMethods('SOL', 'USD Coin')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img
                                                                    alt="icon"
                                                                    width={36}
                                                                    height={36}
                                                                    src={usdc}
                                                                />
                                                                <img
                                                                    alt="icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover"
                                                                    src={sol2}
                                                                />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="font-bold font-libreBodoni text-xl">USDC</div>
                                                                    <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">USD Coin</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div onClick={() => setPayMethods('USDT', 'Tether USD')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img alt="icon" width={36} height={36} src={usdt} />
                                                                <img
                                                                    alt="icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover"
                                                                    src={sol2}
                                                                />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="font-bold font-libreBodoni text-xl">USDT</div>
                                                                    <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">
                                                                        Tether USD
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                            {method === 'CARD' &&
                                                <div>
                                                    <div>
                                                        <div onClick={() => setPayMethods('USD', 'US Dolar')} className="flex flex-row gap-[16px] items-center px-[16px] py-[14px] rounded-[2px] my-3 cursor-pointer hover:bg-[#f2f2f2]">
                                                            <div className="w-[36px] h-[36px] relative">
                                                                <img
                                                                    alt="icon"
                                                                    width={36}
                                                                    height={36}
                                                                    src={usd}
                                                                />

                                                            </div>
                                                            <div className="flex items-center justify-between flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="font-bold font-libreBodoni text-xl">USD</div>
                                                                    <div className="font-medium text-base text-[#a6a6a6] font-libreBodoni">US Dolar</div>
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
                            <button
                                type="button"
                                data-headlessui-focus-guard="true"
                                aria-hidden="true"
                                style={{
                                    position: "fixed",
                                    top: "1px",
                                    left: "1px",
                                    width: "1px",
                                    height: "0px",
                                    padding: "0px",
                                    margin: "-1px",
                                    overflow: "hidden",
                                    clip: "rect(0px, 0px, 0px, 0px)",
                                    whiteSpace: "nowrap",
                                    borderWidth: "0px",
                                }}
                            >

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Modal;
