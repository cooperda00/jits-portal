//Styles
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit; /* elements will inherit from body */
    }

    html {
        /* This defines what a rem is */
        font-size: 62.5%; /* 1 rem = 10 px; 10px/16px = 62.5% */
    }


    body {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-weight: 300;
        line-height: 1.8;
        font-family: Roboto, sans-serif;
    }

    html, body {
        height: 100vh;
        width: 100vw;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
