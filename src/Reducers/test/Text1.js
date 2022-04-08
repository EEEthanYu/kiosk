import { createSlice, nanoid } from "@reduxjs/toolkit";

const text3 = createSlice({
    name : "text",
    initialState : {
        value : "",
    },
    reducers : {
        change : {
            reducers : (state, action) => {
                console.log(action);
                state.push(action.payload);
            },
        }
    }
})

console.log(text3.reducer);


export const { change } = text3.actions;
export default text3.reducer;