import styled from "styled-components";
import { theme } from "constants/theme"

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  padding: 0 24px;

  ${theme.mq.desktop} {
    max-width: 1440px;
    padding: 0 210px;
  }
`;