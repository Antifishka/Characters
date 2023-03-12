import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding-top: 23px;
  margin-bottom: 77px;

  font-family: ${p => p.theme.fonts.karla};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.2;
  text-transform: uppercase;

  color: ${p => p.theme.colors.black};

  transition: ${p => p.theme.transition};
          
:hover{
  color: ${p => p.theme.colors.accent};
}
`;