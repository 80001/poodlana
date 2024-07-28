import React, { useState } from 'react';

// Define a FAQ item component
const FAQItem = ({ index, question, answer }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="py-7 border-b-[2px] border-b-[#191919] max-lg:py-7 cursor-pointer" onClick={toggleOpen}>
            <div className="flex justify-between">
                <span className="text-[24px] leading-[36px] font-semibold uppercase max-lg:text-[15px]">{question}</span>
                <div className="flex items-center cursor-pointer ">
                    {isOpen ? (
                        <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[20px] max-lg:size-[18px]">
                            <path d="M0.366699 0.611328H12.0334V2.27799H0.366699V0.611328Z" fill="black" />
                        </svg>
                    ) : (
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[20px] max-lg:size-[18px]">
                            <path d="M5.3667 5.61133V0.611328H7.03337V5.61133H12.0334V7.27799H7.03337V12.278H5.3667V7.27799H0.366699V5.61133H5.3667Z" fill="black" />
                        </svg>
                    )}
                </div>
            </div>
            {isOpen && (
                <div className="grid transition-[grid-template-rows] duration-300 ease-linear grid-rows-[1fr] mt-4">
                    <div className="min-h-[0px] overflow-hidden">
                        <div className="text-[20px] font-ebGaramond font-medium leading-snug  text-left  text-[#656565] max-lg:text-[15px]">{answer}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Define the main FAQ component
const FAQ = () => {
    const faqs = [
        {
            question: 'How do I contact the project?',
            answer: 'The project can be contacted at contact@poodlana.com',
        },
        {
            question: 'Where can I purchase POODL?',
            answer: 'You can purchase POODL from and only from Poodlana.com, we’re so highly couture and hot off the runway that our exclusive presale collection of 500,000,000 tokens can only be bought from us.',
        },
        {
            question: 'Where will the project be listed?',
            answer: 'The project will be listed on DEX 60 minutes after the presale closes — fashion never sleeps.',
        },
        {
            question: 'Is there multiple language support?',
            answer: 'Naturally we found our creative home in Asia with the Poodle craze, we have Korean / Japanese specific channels inside Telegram and we also have multiple language Twitter channels. Moderators inside our Telegram can help with multiple language support.',
        },
        {
            question: 'Is the project audited?',
            answer: (
                <>
                    Of course darling, after all isn’t fashion once it reaches the rack about seeking the approval of others? We have been thoroughly audited by Solid Proof. Who would we be without the Solid Proof stamp of approval.
                    <span className="text-primary font-bold flex" href="https://app.solidproof.io/projects/poodlana" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link mr-1">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        SolidProof Report
                    </span>
                </>
            ),
        },
    ];

    return (
        <div id="faq" className="w-screen wx-full max-w-[850px] mx-auto max-lg:px-8 py-[120px] max-lg:py-[90px]" style={{ opacity: 1, transform: 'none' }}>
            <div className="flex justify-between max-lg:flex-col">
                <div className="mb-16 flex-1 pr-8  text-left ">
                    <p className="text-[52px] font-libreBodoni italic font-medium mb-[22px] max-lg:text-[32px]">7/24 Holder Care</p>
                    <h2 className="w-full font-bold text-[92px] leading-none uppercase max-lg:text-[48px] max-lg:w-full">Frequently Asked Questions</h2>
                </div>
                <svg width="64" height="163" viewBox="0 0 64 163" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-lg:-rotate-90 max-lg:ml-[-20px]" style={{ transformOrigin: '50% 0px' }}>
                    <g clipPath="url(#clip0_320_3114)">
                        <path d="M32 39.7998L32 123.8" stroke="black" strokeWidth="2" />
                        <path d="M49 111.964C43.3012 111.174 31.9036 112.834 31.9036 125.8C32.4337 121.188 29.9952 111.964 16 111.964" stroke="black" strokeWidth="2" />
                    </g>
                    <rect x="63" y="1.7998" width="160" height="62" rx="31" transform="rotate(90 63 1.7998)" stroke="black" strokeWidth="2" />
                    <defs>
                        <clipPath id="clip0_320_3114">
                            <rect x="64" y="0.799805" width="162" height="64" rx="32" transform="rotate(90 64 0.799805)" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="h-[2px] w-full bg-black max-lg:mt-[-60px]" />
            <div className="flex flex-col">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} index={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
