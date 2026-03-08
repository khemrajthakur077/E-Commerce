 import { configureStore } from "@reduxjs/toolkit"
import {CounterSlice} from "./slices/CounterSlice"
import cartReducer from "./slices/cartSlice";
 export  const store = configureStore({
  reducer :{
    counter :CounterSlice.reducer,
    cart: cartReducer,
  }
 })