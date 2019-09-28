import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: 'rgba(49, 47, 50, 1)',
      default: 'rgba(82, 82, 82, 1)',
    },
    primary: {
      light: 'rgba(175, 203, 9, 1)',
      main: 'rgba(151, 193, 34, 1)',
      dark: 'rgba(102, 133, 22, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(214, 214, 214, 1)',
      main: 'rgba(157, 157, 156, 1)',
      dark: 'rgba(112, 111, 111, 1)',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(203, 203, 203, 1)',
      disabled: 'rgba(155, 155, 155, 1)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
