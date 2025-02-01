import styled from "styled-components";
import { theme } from "../../styles/theme";


export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0%.25rem;
    background-color: ${theme.colors.primary};
    border: 0;
    padding: 0;
    transition: all 100ms;


    &:hover{
        background-color: ${theme.colors.primaryDark};
    }

    svg{
        fill: ${theme.colors.black};
        height: 1.25rem;
        width: 3rem;
    }
`;