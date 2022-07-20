import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface QueryParams {
  query?: string;
  next?: string;
  previous?: string;
}

export const getProducts = createAsyncThunk('products/getProducts', async ({ query, next, previous }: QueryParams) => {
  const filter = `${query ? `&query=title:${query}` : ""}${next ? `&next=${next}` : ""}${previous ? `&previous=${previous}` : ""} `
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/shops/tosin/products?fields=[images]&limit=4${filter}`);
  return response.data;
});
