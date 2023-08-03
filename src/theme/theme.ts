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

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      variant: '#e8eaf6',
      variant2: '#eeeeee'
    },
    secondary: {
      main: '#deb841',
      variant: '#f2ee9d',
    },
    
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
})

export default theme;