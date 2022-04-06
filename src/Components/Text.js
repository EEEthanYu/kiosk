import { useState, useEffect } from "react";
import styled from "styled-components";
import baseTheme from "../css/theme.css";
import { flexCenterAlign, Wrapper, InputText } from "../styles/constants";

const Text = ({title = "Text_name", callback = f => f}) => {

    const [inputText, setInputText] = useState("");

    const handleChange = (value) => {
        setInputText(value);
        if(callback) callback();
    }

    return(
        <Wrapper>
            <div>{title}</div>
            <InputText placeholder={"홍길동"} onChange={(e)=>{handleChange(e.target.value)}}></InputText>
        </Wrapper>
    )

}

export default Text;
