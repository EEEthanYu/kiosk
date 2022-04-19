import { useState, useEffect } from "react";
import styled from "styled-components";
import baseTheme from "../css/theme.css";
import { flexCenterAlign, Wrapper, InputText } from "../styles/constants";
import Formatter from "../Utils/formatter.js";
import SimpleCheck from "./SimpleCheck";

import Pad from "../keypads/numpads/components/Pad";

const Text = ({title = "Text_name", placeholder = "내용을 입력해주세요.", onClick = {}, simpleCheck}) => {

    const [isFocused, setIsfocused] = useState(false);

    return(
        <>
            <Wrapper>
                <div>{title}</div>
                <InputText placeholder={placeholder} onChange={(e)=>{onClick(e.target.value)}} onFocus={()=>{setIsfocused(true)}}></InputText>
            </Wrapper>
            {isFocused? <Pad handleFocusOut={()=>{setIsfocused(false)}}/> : null}
            {simpleCheck? simpleCheck : null}
        </>
    )

}

export default Text;
