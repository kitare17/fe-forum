import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../context/UserContext";
import {toast} from "react-toastify";

function UpdatePassword() {
    const navigate = useNavigate();


    const {userData, setUserDataF} = useContext(UserContext);

    const [formUpdatePass, setFormUpdatePass] = useState({
        username: "",
        oldPassword: "",
        password: "",
        confirmPassword: ""
    })

    useEffect(() => {
        if (userData.username)
            setFormUpdatePass({
                ...formUpdatePass,
                username: userData.username,
                password: userData.password,
            })
    }, [userData])



    const handleChange = (e) => {

        setFormUpdatePass({...formUpdatePass, [e.target.name]: e.target.value});
    }


    const handleSummit = async (e) => {
        e.preventDefault();
        const dataRes = await axios.put("http://localhost:3001/users/update-password", formUpdatePass)
            .then(() => {
                toast.success("Cập nhật thành công");
                setUserDataF({...userData,...formUpdatePass});
            })
            .catch((err) => {
                toast.warning("Cập nhật thất bại");
            })
        ;

    }
    console.log("==========>" + JSON.stringify(userData));
    return (
        <div>

            <div className="container mt-4">
                <h2 className="text-center">Cập nhật thông tin cá nhân</h2>
                <form action="">

                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input onChange={handleChange}
                               type="text"
                               className="form-control"
                               id="username"
                               value="username"
                               disabled
                               name="username"
                               value={formUpdatePass.username}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="fullname">Old Password:</label>
                        <input onChange={handleChange}
                               type="password"
                               className="form-control"
                               id="password"
                               name="oldPassword"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fullname">New password:</label>
                        <input onChange={handleChange}
                               type="password"
                               className="form-control"
                               id="password"
                               name="password"
                              
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fullname">Confirm password:</label>
                        <input onChange={handleChange}
                               type="password"
                               className="form-control"
                               id="confirmPassword"
                               name="confirmPassword"
                        />
                    </div>
                    
                    
                    
                    <div className="text-center mb-4">
                        <button onClick={handleSummit} className="btn btn-warning mr-2">Cập nhật</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default UpdatePassword;