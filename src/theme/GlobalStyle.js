import { createGlobalStyle } from 'styled-components';
import { space, layout, color } from 'styled-system';

const GlobalStyle = createGlobalStyle`
  body {
    ${space}
    ${layout}
    ${color}
  }
`;

export default GlobalStyle;
