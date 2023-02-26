import styled from "styled-components";

export const ContainerSearch = styled.div`
    width: 50rem;
    margin-top: 3rem;

    div {
        display: flex;
        justify-content: space-between;
    }

    input {
        width: 100%;
        background: ${props => props.theme["base-input"]};
        color: ${props => props.theme.white};
        margin-top: 1rem;  
        padding: 1rem;
        font-size: 16px;
        border-radius: 8px;
        border:1px solid ${props => props.theme["base-border"]};
        outline: 0;
    }
`