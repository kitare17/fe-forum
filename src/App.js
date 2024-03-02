import logo from './logo.svg';
import './index.css';
import Footer from './component/header-footer/Footer';
import Header from "./component/header-footer/Header";
import Home from "./component/include/Home";
import Forum from "./component/include/Forum";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./component/include/Register";
import Login from "./component/include/Login";
import Dish from "./component/include/Dish";
import {createContext, useState} from "react";
// import {UserContext} from "./component/context/UserContext"
function App() {
    const [user,setUser]=useState(null);
    return (

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
    );
}

export default App;
