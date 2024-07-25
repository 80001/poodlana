import React from 'react';
import centerDoge from '../../images/center-dog.webp'
import wif from '../../images/wif.webp'
import doge from '../../images/doge.webp'

const Look = () => {
    return (
        <div id="look" className="bg-[url('/images/lookbook/bg.jpg')] bg-cover bg-center relative text-white w-full" style={{ opacity: 1, transform: 'none' }}>
            <div className="flex flex-col items-center w-full pt-[96px] max-lg:pt-[62px]" style={{ transform: 'none' }}>
                <p className="font-libreBodoni font-medium italic text-[40px] text-black max-lg:text-[24px]">
                    2024 Trending Meme
                </p>
                <h2 className="uppercase text-[84px] mb-[20px] font-bold text-center text-black max-lg:text-[52px]">
                    look book
                </h2>
            </div>
            <div className="relative w-full flex justify-center pb-[60px]">
                <div className="flex flex-col items-center w-[37%] max-lg:w-[95vw] relative z-[2] mt-[25px]">
                    <img
                        alt="DOGE"
                        loading="lazy"
                        width="1500"
                        height="1500"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-auto"
                        src={centerDoge}
                        style={{ color: 'transparent' }}
                    />
                    <svg
                        width="126"
                        height="26"
                        viewBox="0 0 126 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[330px] h-[100px] max-lg:w-[200px] max-lg:h-[60px]"
                    >
                        <path d="M5.06482 14.7957H5.09941C7.4516 14.7957 9.38869 12.7894 9.38869 8.29258C9.38869 3.72657 7.41701 1.65112 5.134 1.65112H5.06482V14.7957ZM5.134 0.786344C9.56165 0.786344 13.5396 3.17312 13.5396 8.1888C13.5396 13.2391 9.52705 15.6604 5.1686 15.6604H5.06482V22.2327C5.06482 23.9623 5.37614 24.5157 6.10255 24.6541V25H0.222092V24.6541C0.948502 24.5157 1.25982 23.9623 1.25982 22.2327V3.55362C1.25982 1.82407 0.948502 1.27062 0.222092 1.13225V0.786344H5.134ZM15.745 12.8932C15.745 5.87121 18.3048 0.440435 22.4903 0.440435C26.6758 0.440435 29.2355 5.87121 29.2355 12.8932C29.2355 19.9151 26.6758 25.3459 22.4903 25.3459C18.3048 25.3459 15.745 19.9151 15.745 12.8932ZM19.896 12.8586C19.896 20.2956 20.9337 24.4811 22.4903 24.4811C24.0469 24.4811 25.0846 20.2956 25.0846 12.8586C25.0846 5.49071 24.0469 1.30521 22.4903 1.30521C20.9337 1.30521 19.896 5.49071 19.896 12.8586ZM31.4353 12.8932C31.4353 5.87121 33.995 0.440435 38.1805 0.440435C42.366 0.440435 44.9257 5.87121 44.9257 12.8932C44.9257 19.9151 42.366 25.3459 38.1805 25.3459C33.995 25.3459 31.4353 19.9151 31.4353 12.8932ZM35.5862 12.8586C35.5862 20.2956 36.6239 24.4811 38.1805 24.4811C39.7371 24.4811 40.7748 20.2956 40.7748 12.8586C40.7748 5.49071 39.7371 1.30521 38.1805 1.30521C36.6239 1.30521 35.5862 5.49071 35.5862 12.8586ZM52.0028 25H47.0563V24.6541C47.7827 24.5157 48.0941 23.9623 48.0941 22.2327V3.55362C48.0941 1.82407 47.7827 1.27062 47.0563 1.13225V0.786344H52.0028C56.6726 0.786344 60.8927 5.07562 60.8927 12.8932C60.8927 20.7107 56.6726 25 52.0028 25ZM51.8991 24.1352H51.9682C54.5626 24.1352 56.7418 20.4686 56.7418 12.8586C56.7418 5.31776 54.6317 1.65112 51.9682 1.65112H51.8991V24.1352ZM63.0506 25V24.6541C63.777 24.5157 64.0883 23.9623 64.0883 22.2327V3.55362C64.0883 1.82407 63.777 1.27062 63.0506 1.13225V0.786344H68.931V1.13225C68.2046 1.27062 67.8933 1.82407 67.8933 3.55362V24.1352H67.9625C72.4593 24.1352 74.431 22.1635 75.8492 16.3869H76.1951L75.365 25H63.0506ZM83.6457 1.61653C84.718 1.40898 85.3407 1.09766 86.1017 0.440435H86.2746L91.3595 22.5095C91.7054 23.8239 92.0167 24.3774 92.6393 24.6541V25H86.6551V24.6541C87.4507 24.3774 87.6582 23.478 87.3815 22.0944L86.413 17.9089H80.8092L80.6709 18.5661C79.9791 21.9214 80.3596 23.7893 81.9507 24.6541V25H77.4193V24.6541C78.1457 24.2736 78.63 23.3742 79.0451 21.6793L83.6457 1.61653ZM81.0168 17.0441H86.2054L83.6111 5.76744L81.0168 17.0441ZM107.227 25H104.495L96.6078 5.5253V19.1195C96.6078 22.4057 97.1613 23.8931 98.6833 24.6541V25H94.5324V24.6541C95.3972 24.0315 95.7431 22.9591 95.7431 20.8491V4.93726C95.7431 2.82721 95.3972 1.75489 94.5324 1.13225V0.786344H98.8217L106.362 19.4309V6.6668C106.362 3.38067 105.809 1.89325 104.287 1.13225V0.786344H108.438V1.13225C107.573 1.75489 107.227 2.82721 107.227 4.93726V25ZM116.58 1.61653C117.652 1.40898 118.275 1.09766 119.036 0.440435H119.209L124.294 22.5095C124.64 23.8239 124.951 24.3774 125.574 24.6541V25H119.589V24.6541C120.385 24.3774 120.593 23.478 120.316 22.0944L119.347 17.9089H113.744L113.605 18.5661C112.913 21.9214 113.294 23.7893 114.885 24.6541V25H110.354V24.6541C111.08 24.2736 111.564 23.3742 111.979 21.6793L116.58 1.61653ZM113.951 17.0441H119.14L116.545 5.76744L113.951 17.0441Z" fill="#fff"></path>
                    </svg>
                    <p className="font-ebGaramond italic text-[40px] font-semibold text-center max-lg:text-[24px]">
                        "I'm everything, darling."
                    </p>
                </div>
                <div className="flex flex-col items-center absolute left-[10%] lg:top-[50%] lg:mt-[-350px] max-lg:left-[-10vw] max-lg:bottom-auto max-lg:top-[0px]">
                    <h4 className="text-[36px] font-black uppercase max-lg:text-[18px]">
                        Doge
                    </h4>
                    <p className="font-ebGaramond italic text-[20px] font-semibold max-lg:text-[12px] max-lg:w-[25vw] text-center">
                        “Nothing Tastes as good as skinny feels.”
                    </p>
                    <p className="italic font-bold font-libreBodoni uppercase text-[20px] max-lg:text-[10px]">
                        -KATE MOSS
                    </p>
                    <img
                        alt="DOGE"
                        loading="lazy"
                        width="1000"
                        height="1000"
                        decoding="async"
                        data-nimg="1"
                        className="w-[320px] h-auto max-lg:w-[195px]"
                        src={doge}
                        style={{ color: 'transparent' }}
                    />
                </div>
                <div className="flex flex-col items-center absolute right-[10%] lg:top-[50%] lg:mt-[-370px] max-lg:right-[-6vw] max-lg:bottom-auto max-lg:top-[0px]">
                    <h4 className="text-[36px] font-black max-lg:text-[18px]">
                        Dogwifhat
                    </h4>
                    <p className="font-ebGaramond italic text-[20px] font-semibold max-lg:text-[12px] w-[25vw] text-center">
                        “Trendy is the last stage before tacky.”
                    </p>
                    <p className="italic font-bold font-libreBodoni uppercase text-[20px] max-lg:text-[10px]">
                        -KARL LAGERFIELD
                    </p>
                    <img
                        alt="DOGE"
                        loading="lazy"
                        width="1000"
                        height="1000"
                        decoding="async"
                        data-nimg="1"
                        className="w-[320px] h-auto max-lg:w-[180px]"
                        src={wif}
                        style={{ color: 'transparent' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Look;
