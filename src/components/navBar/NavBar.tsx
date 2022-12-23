import React from 'react';
import NavBarMobile from './NavBarMobile';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from './Menu';

type Props = {

};

function NavBar({}: Props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return <div>{isMobile ? <NavBarMobile /> :  <Menu />}</div>;
}

export default NavBar;
