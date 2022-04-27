import { createSlice } from "@reduxjs/toolkit";

export const KeyboardSlice = createSlice({
    name : "keyboard",
    initialState : {
        isOn : false,
        target : ""
    },
    reducers : {
        setIsOn : (state, action) => {
            state.isOn = action.payload;
        },
        setTarget : (state, action) => {
            state.target = action.payload;
        }
    }
})

export const { setIsOn, setTarget } = KeyboardSlice.actions;
export default KeyboardSlice.reducers;