const Header = () => {
    return (
        <div>
            <div className="container-fluid bg-warning text-dark px-0 py-0">
                    <div className="col-rtl-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
          
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0">
                        <span className="text-warning">FU-Forum
                        </span></h1>
                        
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0 ">
                        <a href="index.html" className="nav-item nav-link active fw-bold">Trang chủ</a>
                        <a href="about.html" className="nav-item nav-link fw-bold">Giới thiệu</a>
                        <a href="service.html" className="nav-item nav-link fw-bold">Diễn đàn</a>
                        <a href="contact.html" className="nav-item nav-link fw-bold">Liên hệ</a>
                    </div>
                  
                    <a href="" className="btn btn-success py-4 px-lg-3 rounded-5 d-none d-lg-block fw-bold">Gửi câu hỏi<i
                        className="fa fa-mouse-pointer ms-3"></i></a>
                </div>
            </nav>
          
        </div>
    );
}
export default Header;