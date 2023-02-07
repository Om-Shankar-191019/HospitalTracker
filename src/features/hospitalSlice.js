import { createSlice } from "@reduxjs/toolkit";

export const hospitalSlice = createSlice({
    name:'hospital',
    initialState:{
        category:"city",
        info:null,
    },
    reducers:{
        putCategory:(state,action) =>{
            state.category = action.payload;
        }, 
        putInfo:(state,action) =>{
            state.info = action.payload;
        }
    },
});

export  const {putCategory,putInfo} = hospitalSlice.actions;
export default hospitalSlice.reducer;