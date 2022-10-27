import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import userReducer from './slicers/userSlice'
import cartReducer from './slicers/cart/cartSlice'
const rootReducer = combineReducers({
  user:userReducer,
  cart:cartReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false  }).concat(logger),
})