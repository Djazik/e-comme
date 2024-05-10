import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productServices from "../services/productServices";
import cartReducer from "../slices/cartSlice";
import wishlistReducer from "../slices/wishlistSlice";
import authReducer from "../slices/authSlices";
import loginServices from "../services/loginServices";

const persistConfig = {
  key: "project2",
  storage,
  blacklist: ["cart", "product", "wishlist", "login"],
};

const persistCartReducer = persistReducer(persistConfig, cartReducer);
const persistWishlistReducer = persistReducer(persistConfig, wishlistReducer);
const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    cart: persistCartReducer,
    wishlist: persistWishlistReducer,
    auth: persistAuthReducer,
    [productServices.reducerPath]: productServices.reducer,
    [loginServices.reducerPath]: loginServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(productServices.middleware, loginServices.middleware),
});

export const persistor = persistStore(store);
