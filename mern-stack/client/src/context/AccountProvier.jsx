import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    // Initialize with null, to make it clear when the user is not logged in
    const [account, setAccount] = useState(null); 

    return (
        <AccountContext.Provider value={{ account, setAccount }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;
