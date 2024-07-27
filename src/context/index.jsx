import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [modalWallet, setModalWallet] = useState({ status: false, type: null });
    const [pay, setPay] = useState(null);
    const [modalPayment, setModalPayment] = useState({ status: false, type: null, chain: null });

    const setDefaultWallet = () => {
        setModalWallet({ status: false, type: null });
    };

    const setDefaultPayment = () => {
        setModalPayment({ ...modalPayment, status: false });
    };
    useEffect(() => {

    }, [modalPayment])

    return (
        <Context.Provider value={{ modalWallet, setModalWallet, modalPayment, setModalPayment, setDefaultWallet, setDefaultPayment, pay, setPay }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };
