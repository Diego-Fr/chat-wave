import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
    name: 'session',
    initialState:{
        access_token: null
    },
    reducers:{
        setAccessToken(state, action){
            state.access_token = action.payload
        }
    }
})

export const {setAccessToken} = sessionSlice.actions
export default sessionSlice.reducer