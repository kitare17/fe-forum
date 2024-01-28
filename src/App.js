import logo from './logo.svg';
import './index.css';
import Footer from './component/header-footer/Footer';
import Header from "./component/header-footer/Header";
import Home from "./component/include/Home";
import Forum from "./component/include/Forum";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./component/include/Register";

function App() {
    return (
        <div className="App">
            <Header></Header>

             <Routes>
                 <Route path='/' element={<Home/>}></Route>
                 <Route path='/forum' element={<Forum/>}></Route>
                 <Route path='/register' element={<Register/>}></Route>
             </Routes>

            <Footer></Footer>


        </div>
    );
}

export default App;
