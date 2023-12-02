import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlice";
import userReducer from './userSlice'
import contactReducer from "./contactSlice";

const store = configureStore({
    reducer:{
        sessionReducer: sessionReducer,
        userReducer: userReducer,
        contactReducer: contactReducer

    }
})

export default store