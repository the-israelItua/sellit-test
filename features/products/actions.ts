import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {per_page_limit} from "../../utils"

interface QueryParams {
  query?: string;
  next?: string;
  previous?: string;
}

export const getProducts = createAsyncThunk('products/getProducts', async ({ query, next, previous }: QueryParams) => {
  const filter = `${query ? `&query=title:${query}` : ""}${next ? `&next=${next}` : ""}${previous ? `&previous=${previous}` : ""} `
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/shops/tosin/products?limit=${per_page_limit}&fields=[images]${filter}`);
  return response.data;
});
