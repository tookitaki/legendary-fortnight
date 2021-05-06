import React, { Children } from 'react';
import { ThemeProvider } from "styled-components";
import colors from './colors'

const theme = {
    colors,
    fonts: ["sans-serif", "Rubik"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}
const Theme = ({ children }) =>{
    return <ThemeProvider theme={theme} >{children}</ThemeProvider>;
};

export default Theme