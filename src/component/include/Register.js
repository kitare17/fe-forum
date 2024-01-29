import {Link} from "react-router-dom";

function Register() {
    return (
        <div>
            <div style={{backgroundColor: "#ff9326"}} className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                        <p className="fs-5 fw-bold text-primary">Đăng kí tài khoản mới</p>
                        <h3 className="display-5 mb-5 text-white">Bạn vui lòng nhập thông tin bên dưới nhé!!</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="bg-light rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0" id="gname"
                                                   placeholder="Gurdian Name"/>
                                            <label htmlFor="gname">Họ và tên</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control border-0" id="gmail"
                                                   placeholder="Gurdian Email"/>
                                            <label htmlFor="gmail"> Email</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0" id="cname"
                                                   placeholder="Child Name"/>
                                            <label htmlFor="cname">Số điện thoại</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0" id="cage"
                                                   placeholder="Child Age"/>
                                            <label htmlFor="cage">Tên đăng nhập</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control border-0" id="cage"
                                                   placeholder="Child Age"/>
                                            <label htmlFor="cage">Mật khẩu</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control border-0" id="cage"
                                                   placeholder="Child Age"/>
                                            <label htmlFor="cage">Nhập lại mật khẩu</label>
                                        </div>
                                    </div>

                                    <div className="col-12  container">
                                        <div className="row">
                                            <Link to='/login' className="col-md-5 m-md-0 m-3" >Đã có tài khoản?</Link>

                                            <button className="btn btn-primary py-3 px-4 col-md-2" type="submit">Đăng kí</button>
                                        </div>

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

export default Register;