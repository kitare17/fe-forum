import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div >
            <div className="container-fluid text-light px-0 py-2" style={{backgroundColor: "#f27125"}}>
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span className="fa fa-phone-alt me-2"></span>
                            <span>+012 345 6789</span>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <span className="far fa-envelope me-2"></span>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 mt-2 mb-sm-3 mb-lg-0">
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
                        <a href="about.html" className="nav-item nav-link">About</a>
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
                    <div className="d-lg-flex justify-content-lg-between">
                        <Link to="/login" className="btn main-background py-4 px-lg-4 rounded-pill  m-2  d-lg-block">
                            Đăng nhập

                        </Link>
                        <Link to="/register" className="btn btn-primary py-4 px-lg-4 py-1 rounded-pill   m-2  d-lg-block">
                            Đăng kí

                        </Link>
                    </div>

                </div>
            </nav>
        </div>
    );
}
export default Header;