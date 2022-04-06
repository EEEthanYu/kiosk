import { combineReducers } from "redux";
import counter from "./counter.js";
import namer from "./namer.js";
import radioChanger from "./radioChanger.js";

export default combineReducers({
    counter,
    namer,
    radioChanger,
});