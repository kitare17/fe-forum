import {createContext, useState} from "react";

export const UserContext = createContext();

function UserProvider({children}) {
    const [userData, setUserData] = useState(null);
    function setUserDataF(data) {
        setUserData(data);
    }
    return (
        <UserContext.Provider value={{userData, setUserDataF}}>
            {children}
        </UserContext.Provider>
    )
}


