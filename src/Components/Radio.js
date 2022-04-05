import { useState } from "react";

import styled from "styled-components";
import baseTheme from "../css/theme.css";
import { flexCenterAlign } from "../styles/constants";

const Radio = ({title = "Radio_name", RadioName = "radio_name", labels = []}) => {

    const [selectedValue, setSelectedValue] = useState(1);

    const Wrapper = styled.div`
        margin-top : 50px;
        font-size : 30px;
        font-family : ${baseTheme.Medium};
        color : ${baseTheme.black};
        width : 750px;
    `
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
                transition : all 0.5s ease-in-out;
            }

        }
    `

    const handleChange = (value) => {
        setSelectedValue(value*1);
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