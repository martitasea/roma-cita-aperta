import createTheme from '@mui/material/styles/createTheme';

const theme = mode => createTheme({
  palette: {
    mode: mode ? mode : 'light',
    primary: {
      main: '#519259',

      contrastText: '#fff',
    },
    secondary: {
      main: '#F0BB62',
    },
    text: {
      primary: '#252424',
      secondary: '#746F81',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '0.2em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 2px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '0px solid slategrey'
        }
      }
    }
  }
});

export default theme;
