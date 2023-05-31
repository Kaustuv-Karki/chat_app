import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = useState(null);
    const [id, setId] = useState(null);
    return (
        <UserContext.Provider value={{ userName, setUserName, id, setId }}>
            {children}
        </UserContext.Provider>
    );
};
