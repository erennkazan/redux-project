import {createSlice} from '@reduxjs/toolkit'
import courseItems from '../courseItems'

const initialState = {
    cartItems:[],
    quantity:2,
    total:0

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
});


export default cartSlice.reducer;