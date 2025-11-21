import {createSlice} from "@reduxjs/toolkit"
import { act } from "react";

const Cart =createSlice({
    name:"cart",
    initialState:{value:0,items:[]},
    reducers:{
        addToCart:(state,action)=>{
             state.value++;
             state.items.push(action.payload)
        },
        removeToCart:(state,action)=>{
            state.items=state.items.filter(item=> item.id!==action.payload.id)
        }
    }
})

export const {addToCart,removeToCart}=Cart.actions;
export default Cart.reducer;