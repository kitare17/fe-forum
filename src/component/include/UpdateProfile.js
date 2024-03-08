import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function UpdateProfile(){
    const navigate=useNavigate();
    const [formUpdate, setFormUpdate] = useState({
        username: "",
        password: "",
        phone:"",
        email:"",
        fullname: ""
    })

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFormUpdate({...formUpdate, [e.target.name]: e.target.value});
    }

    const handleSummit = async () => {
        console.log(formUpdate);
        const dataRes = await axios.post("http://localhost:3001/users/update-profile", formUpdate);
        if (dataRes.data !== "successfully") { //fix cho nay la xong ? sua ca BE
            setMessage("fail")
        } else {
        setMessage(dataRes.data)
            
        }
    }

    return(
        <div>

            <div className="container mt-4">
                <h2 className="text-center">Cập nhật thông tin cá nhân</h2>
                <form action="">

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input  onChange={handleChange} type="text" className="form-control" id="username" value="username" disabled name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input  onChange={handleChange} type="password" className="form-control" id="password" value="********" disabled name="password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">Fullname:</label>
                    <input  onChange={handleChange}  type="text" className="form-control" id="fullname" name="fullname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input  onChange={handleChange} type="email" className="form-control" id="email" name = "email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input  onChange={handleChange} type="tel" className="form-control" id="phone"name="phone" />
                </div>
                <div>
                  {/* Hiển thị thông báo */}
                    <p>{message}</p>
                 </div>
                <div className="text-center mb-4">
                    <button onClick={handleSummit}  className="btn btn-warning mr-2">Cập nhật</button>
                </div>
                
                </form>
            </div>

        </div>
    )
}
export default UpdateProfile;