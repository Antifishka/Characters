import styled from "styled-components";

export const CharatersCard = styled.li`
    width: 312px;
    height: 308px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: ${p => p.theme.shadow};
    
    transform: scale(1);
    transition: ${p => p.theme.transition};

    &:hover,
    &:focus{
        transform: scale(1.03);
    };
`;

export const CharatersImg = styled.img`
  width: 100%;
  height: 232px;
  object-fit: cover;
`;

export const CharatersInfo = styled.div`
  padding: 12px 16px;
`;

export const CharatersTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const CharatersText = styled.p`
  letter-spacing: 0.15px;
`;