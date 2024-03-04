import './index.css';
import Footer from './component/header-footer/Footer';
import Header from "./component/header-footer/Header";
import Home from "./component/include/Home";
import {Route, Routes} from "react-router-dom";
import Register from "./component/include/Register";
import Login from "./component/include/Login";
import Dish from "./component/include/Dish";
import {useState} from "react";
import {UserProvider} from "./component/context/UserContext";
import UpdateInfo from './component/include/UpdateInfo';

function App() {

    return (
        <UserProvider  >
        <div className="App">

                <Header></Header>


            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/forum' element={<Dish/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/user/updateprofile' element={<UpdateInfo/>}></Route>
            </Routes>
            <Footer></Footer>

        </div>
        </UserProvider>

    );
}

export default App;
