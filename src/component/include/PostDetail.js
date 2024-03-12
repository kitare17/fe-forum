import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";
import axios from "axios"
import {toast} from "react-toastify";

function PostDetail() {
    //get postId
    const {postId} = useParams();

    //get user info
    const {userData, setUserDataF} = useContext(UserContext);

    //param submit to refresh post when comment
    const [submit, setSummit] = useState(0);
    const [post, setPost] = useState({
        _id: postId,
        title: "",
        detail: "",
        creator: {},
        createdAt: "",
        comments: []
    })

    //post comment info
    const [commentPost, setCommentPost] = useState({
        _id: postId,
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
            axios.get('http://localhost:3001/posts/65e983e270330b6e4f3ac2a6')
                .then(response => {
                    console.log(response.data);
                    setPost(response.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
        handleGetPost();
    }, [submit]);


    //handle change textarea
    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setCommentPost({...commentPost, [e.target.name]: e.target.value});
    }

    // handle submit textarea
    function handleSummit(e) {
        e.preventDefault();
        axios.put(`http://localhost:3001/posts/${commentPost._id}/comments`, {
            commentPost
        })
            .then(response => {
                console.log(response.data);
                setCommentPost({
                    ...commentPost,
                    detail: ""
                })
                setSummit(submit ? 0 : 1);
            })
            .catch(error => {
                toast.error("Hệ thống lỗi");
            });
    }

    function renderComment(comments) {
        if (comments)
            return (
                <div>
                    <h1>Comment</h1>
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <p>{comment.detail}</p>
                            <p>{comment.userComment.fullname}</p>
                        </div>
                    ))}
                </div>

            )
    }

    return (
        <div>Post detail {postId}
            <div>
                Chi tiết
                {
                    post.title ?
                        post.title + " " + post.title + " " + JSON.stringify(post.creator) + " " + post.createdAt : ""
                }
                Comment
                {
                    post.title ?
                        renderComment(post.comments)
                        : <div></div>
                }
            </div>
            <div>{
                userData ?
                    <form action="" onSubmit={handleSummit}>
                 <textarea name="detail" onChange={handleChange} value={commentPost.detail} id="" cols="30" rows="10">

                 </textarea>
                        <button type="submit">Summit</button>
                    </form> : <></>

            }


            </div>
        </div>


    )
}

export default PostDetail;