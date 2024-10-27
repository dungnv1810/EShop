import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  toTalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action){
      const newItem = action.payload;
      const itemIndex = state.products.find(item => item.id === newItem.id);
      if(itemIndex){
        itemIndex.quantity++;
        itemIndex.toTalPrice += newItem.price
      }else{
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          toTalPrice: newItem.price,
          image: newItem.image
        })
      }
      state.toTalPrice += newItem.price;
      state.totalQuantity++
    }
  }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
