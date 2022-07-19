import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await axios.get('https://api.staging.sellit.co/api/v1/shops/tosin');
  console.log(response.data)
  return response.data;
});
