import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: true,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartToggle: (state,payload) => {
        state.hidden = payload
    },
  },
});
export const { cartToggle } = cartSlice.actions

export default cartSlice.reducer