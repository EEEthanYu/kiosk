import { useState, useEffect, useRef, useCallback } from "react";
import { flexCenterAlign, Wrapper, InputText } from "../styles/constants";
import useClickOutside from "../hooks/useClickoutside";

import NumPad from "../keypads/numpads/components/Pad";
import KoreanPad from "../keypads/letterpads/components/Pad"; 

const Text = ({title = "Text_name", placeholder = "내용을 입력해주세요.", handleChange = f => f, value, padType = "number"}) => {

    const [isFocused, setIsfocused] = useState(false);
    const self = useRef();
    useClickOutside(self, ()=>{setIsfocused(false)});

    return(
        <Wrapper ref={self}>
            <div>{title}</div>
            <InputText placeholder={placeholder} onFocus={()=>{setIsfocused(true)}} value={value}></InputText>
            {isFocused &&
             ((padType==="number")? <NumPad handleFocusOut={()=>{setIsfocused(false)}} handleChange={(input)=>handleChange(input)}/>
                                : <KoreanPad handleFocusOut={()=>{setIsfocused(false)}} handleChange={(input)=>handleChange(input)}/>)
            }
        </Wrapper>
    )

}

export default Text;
