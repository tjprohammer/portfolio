import React from 'react';
import {
    createTheme,
} from '@mui/material';
import { Theme } from '@emotion/react';

interface ColorContextSchema {
    toggleColorMode: () => void;
}

export const ColorContext = React.createContext<ColorContextSchema>(
    {} as ColorContextSchema
);

export const lightTheme: Theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#577590',
            light: '#7890a6',
             dark: '#3c5164',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#43AA8B',
            light: '#68bba2',
            dark: '#2e7661',
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
            fontWeight: 600
        },
        h2: {
            fontFamily: 'Josefin Slab',
            fontWeight: 300
        },
        h3: {
            fontFamily: 'Josefin Slab',
            fontWeight: 200
        },
        h4: {
            fontFamily: 'Josefin Slab',
            fontWeight: 400
        },
        h5: {
            fontFamily: 'Josefin Slab',
            fontWeight: 300
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
    }
});

export const darkTheme: Theme = {
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
            fontWeight: 600
        },
        h2: {
            fontFamily: 'Josefin Slab',
            fontWeight: 300
        },
        h3: {
            fontFamily: 'Josefin Slab',
            fontWeight: 200
        },
        h4: {
            fontFamily: 'Josefin Slab',
            fontWeight: 400
        },
        h5: {
            fontFamily: 'Josefin Slab',
            fontWeight: 300
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
    }
};
