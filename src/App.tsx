import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ColorContext, darkTheme, lightTheme } from './context/ThemeContext';
import React from 'react';
import { SwitchModeButton } from './components/SwitchThemeButton/SwitchModeButton';
import NavBar from './components/navBar/Menu';
import LandingPage from './Pages/LandingPage';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function App({}) {
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
        () => createTheme(mode === 'light' ? lightTheme : darkTheme),
        [mode]
    );
    return (
        <ColorContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme>
                    <SwitchModeButton />
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </CssBaseline>
            </ThemeProvider>
        </ColorContext.Provider>
    );
}
export default App;
