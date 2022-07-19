import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get('https://api.staging.sellit.co/api/v1/shops/tosin/products?');
  return response.data;
});
