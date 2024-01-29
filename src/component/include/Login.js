import {Link} from "react-router-dom";

function Login() {
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
                                            <input type="text" className="form-control border-0" id="cage"
                                                   placeholder="Child Age"/>
                                            <label htmlFor="cage">Tên đăng nhập</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control border-0" id="cage"
                                                   placeholder="Child Age"/>
                                            <label htmlFor="cage">Mật khẩu</label>
                                        </div>
                                    </div>


                                    <div className="col-12 text-center d-flex justify-content-lg-between ">
                                        <Link to='/register'>Chưa có tài khoản đăng kí</Link>

                                        <button className="btn btn-primary py-3 px-4" type="submit">Đăng nhập</button>
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