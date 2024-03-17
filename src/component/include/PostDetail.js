import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";
import axios from "axios"
import {toast} from "react-toastify";
import {Link} from "react-router-dom";


function PostDetail() {
    //get postId
    const {postId} = useParams();

    //get user info
    const {userData, setUserDataF} = useContext(UserContext);

    //param submit to refresh post when comment
    const [submit, setSummit] = useState(0);
    const [post, setPost] = useState({
        _id: "",
        title: "",
        detail: "",
        creator: {},
        createdAt: "",
        comments: []
    })

    //post comment info
    const [commentPost, setCommentPost] = useState({
        _id: post._id,
        detail: " ",
        userComment: " "
    })


    //handle user comment
    useEffect(() => {
        const hanldeChangeUser = () => {
            setCommentPost({...commentPost, userComment: userData ? userData.userId : null})
        }
        hanldeChangeUser();
    }, [userData]);


    //Get info about post
    useEffect(() => {
        const handleGetPost = () => {
            axios.get(`http://localhost:3001/posts/${postId}`)
                .then(response => {
                    console.log(response.data);
                    setPost({
                        ...post,
                        ...response.data
                    });
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
        handleGetPost();
    }, [postId, submit]);
    //

    //handle change textarea
    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setCommentPost({...commentPost, [e.target.name]: e.target.value});
    }

    // handle submit textarea
    function handleSummit(e) {
        e.preventDefault();
        axios.put(`http://localhost:3001/posts/${post._id}/comments`, {
            commentPost
        })
            .then(response => {
                console.log(response.data);
                setCommentPost({
                    ...commentPost,
                    detail: ""
                })
                setSummit(submit ? 0 : 1);
                toast.success("Đã comment");
            })
            .catch(error => {
                toast.error("Hệ thống lỗi");
            });
    }


    function renderComment(comments) {
        if (comments)
            return (
                <div>
                    <h4>Bình luận</h4>
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <div className="container">
                                <div className="col-12">
                                    <div className="task"
                                         draggable="true"
                                         style={{
                                             position: "relative",
                                             color: "#2e2e2f",
                                             cursor: "move",
                                             backgroundColor: "#e7e3e3",
                                             padding: "1rem",
                                             borderRadius: "8px",
                                             boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px",
                                             marginBottom: "1rem",
                                             border: "3px dashed transparent",
                                             maxƯidth: "350px",


                                         }}

                                    >
                                        <div className="tags"
                                             style={{
                                                 width: "100%",
                                                 display: "flex",
                                                 alignItems: "center",
                                                 justifyContent: "space-between"
                                             }}
                                        >
                                            <div>
                                                <img src="https://img.icons8.com/?size=50&id=9q3GMpxNIMjC&format=png"
                                                     alt=""/>
                                                <span className="tag"
                                                      style={{
                                                          borderRadius: "100px",
                                                          padding: "4px 13px",
                                                          fontSize: "12px",
                                                          color: "#ffffff",
                                                          backgroundColor: "#1389eb"
                                                      }}
                                                >{comment.userComment.fullname}</span>
                                            </div>


                                        </div>
                                        <p style={{
                                            fontSize: "15px",
                                            margin: "1.2rem 0"

                                        }}>{
                                            comment.detail
                                        }</p>
                                        <div className="stats"
                                             style={{
                                                 position: "relative",
                                                 width: "100%",
                                                 color: "#9fa4aa",
                                                 fontSize: "12px",
                                                 display: "flex",
                                                 alignItems: "center",
                                                 justifyContent: "space-between"

                                             }}
                                        >
                                            <div
                                                style={{
                                                    marginRight: "1rem",
                                                    height: "20px",
                                                    display: "flex",
                                                    alignItems: 'center',
                                                    cursor: 'pointer'

                                                }}
                                            >
                                                <div>
                                                    <img src="https://img.icons8.com/?size=20&id=106850&format=png"
                                                         alt=""/>
                                                    <span className="m-1">
                                                        {new Date(comment.createdAt).getDate()}/{new Date(comment.createdAt).getMonth() + 1}/ {new Date(comment.createdAt).getFullYear()}
                                                    </span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>

            )
    }

    return (
        <div>
            <div>


            </div>

            <div className="container mt-3 mb-5">
                <div className="col-12">
                    <button className="btn">
                        <img src="https://img.icons8.com/?size=30&id=86203&format=png" alt=""/>
                        <Link to="/forum">Quay lại</Link>
                    </button>

                </div>

                <div className="col-12">
                    <div className="task"
                         draggable="true"
                         style={{
                             position: "relative",
                             color: "#2e2e2f",
                             cursor: "move",
                             backgroundColor: "#f6f1f1",
                             padding: "1rem",
                             borderRadius: "8px",
                             boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px",
                             marginBottom: "1rem",
                             border: "3px dashed transparent",
                             maxƯidth: "350px",


                         }}

                    >
                        <div className="tags"
                             style={{
                                 width: "100%",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "space-between"
                             }}
                        >
                            <div>
                                <img src="https://img.icons8.com/?size=50&id=9q3GMpxNIMjC&format=png" alt=""/>
                                <span className="tag"
                                      style={{
                                          borderRadius: "100px",
                                          padding: "4px 13px",
                                          fontSize: "12px",
                                          color: "#ffffff",
                                          backgroundColor: "#1389eb"
                                      }}
                                >{post.creator.fullname}</span>
                            </div>


                        </div>
                        <h3 style={{paddingLeft: "10px"}}>{post.title}</h3>
                        <p style={{
                            fontSize: "15px",
                            margin: "1.2rem 0"

                        }}>{
                            post.detail
                        }</p>
                        <div className="stats"
                             style={{
                                 position: "relative",
                                 width: "100%",
                                 color: "#9fa4aa",
                                 fontSize: "12px",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "space-between"

                             }}
                        >
                            <div
                                style={{
                                    marginRight: "1rem",
                                    height: "20px",
                                    display: "flex",
                                    alignItems: 'center',
                                    cursor: 'pointer'

                                }}
                            >
                                <div>
                                    <img src="https://img.icons8.com/?size=20&id=106850&format=png"
                                         alt=""/>
                                    <span className="m-1">
                                                        {new Date(post.createdAt).getDate()}/{new Date(post.createdAt).getMonth() + 1}/ {new Date(post.createdAt).getFullYear()}
                                                    </span>
                                </div>
                                <div>
                                    <img src="https://img.icons8.com/?size=20&id=jOjH1Mt48Fp1&format=png" alt=""/>

                                    <span  className="m-1">
                                         {post.comments.length}
                                    </span>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>


            <div className="container">

                {
                    post.title ?
                        renderComment(post.comments)
                        : <div></div>
                }
            </div>
            {/*<div>{*/}
            {/*    userData ?*/}
            {/*        <form action="" onSubmit={handleSummit}>*/}
            {/*     <textarea name="detail" onChange={handleChange} value={commentPost.detail} id="" cols="30" rows="10">*/}

            {/*     </textarea>*/}
            {/*            <button type="submit">Summit</button>*/}
            {/*        </form> : <></>*/}

            {/*}*/}
            {/*</div>*/}

            <div>
                <section style={{}}>
                    <div className="container my-5 py-5 text-dark"

                    >
                        <div className="row d-flex justify-content-center">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <div className="d-flex flex-start w-100">


                                            <div className="w-100">
                                                <h5><img
                                                    src="https://img.icons8.com/?size=50&id=9q3GMpxNIMjC&format=png"
                                                    alt=""/>Thêm bình luận</h5>

                                                <div className="form-outline">
                                                    <textarea className="form-control" id="textAreaExample"
                                                              style={{
                                                                  backgroundColor: "#e7e3e3"
                                                              }}
                                                              onChange={handleChange}
                                                              value={commentPost.detail}
                                                              name="detail"
                                                              rows="4"></textarea>

                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <button type="button" className="btn"
                                                            style={{backgroundColor: "blueviolet", color: "white"}}
                                                            onClick={handleSummit}
                                                    >
                                                        Thêm
                                                        <img width="32" height="32" src="https://img.icons8.com/external-anggara-filled-outline-anggara-putra/32/000000/external-send-social-media-interface-anggara-filled-outline-anggara-putra.png" alt="external-send-social-media-interface-anggara-filled-outline-anggara-putra"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    )
}

export default PostDetail;