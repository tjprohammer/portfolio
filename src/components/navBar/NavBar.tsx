import React from 'react';
import NavBarMobile from './NavBarMobile';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



function NavBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return <div>{isMobile ? <NavBarMobile /> :  <NavBarMobile />}</div>;
}

export default NavBar;
