import styled from "styled-components";

export const CharacterImg = styled.img`
  border-radius: 50%;
  border: 5px solid #F2F2F7;
  overflow: hidden;
  width: 150px;
  margin: 0 auto 34px auto;
`;

export const CharacterName = styled.h2`
  margin-bottom: 34px;

  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.2;
  text-align: center;

  color: ${p => p.theme.colors.mainTextDetails};
`;

export const Title = styled.p`
  margin-bottom: 16px;

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.2;
  letter-spacing: 0.15px;

  color: #8E8E93;
`;
