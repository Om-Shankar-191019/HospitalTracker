import { createSlice } from "@reduxjs/toolkit";

export const hospitalSlice = createSlice({
    name:'hospital',
    initialState:{
        category:"city",
        info:null,
        currentPin:null,
    },
    reducers:{
        putCategory:(state,action) =>{
            state.category = action.payload;
        }, 
        putInfo:(state,action) =>{
            state.info = action.payload;
        },
        putCurrentPin:(state,action) =>{
            state.currentPin = action.payload;
        },
        putCurrentPinToNull:(state) =>{
            state.currentPin = null;
        }
    },
});

export  const {putCategory,putInfo,putCurrentPin,putCurrentPinToNull} = hospitalSlice.actions;
export default hospitalSlice.reducer;