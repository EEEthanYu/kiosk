import { useState, useEffect, useRef, useCallback } from "react";
import { flexCenterAlign, Wrapper, InputText } from "../styles/constants";
import useClickOutside from "../hooks/useClickoutside";

import Pad from "../keypads/numpads/components/Pad";

const Text = ({title = "Text_name", placeholder = "내용을 입력해주세요.", handleChange = f => f, value}) => {

    const [isFocused, setIsfocused] = useState(false);
    const self = useRef();
    useClickOutside(self, ()=>{setIsfocused(false)});

    return(
        <Wrapper ref={self}>
            <div>{title}</div>
            <InputText placeholder={placeholder} onFocus={()=>{setIsfocused(true)}} value={value}></InputText>
            {isFocused? <Pad handleFocusOut={()=>{setIsfocused(false)}} handleChange={(input)=>handleChange(input)} /> : null}
        </Wrapper>
    )

}

export default Text;
