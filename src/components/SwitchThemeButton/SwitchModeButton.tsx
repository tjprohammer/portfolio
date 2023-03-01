import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import LightIcon from '@mui/icons-material/Brightness7';
import DarkIcon from '@mui/icons-material/Brightness4';
import { ColorContext } from '../../context/ThemeContext';
export const SwitchModeButton = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorContext);
    return (
        <IconButton sx={{ float: 'right'}} color="inherit" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
        </IconButton>
    );
};
