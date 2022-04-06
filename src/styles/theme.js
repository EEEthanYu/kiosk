import { css } from "styled-components";
import styled from "styled-components";
import baseTheme from "../css/theme.css";

const theme = {
    rounded : (radius) => `
        -webkit-border-radius : ${radius};
        -moz-border-radius : ${radius};
        border-radius : ${radius};
    `,
    flex : (align_items = "unset", justify_content = "unset") => `
        display : flex;
        align-items : ${align_items};
        justify-content : ${justify_content};
    `
}

export default theme;