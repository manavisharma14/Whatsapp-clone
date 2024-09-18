import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    // Initialize with null, to make it clear when the user is not logged in
    const [account, setAccount] = useState(null); 
    const [person, setPerson] = useState({});

    return (
        <AccountContext.Provider value={{ account, setAccount, person, setPerson }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;
