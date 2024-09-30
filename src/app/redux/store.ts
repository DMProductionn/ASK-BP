import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categorySlice from './Slices/category.slice';
import productSlice from './Slices/product.slice';
import limitSlice from './Slices/limit.slice';


const rootReducer = combineReducers({
  categorySlice,
  productSlice,
  limitSlice
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['categorySlice', 'productSlice'], // что хотим сохранять
  blacklist: ['limitSlice'], // не хотим сохранять
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
