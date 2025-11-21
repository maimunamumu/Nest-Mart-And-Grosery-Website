import {createSlice} from "@reduxjs/toolkit"

const WishList =createSlice({
    name:"wishlist",
    initialState:{items:[]},
    reducers:{
        addToWishlist:(state,action)=>{
            state.items.push(action.payload)
        },
        removeToWishlist:(state,action)=>{
            state.items=state.items.filter(item=>item.id!==action.payload.id)
        }
    }
})

export const{addToWishlist,removeToWishlist}=WishList.actions;
export default WishList.reducer;