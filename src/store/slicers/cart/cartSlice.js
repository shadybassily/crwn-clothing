import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";
const initialState = {
  hidden: true,
  cartItems: []
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartToggle: (state,action) => {
        state.hidden = action.payload
    },
    addItem:(state, action) =>{
      state.cartItems = addItemToCart(state.cartItems, action.payload)
    }
  },
});
export const { cartToggle, addItem } = cartSlice.actions

export default cartSlice.reducer