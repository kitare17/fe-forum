import axios from "axios";
import {useEffect, useState} from "react";
import LoadData from "./LoadData";
import Button from "../elements/Button";

import PaginationComponent from "../pagination";


import {
    Container,
    Row,
    Col,
    Image,
    Alert,
    Form,
    FormControl,
    ListGroup,
} from "react-bootstrap";
import forumDatas from "../../data";

function Forum() {
    // let [posts,setPosts]=useState();
    //
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const result = await axios('http://localhost:3001/posts');
    //         setPosts(result.data);
    //
    // }
    // fetchData();
    // },[]);

    const listPosts = forumDatas;


    return (
        // <div className="container">
        // <h1 className="text-danger">Forum</h1>
        //     {posts?<>
        //             <h2>{posts[0].title}</h2>
        //             <p>{posts[0].detail}</p>
        //             <p>{posts[0].createdAt}</p>
        //             <p>{posts[0].statusPost}</p>
        //         </>
        //         :<LoadData></LoadData>}
        //     <Button
        //     content="Đăng nhập"
        //     color="#ff5e27"
        //     hoverColor="#ff7a27"
        //     link="/login"
        //     ></Button>
        // </div>


        <Container style={{padding: "2% 4%"}}>


            <Row
                className="p-title"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    maxWidth: "100%",
                }}
            >
                <Col xs={12}>
                    <p
                        className="p-title-value"
                        style={{
                            padding: 0,
                            margin: "0 0 3px 0",
                            fontSize: "1.7rem",
                            fontWeight: 400,
                            marginRight: "auto",
                            minWidth: 0,
                            color: "#141618",
                            fontFamily:
                                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                        }}
                    >
                        <Image
                            src="img/4.png"
                            className="cv6-node--img"
                            style={{
                                maxHeight: "32px",
                                marginRight: "5px",
                                verticalAlign: "bottom",
                            }}
                        />
                        &nbsp;Chuyện Trò Linh Tinh™
                    </p>
                </Col>
            </Row>
            {/* banner */}
            <Alert
                variant="primary"
                className="notice js-notice notice--primary notice--hasImage"
                style={{
                    margin: "20px 0",
                    fontSize: "1.4rem",
                    borderRadius: "4px",
                    color: "#141618",
                    background: "#fff",
                    border: "2px solid #2196f3",
                }}
            >
                <p style={{margin: "0", padding: "0 15px", fontSize: "1rem"}}>
                    <Image src="img/user-ava.png" alt="" width={"48px"} height={"48px"}/>
                    &nbsp; Cùng tham gia cộng đồng <strong>FuOverflow </strong>trên
                    Facebook&nbsp;
                    <strong>
                        <a
                            href="https://www.facebook.com/groups/fuoverflow"
                            target="_blank"
                        >
                            www.facebook.com/groups/fuoverflow
                        </a>
                    </strong>
                </p>
            </Alert>
            <span
                className="search-title"
                style={{
                    fontWeight: 600,
                    color: "#535b63",
                }}
            >
        Cộng Đồng
      </span>
            <Row
                className="block-body"
                style={{
                    borderBottomLeftRadius: "3px",
                    borderBottomRightRadius: "3px",
                    listStyle: "none",
                    margin: "10px 0 20px",
                    padding: 0,
                    color: "#141618",
                    background: "#fff",
                    borderWidth: 0,
                    borderStyle: "solid",
                    borderTopColor: "#e0e0e0",
                    borderRightColor: "#e0e0e0",
                    borderBottomColor: "#e0e0e0",
                    borderLeftColor: "#e0e0e0",
                    borderRadius: "4px",
                    boxShadow:
                        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
                    width: "300px",
                }}
            >
                <Col xs={12}>
                    <Form>
                        <FormControl
                            type="text"
                            placeholder="Tìm kiếm nhanh..."
                            className="search-bar"
                            style={{
                                fontSize: "0.8rem",
                                color: "#141618",
                                background: "#f9fafa",
                                padding: "6px",
                                borderRadius: "4px",
                                display: "block",
                                width: "100%",
                                lineHeight: 1.4,
                                textAlign: "left",
                                wordWrap: "break-word",
                                WebkitAppearance: "none", // Note: React automatically applies vendor prefixes, so you might not need this
                                MozAppearance: "none", // Same as above, might not be necessary
                                appearance: "none",
                                WebkitTransition: "all 0.2s ease",
                                transition: "all 0.2s ease",
                                border: "none",
                                outline: "none",
                            }}
                        />
                    </Form>
                </Col>
            </Row>


            <PaginationComponent/>

            <Container
                className="block-container uix_discussionList"
                style={{
                    color: "#141618",
                    borderRadius: "4px",
                    background: "#fff",
                    borderWidth: 0,
                    borderStyle: "solid",
                    borderTopColor: "#e0e0e0",
                    borderRightColor: "#e0e0e0",
                    borderBottomColor: "#e0e0e0",
                    borderLeftColor: "#e0e0e0",
                    boxShadow:
                        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
                    marginBottom: "1rem",
                    padding: 0,
                }}
            >
                <h3
                    className="block-minorHeader uix_threadListSeparator"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.8rem",
                        color: "#535b63",
                        background: "#f3f4f5",
                        borderTop: "1px solid #e0e0e0",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        padding: "15px",
                        margin: 0,
                        fontWeight: 400,
                        textDecoration: "none",
                        textTransform: "uppercase",
                    }}
                >
                    Bảng tin
                </h3>


                {/*Tin chính*/}
                <ListGroup variant="flush">


                    {listPosts.map((item, index) => (
                        <ListGroup.Item
                            key={index}
                            className="structItem"
                            style={{
                                padding: 0,
                                display: "table",
                                tableLayout: "fixed",
                                borderTop: "1px solid #e0e0e0",
                                listStyle: "none",
                                margin: 0,
                                width: "100%",
                                borderCollapse: "collapse",
                            }}
                        >

                            {/*Img avata*/}
                            <Col
                                xs="auto"
                                className="structItem-cell structItem-cell--icon"
                                style={{
                                    width: "66px",
                                    position: "relative",
                                    display: "table-cell",
                                    verticalAlign: "top",
                                    padding: "15px",
                                }}
                            >
                                <Image
                                    src={item.author_avatar}
                                    roundedCircle
                                    style={{
                                        textIndent: "100%",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        wordWrap: "normal",
                                        display: "block",
                                        borderRadius: "inherit",
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "#fff",
                                        maxWidth: "100%",
                                        borderStyle: "none",
                                    }}
                                />
                            </Col>


                            <Col
                                className="structItem-cell structItem-cell--main"
                                style={{
                                    paddingLeft: 0,
                                    display: "table-cell",
                                    verticalAlign: "top",
                                    padding: "15px",
                                }}
                            >
                                <div
                                    className="structItem-title"
                                    style={{
                                        margin: 0,
                                        padding: 0,
                                        fontSize: "0.9rem",
                                        color: "#141618",
                                        fontWeight: 400,
                                    }}
                                >
                                    <a
                                        href="#"
                                        className="labelLink"
                                        rel="nofollow"
                                        style={{
                                            color: "inherit",
                                            marginRight: "6px",
                                            textDecoration: "none",
                                        }}
                                    >
                    <span
                        className="label label--yellow"
                        style={{
                            color: "white",
                            background: "red",
                            borderColor: "#ffe608",
                            display: "inline-block",
                            padding: "1px 1em",
                            border: "1px solid transparent",
                            borderRadius: "4px",
                            fontSize: "80%",
                            lineHeight: 1.26,
                            textDecoration: "none",
                        }}
                    >
                      Hot
                    </span>
                                        {item.title}
                                    </a>

                                </div>
                                <div
                                    className="structItem-minor"
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#dbc114",
                                        marginBottom: 0,
                                    }}
                                >
                                    {item.author}
                                </div>
                            </Col>






                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>


            <PaginationComponent/>
        </Container>

    );
}

export default Forum;