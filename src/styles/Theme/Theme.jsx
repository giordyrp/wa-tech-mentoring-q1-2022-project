import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#06f',
    primaryLight: '#3f72fd',
    light: '#dddddd',
    border: '#dfdfdf',
    danger: '#e53935',
    warning: '#FFF3C8',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
