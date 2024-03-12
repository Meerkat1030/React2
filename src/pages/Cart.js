import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeName, increase} from "../store/userSlice.js";

function Cart() {

    let dispatch = useDispatch();
    let user = useSelector((state) => {
        return state.user
    })
    console.log(user);

    let state = useSelector((state) => state)
    return (
        <div>
            {state.user.name}의 장바구니
            {state.user.age}살 입니다.
            <Table>
                <thead>
                <tr>

                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
                </thead>
                <tbody>

                {
                    state.cart.map((item, i) =>
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].title}</td>
                            <td>{state.cart[i].count}</td>
                            <td>안녕</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>

            <button onClick={()=>{
                dispatch(changeName())
            }}>이름 변경 버튼</button>

            <button onClick={()=>{
                dispatch(increase(20))
            }}>나이 변경 버튼</button>
        </div>
    )
}

export default Cart