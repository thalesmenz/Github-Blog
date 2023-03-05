import styled from "styled-components";

export const ContainerTitlePost = styled.div`
    width: 50rem;
    background: ${props => props.theme["base-profile"]};
    margin-top: -11%;
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;

    h1 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`

export const ContainerMiniInfos = styled.div`
    display: flex;
    gap: 1rem;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        color: ${props => props.theme["base-span"]};
    }
`

export const HeadersInfo = styled.div`
    display:flex;
    justify-content: space-between;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        color: ${props => props.theme.blue};
        cursor: pointer;
        text-decoration: none;
        
        p {
            font-size: 0.8rem;
            font-family: 'Nunito', sans-serif;
        }
    }

`


export const ContainerAll = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`