import styled from "styled-components";

export const ContainerTitlePost = styled.div`
    width: 50rem;
    background: ${props => props.theme["base-profile"]};
    margin-top: -11%;
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`

export const HeadersInfo = styled.div`
    display:flex;
    justify-content: space-between;
`


export const ContainerAll = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`