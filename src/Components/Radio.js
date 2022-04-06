import { useState } from "react";

import styled from "styled-components";
import baseTheme from "../css/theme.css";
import { flexCenterAlign, Wrapper } from "../styles/constants";

import { change } from "../Reducers/radioChanger";
import { useSelector, useDispatch } from "react-redux";

const Radio = ({title = "Radio_name", RadioName = "radio_name", labels = [], callback = f => f}) => {

    const selectedValue = useSelector(state => state.radioChanger.value);
    const dispatch = useDispatch();

    const Buttons = styled.div`
        margin-top : 20px;
        width : 100%;
        display : grid;
        grid-template-columns : repeat(auto-fill, minmax(20%, auto));
        gap : 24px;

        & > label {
            box-sizing : border-box;
            border : 4px solid ${baseTheme.green};
            border-radius : 10px;
            color : ${baseTheme.green};
            font-size : 28px;
            font-family : ${baseTheme.Bold};

            & > input {
                visibility : hidden;
                position : absolute;
                border : none;
            }
            & > div {
                height : 70px;
                ${flexCenterAlign};
            }
            & > input:checked + div {
                background-color : ${baseTheme.green};
                color : white;
            }

        }
    `

    const handleChange = (value) => {
        dispatch(change(value*1));
        if(callback) callback();
    }

    return (
        <Wrapper>
            <div>{title}</div>
            <Buttons>
            {
                labels.map((v,i)=>{
                    return (
                        <label>
                            <input type="radio" name={RadioName} value={i+1} checked={selectedValue===i+1} onChange={(e)=>{handleChange(e.target.value)}}></input>
                            <div>{v}</div>
                        </label>
                    )
                })
            }
            </Buttons>
        </Wrapper>
    )
}

export default Radio;