import React from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
// css 작성
    background: ${props => props.bg};
    color : ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding: 10px;
`
function Detail(props){
    let {id} = useParams();
    let findItem = props.items.find(function (x){
        return x.id == id;
    })
    const imgUrl = process.env.PUBLIC_URL + '/item' + (Number(findItem.id)+1) + '.jpg';
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={imgUrl} width="100%"/>
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.items[id].title}</h4>
                    <p>{props.items[id].content}</p>
                    <p>{props.items[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>

                <YellowBtn bg = "yellow">버튼</YellowBtn>
                <YellowBtn bg = "blue">버튼</YellowBtn>
            </div>
        </div>
    )
}

export default Detail;