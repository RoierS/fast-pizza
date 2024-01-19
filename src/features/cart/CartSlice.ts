import { createSlice } from '@reduxjs/toolkit';

import { ICart } from '@/interfaces/cart';
import { RootState } from '@/store/store';

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

        if (item.quantity === 0) {
          cartSlice.caseReducers.deleteFromCart(state, action);
        }
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

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((acc, curr) => curr.totalPrice + acc, 0);

export const getTotalQuantity = (state: RootState) =>
  state.cart.cart.reduce((acc, curr) => curr.quantity + acc, 0);

export const getCurrentQuantityById = (id: number) => (state: RootState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
