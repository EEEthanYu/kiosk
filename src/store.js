import { createStore } from '@reduxjs/toolkit'
import rootReducer from "./Reducers/root.js"

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
);