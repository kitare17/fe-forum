import './index.css';
import Footer from './component/header-footer/Footer';
import Header from "./component/header-footer/Header";
import Home from "./component/include/Home";
import {Route, Routes} from "react-router-dom";
import Register from "./component/include/Register";
import Login from "./component/include/Login";
import Dish from "./component/include/Dish";
import {createContext, useState} from "react";

export const UserContext=createContext();
function App() {
    const [userData, setUserData] = useState(null);
    function setUserDataF(data){
        setUserData(data);
    }
    return (
        <UserContext.Provider value={{userData,setUserDataF}} >
        <div className="App">

                <Header></Header>


            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/forum' element={<Dish/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
            <Footer></Footer>

        </div>
        </UserContext.Provider>

    );
}

export default App;
