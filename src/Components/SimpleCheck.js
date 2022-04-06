import { useState } from "react";
import styled from "styled-components";
import baseTheme from "../css/theme.css";
import theme from "../styles/theme";
import { flexCenterAlign, Wrapper } from "../styles/constants";

const SimpleCheck = ({title = "Check_name", CheckName = "check_name", callback = f => f}) => {
    
    const [value,setValue] = useState(true);

    const SimpleCheck = styled.label`

        ${theme.flex("center","right")};

        & > input {
            visibility : hidden;
            position : absolute;
            border : none;
        }
        & > input + span {
            box-sizing : border-box;
            border : 2px solid ${baseTheme.green};
            width : 30px;
            height : 30px;
            ${theme.rounded("15px")}
            margin-right : 10px;
        }
        & > input:checked + span {
            background-color : ${baseTheme.green};
        }
        & > input:checked + span:before {
            content : "✔";
            color : white;
            position : relative;
            top : -10px;
        }

    `

    return(
        <Wrapper>
            <SimpleCheck>
                <input type="checkbox" name={CheckName} checked={value} onChange={()=>{setValue(!value)}}></input>
                <span></span>
                <span>{title}</span>
            </SimpleCheck>
        </Wrapper>
    )

}

export default SimpleCheck;