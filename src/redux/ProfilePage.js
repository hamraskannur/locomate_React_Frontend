/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from '@reduxjs/toolkit';

const profilePage = createSlice({
  name: 'ProfilePage',
  initialState: {
    following: false,
    followers:false,
    posts:false
   },
  reducers: {
    changePosts(state, actions) {
      state.following = false,
      state.followers = false,
      state.posts = true
    },
    changeFollowers(state, actions) {
        state.following = false,
        state.followers = false,
        state.posts = true   
     },
    changeFollowing(state, actions) {
        state.following = false,
        state.followers = false,
        state.posts = true    
    }
  },
});

export const profilePageAction = profilePage.actions;

export default profilePage;
