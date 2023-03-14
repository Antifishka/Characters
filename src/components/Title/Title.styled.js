import styled from "styled-components";
import { theme } from "constants/theme";

export const Container = styled.div`
    padding-top: 92px;
    margin-bottom: 32px;

    ${theme.mq.desktop} {
        margin-bottom: 16px;
    } 
`;

export const Img = styled.img`
    margin: 0 auto;
`;