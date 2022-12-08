import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: 'rgba(48,48,48,0.99)',
            paper: '#424242'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.7)',
            hint: 'rgba(255, 255, 255, 0.5)'
        },
        primary: {
            main: '#a6ffd8',
            light: '#b7ffdf',
            dark: '#74b297'
        },
        secondary: {
            main: '#ffdea6',
            light: '#ffe4b7',
            dark: '#b29b74'
        },
        error: {
            main: '#ff9383',
            light: 'rgba(255,168,155,0.98)',
            dark: '#b2665b'
        },
        warning: {
            main: '#bd8177',
            light: '#ca9a92',
            dark: '#845a53'
        },
        success: {
            main: '#bfa6ff',
            light: '#cbb7ff',
            dark: 'rgba(133,116,178,0.99)'
        },
        info: {
            main: '#8dd4b1',
            light: '#a3dcc0',
            dark: '#62947b'
        },
        divider: 'rgba(255,255,255,0.12)'
    },
    typography: {
        h1: {
            fontFamily: 'Josefin Slab',
            fontWeight: 500
        },
        fontFamily: 'Playfair Display',
        fontWeightBold: 700,
        subtitle1: {
            fontFamily: 'Raleway'
        },
        subtitle2: {
            fontFamily: 'Raleway'
        },
        body1: {
            fontFamily: 'Raleway'
        },
        body2: {
            fontFamily: 'Raleway'
        },
        caption: {
            fontFamily: 'Raleway'
        },
        overline: {
            fontFamily: 'Raleway'
        },
        h2: {
            fontWeight: 500
        }
    }
});
export const lightTheme = createTheme({
    palette: {
        type: 'light',
        background: {
            default: '#fafafa',
            paper: '#ffffff'
        },
        primary: {
            main: '#a6ffd8'
        },
        secondary: {
            main: '#ffdea6'
        },
        error: {
            main: '#ffb2a6'
        },
        warning: {
            main: '#bd8177'
        },
        success: {
            main: '#8dd4b1'
        },
        info: {
            main: '#bfa6ff'
        }
    },
    typography: {
        h1: {
            fontFamily: 'Josefin Slab',
            fontWeight: 500
        },
        fontFamily: 'Playfair Display',
        fontWeightBold: 700,
        subtitle1: {
            fontFamily: 'Raleway'
        },
        subtitle2: {
            fontFamily: 'Raleway'
        },
        body1: {
            fontFamily: 'Raleway'
        },
        body2: {
            fontFamily: 'Raleway'
        },
        caption: {
            fontFamily: 'Raleway'
        },
        overline: {
            fontFamily: 'Raleway'
        },
        h2: {
            fontWeight: 500
        }
    }
});
