import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:null
}

export const selectAllCollections = (state)=>state.collections.data
const selectCollectionName = (state,collectionName) => collectionName
export const selectCollectionItemsByName = createSelector(
  selectAllCollections,
  selectCollectionName,
  (collection, collectionName)=> collection ? collection[collectionName]?.items : null
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

export default collectionsSlice.reducer