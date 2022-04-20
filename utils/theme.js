import { createTheme, responsiveFontSizes } from "@mui/material";

const themeBasis = createTheme({
  typography: {
    fontFamily: 'paralucent, sans-serif',
  },
  palette: {
    primary: {
      light: '#E298BD',
      main: '#CE67A5',
      dark: '#BE84C1',
      contrastText: '#fff'
    },
    secondary: {
      main: '#4F6E9D',
      light: '#ACB6CF',
      contrastText: '#fff',
      dark: '#2B3F5D'
    },
    yellow: {
      main: '#F7E246'
    },
    black: {
      main: '#3C3C3C'
    },
    white: {
      main: '#fff',
      contrastText: '#4F6E9D'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-display: swap;
          font-family: 'paralucent';
        }
      `,
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          border: 'solid 2px #CE67A5'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          background: '#fff',
        }
      }
    }
  },
});


export const theme = responsiveFontSizes(themeBasis)
