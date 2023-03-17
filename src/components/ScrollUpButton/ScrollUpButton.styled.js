import styled from "styled-components";

export const ScrollButton = styled.button`
    position: fixed;
    right: 32px;
    bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    
    transition: ${p => p.theme.transition};

    &:hover{
        color: ${p => p.theme.colors.secondaryText};
        background-color: ${p => p.theme.colors.background};
        transform: translateY(-3px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 5px 10px rgba(9,178,148, 0.8);
    };

    &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 5px 10px rgba(9,178,148, 0.8);
    }
`;