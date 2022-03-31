import React from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import {
  ThemeProvider as ThemeProviderMUI,
  createTheme as createThemeMUI,
} from '@mui/material/styles';

const themeSC = {
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
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
          borderRadius: 20,
        },
      },
    },
  },
};

const themeMUI = createThemeMUI({
  palette: {
    primary: {
      main: '#06f',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
          borderRadius: 10,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
        input: {
          height: 'auto',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none !important',
          textTransform: 'none',
          fontSize: '15px',
          padding: '10px 22px',
          borderRadius: 5,
        },
        fullWidth: {
          padding: '10px 22px',
        },
      },
    },
  },
  overrides: {
    MuiButton: {
      google: {
        color: 'red',
      },
    },
  },
});

const Theme = ({ children }) => {
  return (
    <ThemeProviderMUI theme={themeMUI}>
      <ThemeProviderSC theme={themeSC}>{children}</ThemeProviderSC>
    </ThemeProviderMUI>
  );
};

export default Theme;
