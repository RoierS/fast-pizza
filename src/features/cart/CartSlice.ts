import { createSlice } from '@reduxjs/toolkit';

import { ICart } from '@/interfaces/cart';

interface ICartState {
  cart: ICart[];
}

const initialState: ICartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // payload => newItem
      state.cart.push(action.payload);
    },
    deleteFromCart(state, action) {
      // payload => pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuatity(state, action) {
      // payload => pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseQuatity(state, action) {
      // payload => pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuatity,
  decreaseQuatity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
