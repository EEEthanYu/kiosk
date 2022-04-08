import { useState, useEffect } from "react";
import styled from "styled-components";
import baseTheme from "../css/theme.css";
import { flexCenterAlign, Wrapper, InputText } from "../styles/constants";
import Formatter from "../Utils/Formatter.js";
import SimpleCheck from "./SimpleCheck";

const Text = ({title = "Text_name", placeholder = "내용을 입력해주세요.", onClick = {}, simpleCheck}) => {

    return(
        <>
            <Wrapper>
                <div>{title}</div>
                <InputText placeholder={placeholder} onChange={(e)=>{onClick(e.target.value)}}></InputText>
            </Wrapper>
            {simpleCheck? simpleCheck : ""}
        </>
    )

}

export default Text;
