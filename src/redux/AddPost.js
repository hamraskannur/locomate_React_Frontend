import { createSlice } from '@reduxjs/toolkit';

const AddPost = createSlice({
  name: 'AddPost',
  initialState: {
    AddPost: false,
  },
  reducers: {
    postAdd(state) {
        state.AddPost = true;
    },
    Update(state) {
      state.AddPost = false;
    },
  },
});

export const AddPostActions = AddPost.actions;
export default AddPost;
