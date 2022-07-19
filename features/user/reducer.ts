import { createReducer } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user';
import { getUser } from './actions';

type UserState = {
    data: User,
    pending: boolean;
    error: boolean;
};

const initialState: UserState = {
    data: {
        about: null,
        name: "",
        profile_avatar_url: "https://fakeimg.pl",
        timeline_avatar_url: "https://fakeimg.pl",
        username: ""  
    },
    pending: false,
    error: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUser.pending, (state) => {
      state.pending = true;
    })
    .addCase(getUser.fulfilled, (state, { payload }) => {

      state.pending = false;

      state.data = payload
    })
    .addCase(getUser.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

export default userReducer;
