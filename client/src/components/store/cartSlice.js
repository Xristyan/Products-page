import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsCount: 0,
    currentItem: {},
  },
  reducers: {
    addProduct: (state, actions) => {
      state.productsCount = state.productsCount + 1;
      state.currentItem = actions.payload;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
