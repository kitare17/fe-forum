import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../context/UserContext";
import {toast} from "react-toastify";

function UpdateProfile() {
    const navigate = useNavigate();


    const {userData, setUserDataF} = useContext(UserContext);

    const [formUpdate, setFormUpdate] = useState({
        username: "",
        password: "",
        phone: "",
        email: "",
        fullname: ""
    })


    useEffect(() => {
        if (userData.username)
            setFormUpdate({
                ...formUpdate,
                username: userData.username,
                phone: userData.phone,
                email: userData.email,
                fullname: userData.fullname
            })
    }, [userData])

    const [message, setMessage] = useState('');

    const handleChange = (e) => {

        setFormUpdate({...formUpdate, [e.target.name]: e.target.value});
    }


    const handleSummit = async (e) => {
        e.preventDefault();
        const dataRes = await axios.put("http://localhost:3001/users/update-profile", formUpdate)
            .then(() => {
                toast.success("Cập nhật thành công");
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
                               value={formUpdate.username}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fullname">Fullname:</label>
                        <input onChange={handleChange}
                               type="text"
                               className="form-control"
                               id="fullname"
                               name="fullname"
                               value={formUpdate.fullname}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleChange}
                               type="email"
                               className="form-control"
                               id="email"
                               name="email"
                               value={formUpdate.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            onChange={handleChange}
                            type="tel" className="form-control"
                            id="phone"
                            name="phone"
                            value={formUpdate.phone}
                        />
                    </div>
                    <div>
                        {/* Hiển thị thông báo */}
                        <p>{message}</p>
                    </div>
                    <div className="text-center mb-4">
                        <button onClick={handleSummit} className="btn btn-warning mr-2">Cập nhật</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default UpdateProfile;