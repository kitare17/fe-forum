import axios  from "axios";
import {useEffect, useState} from "react";
import LoadData from "./LoadData";
import Button from "../elements/Button";
function Forum() {
    let [posts,setPosts]=useState();

    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios('http://localhost:3001/posts');
            setPosts(result.data);

    }
    fetchData();
    },[]);

    return (
        <div className="container">
        <h1 className="text-danger">Forum</h1>
            {posts?<>
                    <h2>{posts[0].title}</h2>
                    <p>{posts[0].detail}</p>
                    <p>{posts[0].createdAt}</p>
                    <p>{posts[0].statusPost}</p>
                </>
                :<LoadData></LoadData>}
            <Button
            content="Đăng nhập"
            color="#ff5e27"
            hoverColor="#ff7a27"
            link="/login"
            ></Button>
        </div>
    );
}

export default Forum;