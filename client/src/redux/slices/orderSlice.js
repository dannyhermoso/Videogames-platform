import { createSlice } from "@reduxjs/toolkit";

const orderSlice= createSlice({
name:'orders',
initialState:{

    orders:[]
    
},
reducers:{
    getAllOrders:(state,action)=>{
        state.orders = action.payload;
    }
}




})

export const {getAllOrders}= orderSlice.actions
export default orderSlice.reducer