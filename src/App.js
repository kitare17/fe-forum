import './index.css';
import Footer from './component/header-footer/Footer';
import Header from "./component/header-footer/Header";
import Home from "./component/include/Home";
import {Route, Routes} from "react-router-dom";
import Register from "./component/include/Register";
import Login from "./component/include/Login";
import {UserProvider} from "./component/context/UserContext";

import UpdateProfile from "./component/include/UpdateProfile";
import Forum from "./component/include/Forum";
import PostDetail from "./component/include/PostDetail";

function App() {

    return (
        <UserProvider  >
        <div className="App">

                <Header></Header>


            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/forum' element={<Forum/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/update-profile' element={<UpdateProfile/>}></Route>
                <Route path='/update-profile/ok' element={<UpdateProfile/>}></Route>
                <Route path='/posts/:postId' element={<PostDetail/>}></Route>

            </Routes>
            <Footer></Footer>

        </div>
        </UserProvider>

    );
}

export default App;
