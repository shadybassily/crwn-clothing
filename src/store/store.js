import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './slicers/userSlice'
import cartReducer from './slicers/cart/cartSlice'
import directoryReducer from './slicers/directory'
import collectionsReducer from './slicers/collections'
//persist
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
  user:userReducer,
  cart:cartReducer,
  directory: directoryReducer,
  collections:collectionsReducer
})
const persistConfig = {
  key:'root',
  storage,
  whitelist:['cart']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false  }).concat(logger),
})

export const persistor = persistStore(store)