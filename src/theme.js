import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    overrides: {
      MuiList: {
        root: {
          '& .MuiListItem-root': {
            padding: '0.25em 0', // Adjust the padding as per your requirement
          },
        },
      },
      MuiTypography: {
        colorTextSecondary: {
          margin: '50',
        },
      },
    },
  });
  
  export default theme;