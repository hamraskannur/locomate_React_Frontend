import {createSlice} from '@reduxjs/toolkit'

export const loaderSlice=createSlice({
    name:"loader",
    initialState:{
        progress:10,
    },
    reducers:{
        startLoading:(state)=>{
            state.progress = 30
        },
        completedLoading:(state)=>{
            state.progress = 100
        }
    }
})

export const {startLoading,completedLoading} = loaderSlice.actions