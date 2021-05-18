import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import themeAttributes from './themeAttributes';
const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={themeAttributes}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
