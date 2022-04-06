import { createSlice } from "@reduxjs/toolkit";

export const radioChangerSlice = createSlice({
    name : "radioChanger",
    initialState : {
        value : 1
    },
    reducers : {
        change : (state, action) => {
            state.value = action.payload;
        },
    }
    // 자동으로 action("change") 생성
})

export const { change } = radioChangerSlice.actions; // action
export default radioChangerSlice.reducer; // reducer