import { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { posBottom } from "../../position";

const commonTheme = `
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 80px;
    border : 1px solid #aaa;
    box-sizing : border;
    
    -webkit-box-shadow : 5px 5px 20px #bfbfbf;
    -moz-box-shadow : 5px 5px 20px #bfbfbf;
    box-shadow : 5px 5px 20px #bfbfbf;

    &:active {
        -webkit-box-shadow : 1px 1px 0px #bfbfbf;
        -moz-box-shadow : 1px 1px 0px #bfbfbf;
        box-shadow : 1px 1px 0px #bfbfbf;
    }
`

const Btn = styled.button`
    color : #444;
    background-color : ${props => props.backgroundColor || "#eee"};
    ${commonTheme};
`
const Eraser = styled.button`
    background-color : #bbb;
    color : white;
    ${commonTheme}
`
const Complete = styled.button`
    background-color : #adc6ed;
    color : white;
    ${commonTheme}
    font-size : 50px;
`

// 일반 버튼
const Button = ({value}) => {
    return (
        <Btn backgroundColor="#e2f0dd">{value}</Btn>
    )
}
export default Button;

// 지우기 버튼
export const Backspace = () => {
    return (
        <Eraser>⟵</Eraser>
    )
}

// 입력 완료 버튼
export const Submit = () => {
    return (
        <Complete>입력완료</Complete>
    )
}