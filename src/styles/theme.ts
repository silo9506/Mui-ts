import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        // indicator: {
        //   backgroundColor: 'unset',
        // },
      },
    },
  },
});
