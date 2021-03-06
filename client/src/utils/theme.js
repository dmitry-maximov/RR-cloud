import { createTheme } from '@mui/material/styles';
import backgroundImg from '../img/image.jpg';

export const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ef6c00',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0b3243',
      contrastText: '#fff',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,

    paperContainer: {
      background: 'url(' + backgroundImg + ')',
      backgroundSize: 'cover',
      // backgroundPosition: 'center center',
    },
  },
});
