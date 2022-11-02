import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:{}
}


const selectCollections = state => state.collections
const selectCollectionName = (state,collectionName) => collectionName
export const selectCollectionItemsByName = createSelector(
  selectCollections,
  selectCollectionName,
  (collection, collectionName)=> collection[collectionName].items
)

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    setShopData: (state, action) => {
        state.data = action.payload
    },
  },
});
export const { setShopData } = collectionsSlice.actions

export const selectAllCollections = (state)=>state.collections.data
export default collectionsSlice.reducer