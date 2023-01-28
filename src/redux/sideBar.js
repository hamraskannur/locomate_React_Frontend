import { createSlice } from '@reduxjs/toolkit';

const sideBar = createSlice({
  name: 'user',
  initialState: {
    sideBar: true,
   },
  reducers: {
    changeSideBar(state, actions) {
      state.sideBar=!state.sideBar
    }
  },
});

export const sideBarAction = sideBar.actions;

export default sideBar;
