import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoadingProduct: true,
        product: [],
        detailProduct: {},
        filterProduct: [],
        filterName: ""
    },
    reducers: {
        onGetProduct: (state, { payload }) => {
            state.isLoadingProduct = false;
            state.detailProduct = payload;
        },
        setProduct: (state, { payload }) => {
            state.product = payload;
        },
        setFilterProduct: (state, { payload }) => {
            state.filterProduct = payload;
        },
        searchByName: (state, { payload }) => {
            state.filterName = payload;
        },
        onDeleteProduct: (state, { payload }) => {
            state.product = state.product.filter(item => item.key !== payload);
        },
        onAddNewProduct: (state, { payload }) => {
            state.product.push(payload.product);
        },

    }
});

export const {
    onGetProduct,
    setProduct,
    setFilterProduct,
    searchByName,
    onDeleteProduct,
    onAddNewProduct
} = productSlice.actions;

