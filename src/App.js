/*eslint-disable*/
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap';
import bg from './bg_main.jpg';
import data from './data.js';
import {Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Detail from './pages/Detail.js'

console.log(data);

function App() {
    const [items, setItems] = useState(data);
    let navigate = useNavigate();
    return (
        <div className="App">

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/detail">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <button onClick={() => {navigate('detail')}}>상세페이지 이동</button>
                        <button onClick={() => {navigate(-1)}}>이전페이지</button>
                        <button onClick={() => {navigate(1)}}>다음페이지</button>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<>
                    <div className="main-bg"></div>

                    {/*컴포넌트화 한후 데이터 바인딩 시킨 버전*/}
                    <ItemsList items={items}></ItemsList></>}></Route>
                <Route path="/detail/:id" element={<Detail items={items}/>}></Route>
                <Route path="/cart" element={<div>장바구니 페이지</div>}></Route>
                <Route path="/about" element={<About/>}>
                    <Route path="member" element={<div>멤버 소개</div>}></Route>
                    <Route path="loc" element={<div>오시는 길</div>}></Route>
                </Route>
                {/*
                    1. /event/one 페이지 접속 시 생일 축하 쿠폰 이벤트 표시
                    2. /event/two 페이지 접속 시 첫 주문 배송비 무료 이벤트 표시
                */}
                <Route path="/event" element={<Event/>}>
                    <Route path="one" element={<div>생일 축하 쿠폰 이벤트</div>}></Route>
                    <Route path="two" element={<div>첫 주문 배송비 무료 이벤트</div>}></Route>
                </Route>
                <Route path="*" element={<div>404 page</div>}/>
            </Routes>


            {/*컴포넌트화 안시킨 하드코딩 버전*/}
            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-4">*/}
            {/*            <div className="image-box">*/}
            {/*                <img className="image-thumbnail" src={process.env.PUBLIC_URL+'/item1.jpg'}></img>*/}

            {/*            </div>*/}
            {/*            <h4>{items[0].title}</h4>*/}
            {/*            <p>{items[0].content}</p>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-4">*/}
            {/*            <div className="image-box">*/}
            {/*                <img className="image-thumbnail" src={process.env.PUBLIC_URL + '/item2.jpg'}></img>*/}

            {/*            </div>*/}
            {/*            <h4>{items[1].title}</h4>*/}
            {/*            <p>{items[1].content}</p>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-4">*/}
            {/*            <div className="image-box">*/}
            {/*                <img className="image-thumbnail" src={process.env.PUBLIC_URL + '/item3.jpg'}></img>*/}

            {/*            </div>*/}
            {/*            <h4>{items[2].title}</h4>*/}
            {/*            <p>{items[2].content}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

function About(){
    return(
        <div>
            <h2>about 페이지</h2>
            <Outlet>

            </Outlet>
        </div>
    )
}
function Event(){
    return(
        <div>
            <h2>event 페이지</h2>
            <Outlet>

            </Outlet>
        </div>
    )
}
function ItemsList({ items }) {
    return (
        <div className="container">
            <div className="row">
                {items.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="image-box">
                            <img className="image-thumbnail" src={`${process.env.PUBLIC_URL}/${`item${index + 1}.jpg`}`} alt={`item-${index + 1}`}></img>
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default App;
