import axios  from "axios";
import {useEffect, useState} from "react";
import LoadData from "./LoadData";
import Button from "../elements/Button";
function Dish() {
    let [posts,setPosts]=useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios('http://localhost:3000/dishes/');
            setPosts(result.data.dish);
            console.log(result.data.dish)
        }
        fetchData();
    },[]);

    return (
        <div className="container">
            <h1 className="text-danger">Forum</h1>

            <p className="text-danger">Heloo</p>
            {posts?<>

                    <p>{posts[0].name}</p>
                    <p>{posts[0].image}</p>
                    <p>{posts[0].category}</p>
                    <p>{posts[0].description}</p>
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
export default Dish;