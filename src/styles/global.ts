import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme["base-background"]};
        color: ${props => props.theme["base-text"]};
        margin-bottom: 2rem;
    }

    body, input-security, textarea, button, p {
        font: 400 1rem Nunito, sans-serif;
    }
`