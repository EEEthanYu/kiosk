import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    name : "",
    phone : "",
    home : "",
    gender : ""
}

export const docu2slice = createSlice({
    name : "docu2",
    initialState,
    reducers : {
        change : {
            reducer : (state, action) => {
                console.log(action);
                state[action.payload.key] = action.payload.value;
            },
            prepare : (key, value) => {
                return { payload : { key, value } };
            }
        }
    }
})

export const { change } = docu2slice.actions;
export default docu2slice.reducer;