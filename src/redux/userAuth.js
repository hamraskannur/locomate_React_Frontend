/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userAuth = createSlice({
  name: 'user',
  initialState: {
    userToken: null,
    user: null,
  },
  reducers: {
     userAddDetails(state, actions) {
      const newItem = actions.payload;
      state.user = newItem.user;
      state.userToken = newItem.token;
    },
    userLogout(state) {
      state.user = '';
      state.userToken = '';
    },
  },
});

export const userActions = userAuth.actions;

export default userAuth;
