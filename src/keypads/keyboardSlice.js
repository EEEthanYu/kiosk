import { createSlice } from "@reduxjs/toolkit";

export const KeyboardSlice = createSlice({
    name : "keyboard",
    initialState : {
        isOn : false,
    },
    reducers : {
        setIsOn : (state, action) => {
            state.isOn = action.payload;
        }
    }
})

export const { setIsOn } = KeyboardSlice.actions;
export default KeyboardSlice.reducers;