import { createSlice } from '@reduxjs/toolkit'

// slice : 하나의 데이터 상태를 담당하는 조각
export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        value : 0
    },
    reducers : {
        increment : state => {
            state.value += 1;
        },
        decrement : state => {
            state.value -= 1;
        },
        increaseByAmount : (state, action) => {
            console.log(action);
            state.value += action.payload;
        }
    }
})

/*
 slice 생성하면 자동으로 actionType, action creator, reducer까지 모두 작성 완료
 - counter/increment
 - counter/decrement
 - counter/increaseByAmount
*/

export const { increment, decrement, increaseByAmount } = counterSlice.actions;  // 액션

export default counterSlice.reducer; // 리듀서