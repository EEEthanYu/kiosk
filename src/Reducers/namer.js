import { createSlice } from "@reduxjs/toolkit";

export const namerSlice = createSlice({
    name : "namer",
    initialState : {
        value : ""
    },
    reducers : {
        rewrite : (state, action) => {
            console.log(action);
            state.value = action.payload;
        },
    }
})

export const { rewrite } = namerSlice.actions;
export default namerSlice.reducer;