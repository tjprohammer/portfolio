import {
    createTheme,
    CssBaseline,
    PaletteMode,
    ThemeProvider,
  } from "@mui/material";
import { ColorContext, darkTheme, lightTheme} from './context/ThemeContext';
import React from 'react';
import LandingPage from './Pages/LandingPage';
import { SwitchModeButton } from "./components/SwitchThemeButton/SwitchModeButton";

const App = () => {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
            }
        }),
        []
    );
    const theme = React.useMemo(
        () => createTheme(mode === "light" ? lightTheme : darkTheme),
        [mode]
      );
    return (
        <ColorContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <SwitchModeButton />
                <LandingPage />
            </ThemeProvider>
        </ColorContext.Provider>
    );
};
export default App;
