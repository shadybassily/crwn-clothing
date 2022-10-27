import { createSlice, createDraftSafeSelector } from "@reduxjs/toolkit";
const initialState = {
  hidden: true,
  cartItems: [],
};

const addItemToCart = (cartItems, cartItemToAdd) => {
  const isCartItemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (isCartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const getMemoizedCartItems = createDraftSafeSelector(
  (state) => state.cart.cartItems,
  (cartItems) => {
    console.log('called')
    let count;
   count = cartItems.reduce((acc, cartItem)=> acc + cartItem.quantity,0)
   return count <= 9 ? count : '9+'
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartToggle: (state, action) => {
      state.hidden = action.payload;
    },
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
  },
});
export const { cartToggle, addItem } = cartSlice.actions;

export default cartSlice.reducer;
