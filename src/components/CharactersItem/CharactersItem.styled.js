import styled from "styled-components";
import { theme } from "constants/theme";

export const CharactersCard = styled.li`
  height: 308px;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadow};
    
  transform: scale(1);
  transition: ${p => p.theme.transition};

  &:hover,
  &:focus{
    transform: scale(1.05);
  };

  ${theme.mq.desktop} {
    flex-basis: calc((100% - 60px) / 4);
    height: 244px;
  }  
`;

export const CharactersImg = styled.img`
  height: 232px;
  object-fit: cover;

  ${theme.mq.desktop} {
    height: 168px;
  }
`;

export const CharactersInfo = styled.div`
  padding: 12px 16px;
`;

export const CharactersTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const CharactersText = styled.p`
  letter-spacing: 0.15px;
`;