import { createSlice } from "@reduxjs/toolkit";

export const text2 = createSlice({
    name : "text2",
    initialState : {
        value : ""
    },
    reducers : {
        change : (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { change } = text2.actions;
export default text2.reducer;