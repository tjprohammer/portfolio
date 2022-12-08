import { createTheme } from "@mui/material";

export const darktheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#a6ffd8",
    },
    secondary: {
      main: "#ffdea6",
    },
    error: {
      main: "#ffb2a6",
    },
    warning: {
      main: "#bd8177",
    },
    success: {
      main: "#8dd4b1",
    },
    info: {
      main: "#bfa6ff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Josefin Slab",
      fontWeight: 500,
    },
    fontFamily: "Playfair Display",
    fontWeightBold: 700,
    subtitle1: {
      fontFamily: "Raleway",
    },
    subtitle2: {
      fontFamily: "Raleway",
    },
    body1: {
      fontFamily: "Raleway",
    },
    body2: {
      fontFamily: "Raleway",
    },
    caption: {
      fontFamily: "Raleway",
    },
    overline: {
      fontFamily: "Raleway",
    },
    h2: {
      fontWeight: 500,
    },
  },
});

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#a6ffd8',
    },
    secondary: {
      main: '#ffdea6',
    },
    error: {
      main: '#ffb2a6',
    },
    warning: {
      main: '#bd8177',
    },
    success: {
      main: '#8dd4b1',
    },
    info: {
      main: '#bfa6ff',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Josefin Slab',
      fontWeight: 500,
    },
    fontFamily: 'Playfair Display',
    fontWeightBold: 700,
    subtitle1: {
      fontFamily: 'Raleway',
    },
    subtitle2: {
      fontFamily: 'Raleway',
    },
    body1: {
      fontFamily: 'Raleway',
    },
    body2: {
      fontFamily: 'Raleway',
    },
    caption: {
      fontFamily: 'Raleway',
    },
    overline: {
      fontFamily: 'Raleway',
    },
    h2: {
      fontWeight: 500,
    },
  },
});