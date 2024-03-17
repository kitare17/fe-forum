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
import {ToastContainer} from "react-toastify";
import UpdatePassword from './component/include/UpdatePassword';
import CreatePost from "./component/include/CreatePost";

function App() {

    return (
        <UserProvider>
            <div className="App">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Header></Header>


                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/forum' element={<Forum/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/update-profile' element={<UpdateProfile/>}></Route>
                    <Route path='/update-password' element={<UpdatePassword/>}></Route>
                    <Route path='/posts/:postId' element={<PostDetail/>}></Route>
                    <Route path='/create-post' element={<CreatePost/>}></Route>

                </Routes>
                <Footer></Footer>

            </div>
        </UserProvider>

    );
}

export default App;
