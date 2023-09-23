import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../assets/data/productData';

const initialState = {
  cartItems: products,
  quantity: 1,
  total: 1000,
  isLoading: true,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart : (state)=> {
      state.cartItems= [];
      state.quantity = 0;
      state.total = 0;
    },
    removeItem : (state, action)=> {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item)=>item.product_id !== productId)
    },
    increaseQuantity : (state, action)=> {
      const productId = action.payload;
      const cartItem = state.cartItems.find((item)=> item.product_id === productId )
      cartItem.quantity += 1
    },
    decreaseQuantity : (state, {payload})=> {
      const cartItem = state.cartItems.find((item)=> item.product_id === payload)
      cartItem.quantity -= 1
    }
  },
})

export const { clearCart, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer