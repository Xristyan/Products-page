import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import modalReducer from "./modalSlice";
import screenWidthReducer from "./screenWidthSlice";
import sortReducer from "./sortSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    filters: filterReducer,
    modal: modalReducer,
    screenWidth: screenWidthReducer,
    sort: sortReducer,
    cart: cartReducer,
  },
});
export default store;
