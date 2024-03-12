import {configureStore, createSlice} from "@reduxjs/toolkit";
import user from './store/userSlice.js';

let stock = createSlice({
    name : 'stock',
    initialState : [7,8,9]
})


let cart = createSlice({
    name : 'cart',
    initialState : [
        {
            id : 0,
            title : "잔치국수",
            content : "내가 가장 좋아하는 음식",
            count :2,
            price : 5000
        },

        {
            id : 1,
            title : "김치찌개",
            content : "나의 한식 1대장",
            count :6,
            price : 9000
        },

        {
            id : 2,
            title : "볶음밥",
            content : "최근엔 이거지,,",
            count :8,
            price : 8000
        }
    ]
})

export default configureStore({
    reducer:{
        user : user.reducer,
        cart : cart.reducer,
        stock : stock.reducer
    }
})

export let {changeName, increase} = user.actions