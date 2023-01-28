import { configureStore } from '@reduxjs/toolkit';
import userAuth from './userAuth';
import adminAuth from './adminAuth';
import sideBar from './sideBar';
import addPost from "./AddPost";
import {loaderSlice} from './topLoadingBar'


const Store = configureStore(
  { reducer: { user: userAuth.reducer, admin: adminAuth.reducer ,sideBar:sideBar.reducer ,addPost:addPost.reducer,    loader: loaderSlice.reducer  } },
);

export default Store;
