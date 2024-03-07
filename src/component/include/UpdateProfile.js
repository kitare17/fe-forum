

function UpdateProfile(){
    return(
        <div>

            <div className="container mt-4">
                <h2 className="text-center">Cập nhật thông tin cá nhân</h2>
                <form action="">


                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" value="username" disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" value="********" disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">Fullname:</label>
                    <input type="text" className="form-control" id="fullname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" className="form-control" id="phone" />
                </div>
                <div className="text-center mb-4">
                    <button className="btn btn-warning mr-2">Cập nhật</button>
                </div>

                </form>
            </div>

        </div>
    )
}
export default UpdateProfile;