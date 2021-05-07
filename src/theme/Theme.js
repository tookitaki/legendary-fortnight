import React from 'react';
import { ThemeProvider } from 'styled-components';
import colors from './colors';
import GlobalStyle from './GlobalStyle';

const theme = {
  colors,
  fonts: ['sans-serif', 'Rubik'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};
const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
