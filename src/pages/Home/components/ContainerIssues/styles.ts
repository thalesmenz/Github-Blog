import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const ContainerIssue = styled.div`
    width: 24.5rem;
    height: 14.5rem;
    background: ${props => props.theme["base-post"]};
    padding: 1.5rem;
    border-radius: 8px;
    cursor: pointer;


    div {
        display: flex;
        justify-content: space-between;

        
        h1 {
            width: 23rem;
            font-size: 1.2rem;
            color: ${props => props.theme["base-title"]};
        }
        
        p {
            width: 5rem;
            color: ${props => props.theme["base-span"]};
        }
    }
`

export const Parag = styled.p`
    color: ${props => props.theme["base-text"]};
    margin-top: 1rem;
    word-wrap: break-word;
    height: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const StyledNavLink = styled(NavLink)`
      color: #000;
      text-decoration: none;
`  