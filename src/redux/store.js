import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product/productSlice";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

