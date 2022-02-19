import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

export default createTheme({
  //
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    // up: () => '',
    // down: () => '',
    // between: () => '',
    // only: () => '',
    // not: () => '',
    unit: 'px',
  },

  direction: 'ltr',

  components: {},

  palette: {
    mode: 'light', // dark
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#1976d2', // #90caf9
      light: '#42a5f5', // #e3f2fd
      dark: '#1565c0', // #42a5f5
      contrastText: '#fff', // rgba(0,0,0,0.87)
    },
    secondary: {
      main: '#9c27b0', // #ce93d8
      light: '#ba68c8', // #f3e5f5
      dark: '#7b1fa2', // #ab47bc
      contrastText: '#fff', // rgba(0,0,0,0.87)
    },
    error: {
      main: '#d32f2f', // f44336
      light: '#ef5350', // e57373
      dark: '#c62828', // d32f2f
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02', // ffa726
      light: '#ff9800', // ffb74d
      dark: '#e65100', // f57c00
      contrastText: '#fff', // rgba(0,0,0,0.87)
    },
    info: {
      main: '#0288d1', // 29b6f6
      light: '#03a9f4', // 4fc3f7
      dark: '#01579b', // 0288d1
      contrastText: '#fff', // rgba(0,0,0,0.87)
    },
    success: {
      main: '#2e7d32', // 66bb6a
      light: '#4caf50', // 81c784
      dark: '#1b5e20', // 388e3c
      contrastText: '#fff', // rgba(0,0,0,0.87)
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    },
    contrastThreshold: 3,
    getContrastText: undefined,
    // augmentColor: undefined,
    tonalOffset: 0.2,
    text: {
      primary: 'rgba(0,0,0,0.87)', // #fff
      secondary: 'rgba(0,0,0,0.6)', // rgba(255,255,255,0.7)
      disabled: 'rgba(0,0,0,0.38)', // rgba(255,255,255,0.5)
      // icon: 'rgba(255,255,255,0.5)'
    },
    divider: 'rgba(0,0,0,0.12)',
    background: {
      paper: '#fff', // 121212
      default: '#fff', // 121212
    },
    action: {
      active: 'rgba(0,0,0,0.54)', // #fff
      hover: 'rgba(0,0,0,0.04)', // rgba(255,255,255,0.08)
      hoverOpacity: 0.04, // 0.08
      selected: 'rgba(0,0,0,0.08)', // rgba(255,255,255,0.16)
      selectedOpacity: 0.08, // 0.16
      disabled: 'rgba(0,0,0,0.26)', // rgba(255,255,255,0.3)
      disabledBackground: 'rgba(0,0,0,0.12)', // rgba(255,255,255,0.12)
      disabledOpacity: 0.38,
      focus: 'rgba(0,0,0,0.12)', // rgba(255,255,255,0.12)
      focusOpacity: 0.12,
      activatedOpacity: 0.12, // 0.24
    },
  },

  // spacing: () => '',

  shape: {
    borderRadius: 4,
  },

  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation:landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': {
        minHeight: 64,
      },
    },
  },

  // shadows: [],

  typography: {
    htmlFontSize: 16,
    // pxToRem: () => ,
    fontFamily: '',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '',
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: '',
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: '',
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: '',
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontFamily: '',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: '',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontFamily: '',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontFamily: '',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontFamily: '',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontFamily: '',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontFamily: '',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: '',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontFamily: '',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },

  transitions: {},

  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});
