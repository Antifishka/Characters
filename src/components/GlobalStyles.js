import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    
    font-family: ${p => p.theme.fonts.roboto};
    font-size: ${p => p.theme.fontSizes.xs};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: 1.5;

    background-color: ${p => p.theme.colors.white};
  }
  
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
  display: block;
  max-width: 100%;
  height: auto;
  }

  a{
    text-decoration: none;
    font-family: inherit;
    color: inherit;
  }
`;