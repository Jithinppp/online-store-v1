import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCollectionsAndDocuments } from "../../utils/firebase.utils";

// initial state
const initialState = {
  products: null,
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await getCollectionsAndDocuments("products");
    return res;
  }
);

// reducer
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// dispatch actions
export const { setProducts } = productsSlice.actions;
// selectors
export const selectProducts = (state) => state.products.products;
export const selectProductsStatus = (state) => state.products.status;

export default productsSlice.reducer;
