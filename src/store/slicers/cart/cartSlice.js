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

const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const getMemoizedCartItems = createDraftSafeSelector(
  (state) => state.cart.cartItems,
  (cartItems) => {
    let count;
    count = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
    return count <= 9 ? count : "9+";
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
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearItem: (state, action) => {
      state.cartItems = clearItemFromCart(state.cartItems, action.payload);
    },
  },
});
export const { cartToggle, addItem, clearItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
