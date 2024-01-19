import { createSlice } from '@reduxjs/toolkit';

import { ICart } from '@/interfaces/cart';
import { RootState } from '@/store/store';
import { localStorageHelper } from '@/utils/localStorageHelper';

interface ICartState {
  cart: ICart[];
}

const initialState: ICartState = {
  cart: localStorageHelper('cart', 'load'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // payload => newItem
      state.cart.push(action.payload);
      localStorageHelper('cart', 'save', state.cart);
    },
    deleteFromCart(state, action) {
      // payload => pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
      localStorageHelper('cart', 'save', state.cart);
    },
    increaseQuatity(state, action) {
      // payload => pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
        localStorageHelper('cart', 'save', state.cart);
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
        localStorageHelper('cart', 'save', state.cart);
      }
    },
    clearCart(state) {
      state.cart = [];
      localStorageHelper('cart', 'save', state.cart);
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
