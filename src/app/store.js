import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/loginSlice';
import hospitalReducer from '../features/hospitalSlice';
export const store = configureStore({
    reducer:{
        login:loginReducer,
        hospital:hospitalReducer,
    }
})