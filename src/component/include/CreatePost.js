import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";
import axios from "axios";
import {toast} from "react-toastify";

function CreatePost() {

    const navigate = useNavigate();


    const {userData, setUserDataF} = useContext(UserContext);

    const [createPostForm, setCreatePostForm] = useState({
        title: "",
        detail: "",
        creator: "",
        statusPost: "Đang hoạt động",
        comments: []
    })

    useEffect(() => {
        if (userData.username)
            setCreatePostForm({
                ...createPostForm,
                creator: userData.userId
            })
    }, [userData])


    const handleChange = (e) => {
        setCreatePostForm({...createPostForm, [e.target.name]: e.target.value});
    }


    const handleSummit = async (e) => {
        e.preventDefault();
        const dataRes = await axios.post("http://localhost:3001/posts", createPostForm)
            .then(() => {
                toast.success("Tạo bài viết thành công");
                navigate("/forum")
            })
            .catch((err) => {
                toast.warning("Tạo bài viết thất bại");
            })
        ;

    }


    return (
        <div>
            <div>
                <div className="container mt-4">
                    <h2 className="text-center">Tạo bài viết mới</h2>
                    <form action="">

                        <div className="form-group">
                            <label htmlFor="title">Tiêu đề:</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="title"
                                value="title"
                                name="title"
                                value={createPostForm.title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="detail">Detail:</label>
                            <textarea onChange={handleChange}
                                   type="text"
                                   className="form-control"
                                   id="detail"
                                   name="detail"
                                   value={createPostForm.detail}
                            />
                        </div>
                        <div className="text-center mb-4 mt-5">
                            <button onClick={handleSummit} className="btn btn-warning mr-2">Đăng ngay</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default CreatePost;
