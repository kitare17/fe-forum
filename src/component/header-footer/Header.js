import {Link, useNavigate} from "react-router-dom";
import Button from "../elements/Button";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";

const Header = () => {
    const navigate=useNavigate();
    const {userData,setUserDataF}=useContext(UserContext);
    const logout=()=>{
        localStorage.removeItem("userData");
        setUserDataF(null);
        navigate("/");

    }
    return (
        <div >
            <div className="container-fluid bg-warning text-dark px-0 py-0">
                    <div className="col-rtl-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

            <nav style={{backgroundColor:"#f7f5f0"}} className="navbar navbar-expand-lg  navbar-light sticky-top p-0 mt-2 mb-sm-3 mb-lg-0">
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0">FU Forum</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarCollapse">
                    <div className="navbar-nav  p-4 p-lg-0 d-lg-flex justify-content-lg-center">
                        <Link to="/" className="nav-item nav-link active">Trang chủ</Link>
                        <Link to="/posts/65e983e270330b6e4f3ac2a6" className="nav-item nav-link">About</Link>
                        <Link to="/forum"  className="nav-item nav-link">Diễn đàn</Link>

                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light m-0">
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="quote.html" className="dropdown-item">Free Quote</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    {!userData ?
                        <div className="d-lg-flex justify-content-lg-between">

                            <div className="py-4 px-lg-4  m-2  d-lg-block">
                                <Button
                                    content="Đăng nhập"
                                    color="#ff5e27"
                                    hoverColor="#ff7a27"
                                    link="/login"
                                ></Button>
                            </div>
                            <div className="py-4 px-lg-4  m-2  ">
                                <Button
                                    content="Đăng kí"
                                    color="#0b5ed7"
                                    hoverColor="#0d6fff"
                                    link="/register"
                                ></Button>
                            </div>
                        </div>

                        :
                        <div className="d-lg-flex justify-content-center">

                            <div className="py-4 px-lg-4  m-2  ">
                                <div className="rounded dropdown "
                                     style={{
                                         marginRight:"30px",
                                         backgroundColor:"#f35b27",
                                         padding:"10px 15px"
                                }}>
                                    <div className="rounded  dropdown-toggle"  id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        {userData.fullname}
                                    </div>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><div onClick={logout} className="dropdown-item" >Đăng xuất</div></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    }
                </div>
            </nav>

        </div>
    );
}
export default Header;