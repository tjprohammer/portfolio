import React from 'react';
import {
    ThemeOptions,
} from '@mui/material';

interface ColorContextSchema {
    toggleColorMode: () => void;
}

export const ColorContext = React.createContext<ColorContextSchema>(
    {} as ColorContextSchema
);

export const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#577590',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#43AA8B',
            contrastText: '#ffffff'
        },
        error: {
            main: '#F94144'
        },
        warning: {
            main: '#F8961E'
        },
        success: {
            main: '#90BE6D'
        },
        info: {
            main: '#F9C74F'
        },
        text: {
            primary: 'rgba(0,0,0,0.87)',
            secondary: 'rgba(0,0,0,0.53)',
            disabled: 'rgba(0,0,0,0.37)'
        },
        background: {
            default: '#fafafa',
            paper: '#ffffff'
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
};

export const darkTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#577590',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#43AA8B',
            contrastText: '#ffffff'
        },
        error: {
            main: '#F94144'
        },
        warning: {
            main: '#F8961E'
        },
        success: {
            main: '#90BE6D'
        },
        info: {
            main: '#F9C74F'
        },
        background: {
            default: '#303030',
            paper: 'rgba(66,66,66,0.99)'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.7)',
            disabled: 'rgba(255,255,255,0.51)'
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
};
