import { configureStore } from '@reduxjs/toolkit';
import userAuth from './userAuth';
import adminAuth from './adminAuth';
import sideBar from './sideBar';
import addPost from "./AddPost";
import { alertSlice } from "./loadingBar";
import { notification } from "./notification";


const Store = configureStore(
  { reducer: { user: userAuth.reducer, admin: adminAuth.reducer ,sideBar:sideBar.reducer ,addPost:addPost.reducer,loader: alertSlice.reducer ,notification:notification.reducer } },
);

export default Store;
