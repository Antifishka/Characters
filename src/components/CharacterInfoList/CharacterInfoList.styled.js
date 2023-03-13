import styled from "styled-components";

export const CharacterList = styled.ul`
    margin: 0 16px;
`;

export const CharacterItem = styled.li`
    padding: 9px 0 12px 0;

    :not(:first-of-type){
       border-top: ${p => p.theme.borders.normal}; 
    }
`;

export const CharacterProp = styled.h4`
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.bold};
    letter-spacing: 0.15px;

    color: ${p => p.theme.colors.mainTextDetails};
`;

export const CharacterText = styled.p`
    line-height: 1.4;
    letter-spacing: 0.25px;

    color: ${p => p.theme.colors.secondaryTextDetails};
`;