import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems
        .concat()
        .find((item) => item.id === action.payload.id);
      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload, qty: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    incrementCartItem: (state, action) => {
      console.log(action.payload);
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementCartItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    },
    calculateTotal: (state, action) => {
      state.total = state.cartItems.reduce(
        (total, item) => total + item.qty * item.price,
        0
      );
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

// dispatch functions
export const {
  addToCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
  calculateTotal,
  clearCart,
} = cartSlice.actions;

// selector functions
export const selectCartItems = (state) => state.cart.cartItems;
export const selectAmount = (state) => state.cart.total;

export default cartSlice.reducer;
