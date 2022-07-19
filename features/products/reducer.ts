import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/product';
import { getProducts } from './actions';

type ProductsState = {
    data: {
        count: number,
        has_more: boolean,
        next: string,
        previous: string,
        rows: Product[]
    };
    pending: boolean;
    error: boolean;
};

const initialState: ProductsState = {
    data: {
        count: 0,
        has_more: false,
        next: "",
        previous: "",
        rows: []
    },
    pending: false,
    error: false,
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProducts.pending, (state) => {
      state.pending = true;
    })
    .addCase(getProducts.fulfilled, (state, { payload }) => {
      state.pending = false;

      state.data = payload;
    })
    .addCase(getProducts.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

export default productsReducer;
