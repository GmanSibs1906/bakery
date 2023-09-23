import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../assets/data/productData";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: 
       (state, {payload}) => {
        const product = products.find((item)=> item.product_id == payload)
        const itemAlreadyInCart = state.cartItems.find((item) => item.productId === product.product_id)

        if (!itemAlreadyInCart) {
          state.cartItems.push(product)
        }
        
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== productId
      );
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.product_id === productId
      );
      cartItem.quantity += 1;
    },
    decreaseQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) => item.product_id === payload
      );
      cartItem.quantity -= 1;
    },
    calculateTotals: (state) => {
      let qty = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        qty += item.quantity;
        amount += item.price * item.quantity;
      });
      state.quantity = qty;
      state.total = amount;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
