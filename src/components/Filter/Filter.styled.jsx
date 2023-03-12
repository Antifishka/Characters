import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    margin-bottom: 32px;
    color: ${p => p.theme.colors.placeholder};
`;

export const FieldFilter = styled.label`
    width: 100%;
`;

export const InputFilter = styled.input`
    padding: 16px 16px 16px 48px;
    width: 100%;
    font: inherit;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.filter};
    outline: none;
    font-size: ${p => p.theme.fontSizes.s};
    
    color: ${p => p.theme.colors.mainText};
    background-color: inherit;
    
    ::placeholder {
        font-size: ${p => p.theme.fontSizes.s};
        color: ${p => p.theme.colors.placeholder};
    }
`;

export const IconForm = styled.div`
    position: absolute;
    bottom: 14px;
    left: 18px;
`;