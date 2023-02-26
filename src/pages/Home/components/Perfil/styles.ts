import styled from "styled-components";

export const ContainerPerfil = styled.div`

    img {
        width: 10rem;
        height: 10rem;
        border-radius: 8px;
    }

    width: 50rem;
    background: ${props => props.theme["base-profile"]};
    margin-top: -12%;
    padding: 2rem;
    border-radius: 12px;
    display: flex;   
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`

export const ContainerInfo = styled.div`
    margin-left: 2rem;    
    
    a {
        color: ${props => props.theme.blue};
        text-decoration: none;
        display: flex;
        gap: 0.2rem;
    }
`

export const FooterInHeader = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;


    div {
        display: flex;
        gap: 0.5rem;

        span {
            color: ${props => props.theme["base-label"]};
        }
    }
`



