import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;  
  gap: 8px;
  margin-bottom: 32px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    font-size: ${p => p.theme.fontSizes.m};

    &:not(:disabled){
        color: ${p => p.theme.colors.secondaryText};
        background-color: ${p => p.theme.colors.background};

        transition: ${p => p.theme.transition};

        &:hover{
            color: ${p => p.theme.colors.white};
            background-color: ${p => p.theme.colors.accent};
        };
    };  
`;

export const Page = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    
    font-size: ${p => p.theme.fontSizes.m};

    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
`;