import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../assets/data/productData';

const initialState = {
  cartItems: products,
  quantity: 1,
  total: 0,
  isLoading: true,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  
  },
})

export const {  } = cartSlice.actions

export default cartSlice.reducer