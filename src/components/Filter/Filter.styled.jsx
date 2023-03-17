import styled from "styled-components";
import { DebounceInput } from 'react-debounce-input';
import { theme } from "constants/theme";

export const Container = styled.div`
    position: relative;
    margin-bottom: 32px;
    color: ${p => p.theme.colors.placeholder};

    ${theme.mq.desktop} {
        margin-bottom: 61px;
    }
`;

export const FieldFilter = styled.label`
    width: 100%;
    
`;

export const InputFilter = styled(DebounceInput)`
    padding: 16px 16px 16px 48px;
    width: 100%;
    font: inherit;
    border: ${p => p.theme.borders.input};
    border-radius: ${p => p.theme.radii.filter};
    outline: transparent;
    font-size: ${p => p.theme.fontSizes.s};
    
    color: ${p => p.theme.colors.mainText};
    background-color: inherit;

    transition: ${p => p.theme.transition};
    
    ::placeholder {
        font-size: ${p => p.theme.fontSizes.s};
        color: ${p => p.theme.colors.placeholder};
    }

    &:focus {
        border-color: ${p => p.theme.colors.accent};
    }
`;

export const IconForm = styled.div`
    position: absolute;
    bottom: 14px;
    left: 18px;
`;