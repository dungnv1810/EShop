import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    }
  }
})

export const {setProducts} = cartSlice.actions;
export default cartSlice.reducer;
