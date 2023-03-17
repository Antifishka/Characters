import styled from "styled-components";
import { theme } from "constants/theme";

export const MainContainer = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CharactersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;

  ${theme.mq.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px 20px;
  }
`;

export const Message = styled.p`
  margin-top: 64px;
  margin-bottom: 64px;

  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;

  color: ${p => p.theme.colors.accent};
`;