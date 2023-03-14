import styled from "styled-components";
import { theme } from "constants/theme";

export const CharacterImg = styled.img`
  box-sizing: content-box;
  border-radius: 50%;
  border: 5px solid #F2F2F7;
  overflow: hidden;
  margin: 0 auto 34px auto;

  ${theme.mq.desktop} {
    width: 300px;
    margin-bottom: 16px;
  } 
`;

export const CharacterName = styled.h2`
  margin-bottom: 34px;

  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.2;
  text-align: center;

  color: ${p => p.theme.colors.mainTextDetails};

  ${theme.mq.desktop} {
    margin-bottom: 48px;

    font-size: ${p => p.theme.fontSizes.xxl};
  } 
`;

export const Title = styled.p`
  margin-bottom: 16px;

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.2;
  letter-spacing: 0.15px;

  color: #8E8E93;

  ${theme.mq.desktop} {
    margin-bottom: 48px;
    
    text-align: center;
  }
`;
