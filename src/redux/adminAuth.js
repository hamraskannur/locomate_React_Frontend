/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const adminAuth = createSlice({
  name: 'Admin',
  initialState: {
    adminToken: null,
  },
  reducers: {
    AddAdmin(state, actions) {
      const newItem = actions.payload;
      state.adminToken = newItem.token;
    },
    AdminLogout(state) {
      state.adminToken = null;
    },
  },
});

export const adminActions = adminAuth.actions;
export default adminAuth;
