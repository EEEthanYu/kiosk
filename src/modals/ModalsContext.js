import { createContext } from "react";

// initialState 정의
export const ModalsDispatchContext = createContext({
    open : () => {},
    close : () => {}
});

export const ModalsStateContext = createContext([]);