import React, { useState } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";

const ModalsProvider = ({ children }) => {

    const [openedModals, setOpenedModals] = useState([]);
    const open = (Component, props) => {
        setOpenedModals((modals)=>{
            
        })
    };
    const close = () => {

    };
    const dispatch = { open, close };

    return (
        <ModalsStateContext.Provider value={openedModals}>
            <ModalsDispatchContext.Provider value={dispatch}>
                {children}
            </ModalsDispatchContext.Provider>
      </ModalsStateContext.Provider>
    )

}