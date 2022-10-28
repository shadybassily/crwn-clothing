import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "../shop.data";
const initialState = SHOP_DATA
export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
});

export default collectionsSlice.reducer