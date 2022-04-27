import { useEffect } from "react";
import styled from "styled-components";

const commonTheme = `
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 30px;
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

    // 특수키
    // caps
    &:nth-child(42) {
        background-color : #444;
        color : #fff;
        grid-column : 1 / 2;
        grid-row : 4 / 5;
    }
    // backspace
    &:nth-child(43) {
        background-color : #444;
        color : #fff;
        grid-column : 9 / 11;
        grid-row : 4 / 5;
    }
    // 한/영
    &:nth-child(44) {
        background-color : #aaa;
        grid-column : 1 / 3;
        grid-row : 5 / 6;
    }
    // space
    &:nth-child(45) {
        background-color : #aaa;
        grid-column : 3 / 6;
        grid-row : 5 / 6;
    }
    // clear
    &:nth-child(46) {
        background-color : #aaa;
        grid-column : 6 / 9;
        grid-row : 5 / 6;
    }
    // enter
    &:nth-child(47) {
        background-color : #adc6ed;
        grid-column : 9 / 12;
        grid-row : 5 / 6;
    }
`

const Button = ({value, handleClick = f => f}) => {
    return (
        <Btn onClick={()=>{handleClick()}}>{value}</Btn>
    )
}
export default Button;