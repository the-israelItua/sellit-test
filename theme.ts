import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
       "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,

        },
   
      }
    }
  }
});

export default theme;