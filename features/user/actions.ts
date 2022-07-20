import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/shops/tosin`);
  return response.data;
});
