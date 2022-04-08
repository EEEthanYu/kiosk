import { createSlice } from "@reduxjs/toolkit";

export const text1 = createSlice({
    name : "text1",
    initialState : {
        value : ""
    },
    reducers : {
        change : (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { change } = text1.actions;
export default text1.reducer;