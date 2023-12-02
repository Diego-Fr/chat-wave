import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: 'contact',
    initialState:{
        list:[]
    },
    reducers:{
        setList(state, action){
            state.list = action.payload
        }
    }
})

export const {setList} = contactSlice.actions
export default contactSlice.reducer