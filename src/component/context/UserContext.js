import {createContext, useEffect, useState} from "react";
import {toast} from "react-toastify";

const UserContext = createContext();

function UserProvider({children}) {
    const [userData, setUserData] = useState({
        username: null,
        fullname: null,
        userId: null,
        phone: null,
        token: null,
        email: null
    });

    function setUserDataF(data) {
        setUserData(data);
    }


    return (
        <UserContext.Provider value={{userData, setUserDataF}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}


