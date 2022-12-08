import { ThemeProvider } from "@mui/material";
import React from "react";
import LandingPage from "./Pages/LandingPage";
import { darktheme } from "./useTheme";

const App = () => {
  return (
    <ThemeProvider theme={darktheme}>
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
