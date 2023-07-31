import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {

  interface PaletteColorOptions {
    main?: string;
    variant?: string;
    variant2?: string

  }

  interface PaletteColor {
    main: string;
    variant: string;
    variant2: string
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#6528f7',
      variant: '#a076f9',
      variant2: '#eeeeee'
    },
    secondary: {
      main: '#deb841',
      variant: '#f2ee9d',
    },
    
  }
})

export default theme;