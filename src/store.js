import { configureStore } from '@reduxjs/toolkit' 
import changeReducer from "./docu2/docu2slice";

export const store = configureStore({
    reducer : {
        changer : changeReducer
    },
})