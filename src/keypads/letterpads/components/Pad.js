import { useState, useEffect } from "react";
import styled from "styled-components";
import { posBottom } from "../../position";
import LETTERS from "./letters.js";
import Button from "./Button.js";

const GAP = "20px";
const Pallette = styled.div`
    padding : 20px;
    background-color : #eee;
    box-sizing : border-box;
    border-top : 1px solid #aaa;
    width : 100%;
    height : 600px;
    display : flex;
    justify-content : space-between;
    ${posBottom};
`
const Btns = styled.div`
    width : 100%;
    height : 100%;
    box-sizing : border-box;
    display : grid;
    grid-template-columns : repeat(11, 1fr);
    grid-template-rows : repeat(5, 1fr);
    gap : ${GAP};
`

const Pad = ({handleFocusOut = f => f, handleChange = f => f, initType = "ㄱ"}) => {

    const [type, setType] = useState(initType);

    const switchCaps = () => {
        switch(type) {
            case "ㄱ" :
                setType("ㄲ");
                break;
            case "ㄲ" :
                setType("ㄱ");
                break;
            case "a" :
                setType("A");
                break;
            case "A" :
                setType("a");
                break;
            default : break;
        }
    }
    const switchLang = () => {
        switch(type) {
            case "ㄱ" :
                setType("a");
                break;
            case "ㄲ" :
                setType("A");
                break;
            case "a" :
                setType("ㄱ");
                break;
            case "A" :
                setType("ㄲ");
                break;
            default : break;
        }
    }

    return (
        <Pallette>
            <Btns>
                {LETTERS[type].map(v=>{
                    return <Button value={v} handleClick={()=>{handleChange(v)}}></Button>
                })}
                <Button value={"🠕"} handleClick={()=>{switchCaps()}}></Button>
                <Button value={"⟵"} handleClick={()=>{handleChange(-1)}}></Button>
                <Button value={"한"} handleClick={()=>{switchLang()}}></Button>
                <Button value={"Space"} handleClick={()=>{handleChange(" ")}}></Button>
                <Button value={"Clear"} handleClick={()=>{handleChange(0)}}></Button>
                <Button value={"입력완료"} handleClick={()=>{handleFocusOut()}}></Button>
            </Btns>
        </Pallette>
    )
}

export default Pad;