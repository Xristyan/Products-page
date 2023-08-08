import { createSlice } from "@reduxjs/toolkit";
const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
    showAlert: false,
  },
  reducers: {
    toggleModal: (state, actions) => {
      state.show = actions.payload;
    },
    toggleCartAlert: (state) => {
      state.showAlert = !state.showAlert;
    },
  },
});
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
