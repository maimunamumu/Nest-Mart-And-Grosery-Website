import {configureStore} from "@reduxjs/toolkit"
import CartReducer from "../Redux/CartSlice"
import WishList from "../Redux/WishList"

const store =configureStore({
    reducer:{
        Cart:CartReducer,
        WishList:WishList
    }
})

export default store;