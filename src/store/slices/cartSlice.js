import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {

    addToCart: (state, action) => {

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // agar product already cart me hai
      if (existingItem) {
        existingItem.quantity += 1;
      } 
      
      // new product add hoga
      else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    increaseQty: (state, action) => {

      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {

      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeItem: (state, action) => {

      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

    },

    clearCart: (state) => {
      state.items = [];
    }

  }
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;