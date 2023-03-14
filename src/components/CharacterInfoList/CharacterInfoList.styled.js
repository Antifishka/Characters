import styled from "styled-components";
import { theme } from "constants/theme";

export const CharacterList = styled.ul`
    margin: 0 16px 32px 16px;

    ${theme.mq.desktop} {
        width: 413px;
        margin: 0 auto 32px auto;
    }
`;

export const CharacterItem = styled.li`
    padding: 9px 0 12px 0;

    border-bottom: ${p => p.theme.borders.normal};
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