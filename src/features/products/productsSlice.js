import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "../../SHOP_DATA";

// initial state
const initialState = {
  products: SHOP_DATA,
};

// reducer
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// dispatch actions
export const {} = productsSlice.actions;
// selectors
export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
