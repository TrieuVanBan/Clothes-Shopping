import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
import favoriteReducer from '../features/favorite/favoriteSlice'
import userReducer from '../features/user/userSlice'
import commentReducer from '../features/comment/commentSlice'

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    favorite: favoriteReducer,
    comment: commentReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "cart", "favorite"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
            },
        }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;