import { css } from "styled-components";
import styled from "styled-components";
import baseTheme from "../css/theme.css";

export const flexCenterAlign = css`
    display : flex;
    align-items : center;
    justify-content : center;
`

export const Wrapper = styled.div`
    margin-top : 50px;
    font-size : 30px;
    font-family : ${baseTheme.Medium};
    color : ${baseTheme.black};
    width : 750px;
`

export const InputText = styled.input`
    border : none;
    font-size : 24px;
    font-family : ${baseTheme.Regular};
    width : 100%;
    color : ${baseTheme.black};
    box-sizing : border-box;
    border-bottom : 3px solid ${baseTheme.grey};
    margin-top : 10px;
    padding : 10px 0px;

    &:focus {
        outline : none;
        background-color : ${baseTheme.blue};
    }

    &::placeholder {
        color : ${baseTheme.lightGrey};
    }
    
`