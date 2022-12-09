import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './Context/themeColors';
import React from 'react';
import LandingPage from './Pages/LandingPage';
('./Pages/LandingPage');

const App = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <LandingPage />
            </ThemeProvider>
        </>
    );
};
export default App;
