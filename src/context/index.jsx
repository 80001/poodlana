import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false)


    return (
        <Context.Provider value={{ modal, setModal }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };
