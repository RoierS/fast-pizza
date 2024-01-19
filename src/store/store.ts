import { configureStore } from '@reduxjs/toolkit';

import CartReducer from '@/features/cart/CartSlice';
import userReducer from '@/features/user/UserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
