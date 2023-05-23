import { Dancing_Script, Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const Dancing = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const Montse = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  components: {
    MuiListItemIcon: {
      fontSize: 82,
    }, 
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          fontFamily: Dancing.style.fontFamily,
          fontWeight: 500,
          fontSize: 23,
          lineHeight: 1.1
        },
        primary: {
          fontFamily: Montse.style.fontFamily,
          fontSize: 15
        }
      }
    },    
    MuiDivider: {
      styleOverrides: {
        root: {
          background:'#e0cbb8'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#132028'
        }
      }
    },
  },
  palette: {
    primary: {
      main: '#0a1117',
    },
    gold: {
      main: '#eda803',
    },
    secondary: {
      main: '#132028',
    }
  },
  typography: {
    fontFamily: Montse.style.fontFamily,
    body2: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.1
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      color:'#6e5b4b',
      fontWeight:400
    },
    body3: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 0.76
    },
    presentacionsec: {
      fontFamily: Montse.style.fontFamily,
      fontWeight: 500,
      fontSize: 16,
    },
    stampSubTitle: {
      fontFamily: Montse.style.fontFamily,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.35,
    },
    stampTitle: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.35,
      color: '#f7dfca'
    }
  },
});

export default theme;
