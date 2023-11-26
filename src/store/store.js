import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlice";
import userReducer from './userSlice'

const store = configureStore({
    reducer:{
        sessionReducer: sessionReducer,
        userReducer: userReducer
    }
})

export default store