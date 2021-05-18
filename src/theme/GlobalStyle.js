import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
     font-family:${({ theme }) => theme.fonts[0]}
  }
`;

export default GlobalStyle;
