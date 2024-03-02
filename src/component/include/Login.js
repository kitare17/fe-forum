import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import { Navigate  } from 'react-router-dom';
import {UserContext} from "../context/UserContext"
function Login() {
    const navigate=useNavigate();
    const [formLogin, setFormLogin] = useState({
        username: "",
        password: ""
    })
    //var userContext=useContext(UserContext);

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFormLogin({...formLogin, [e.target.name]: e.target.value});
    }
    const handleSummit = async () => {
        console.log(formLogin);
        const dataRes = await axios.post("http://localhost:3001/users/login", formLogin);


        const dataLocalStorage = dataRes.data;
        console.log(dataLocalStorage)
        localStorage.setItem("userData", JSON.stringify(dataLocalStorage));
        console.log(localStorage.getItem("userData"));
        console.log(dataLocalStorage!==null)
        if (dataLocalStorage !== null) navigate("/");


    }
    return (
        <div>
            <div style={{backgroundColor: "#ff9326"}} className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                        <h3 className="display-5 mb-5 text-white">Đăng nhập</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="bg-light rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input onChange={handleChange} type="text" className="form-control border-0"
                                                   id="username" name="username"
                                                   placeholder="Child Age"/>
                                            <label htmlFor="cage">Tên đăng nhập</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input onChange={handleChange} type="password"
                                                   className="form-control border-0" id="username" name="password"
                                                   placeholder="Child Age"/>
                                            <label htmlFor="cage">Mật khẩu</label>
                                        </div>
                                    </div>


                                    <div className="col-12 text-center d-sm-flex justify-content-sm-between ">
                                        <Link to='/register'>Chưa có tài khoản đăng kí</Link>

                                        <button onClick={handleSummit} className="btn btn-primary  py-3 px-4"
                                                style={{"marginLeft": "15px"}} type="submit">Đăng nhập
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;