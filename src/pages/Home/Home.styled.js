import styled from "styled-components";
import { theme } from "constants/theme";

export const CharactersList = styled.ul`
  /* display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 32px; */
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${theme.mq.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px 20px;
  }
`;