import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './features/orders/orders';
import contactsReducer from './features/contacts/contacts';

const store = configureStore({
  reducer: {
   orders: ordersReducer,
   contact: contactsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;