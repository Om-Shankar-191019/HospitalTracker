import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        user:null,
    },
    reducers:{
        login:(state,action) =>{
            state.user = action.payload;
        }, 
        logout:(state) =>{
            state.user = null;
        }
    },
});

export  const {login,logout} = loginSlice.actions;
export const selectUser = (state) => state.login.user;
export default loginSlice.reducer;