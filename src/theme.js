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
          background:'#24323d',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background:'#24323d',
          color: '#828fa2',
          display: 'block',
          margin: '16px'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background:'#24323d',
          color: '#eda803',
          display: 'block',
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#f8fcfc',
          fontSize: 12,
          fontWeight:500,
          fontFamily: Montse.style.fontFamily
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#132028',
          color: '#f8fcfc',
        }
      }
    },
    MuiTableCell:{
      styleOverrides: {
        root: {
          borderColor: '#828fa2',
          color: '#c4cad6',
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#f8fcfc',
        }
      }
    },
  },
  palette: {
    action: {
      main: '#eda803',
    },
    primary: {
      main: '#0a1117',
    },
    secondary: {
      main: '#132028',
    }
  },
  typography: {
    fontFamily: Montse.style.fontFamily,
    h4: {
      fontSize: 28,
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      color: '#eda803',
      fontWeight:500
    },
    body4: {
      color: '#828fa2',
      fontWeight: 400,
      fontSize: 14,
    },
    body2: {
      color: '#828fa2',
      fontWeight: 400,
      fontSize: 12,
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
      fontSize: 10,
      lineHeight: 1.45,
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
