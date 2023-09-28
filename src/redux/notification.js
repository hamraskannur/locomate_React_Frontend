import {createSlice} from '@reduxjs/toolkit'

export const notification = createSlice({
  name: "notification",
  initialState: {
    notificationChange: false,
  },
  reducers: {
    viewNotification: (state) => {
      state.notificationChange = true;
    }
    
  }
});

export const { viewNotification }=notification.actions