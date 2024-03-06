/*eslint-disable*/
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap';
import bg from './bg_main.jpg';
import data from './data.js';

console.log(data);

function App() {
    const [items, setItems] = useState(data);

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="main-bg"></div>

            {/*컴포넌트화 한후 데이터 바인딩 시킨 버전*/}
            <ItemsList items={items}></ItemsList>

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
