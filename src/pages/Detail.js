import React, {useEffect, useState} from "react";
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
    let [count, setcount] = useState(0);
    let [alert, setAlert] = useState(true);

    useEffect(() => {
        // 컴포넌트가 mount update 될 때 코드 실행됨
        console.log('useEffect 발동됨');

        // 서버에서 데이터 호출
        // 오래 걸리는 반복 연산
        // 타이머
        let timer = setTimeout(()=>{setAlert(false)}, 5000)
        // 여기 코드가 실행된다.
        return () => {
            // 여기있는게 먼저 실행되고
            clearTimeout(timer)
        }
    }, [count]);

    return (
        <div className="container">
            {
                alert == true ? <div className="alert alert-danger">
                    5초 이내 클릭 시 할인
                </div> : null
            }

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
            <button onClick={(e) => setcount(count+1)}>버튼</button>
        </div>
    )
}

export default Detail;