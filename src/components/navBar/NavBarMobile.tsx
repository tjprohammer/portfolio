import React from 'react';
import AppBar from '@mui/material/AppBar';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
type Props = {};



function NavBarMobile({}: Props) {

    return (
        <AppBar
        color="primary"
            sx={{
                top: 'auto',
                bottom: 0,
                pt: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>


            <Fab size="medium" color="primary" sx={{mb: 1}}>
                <Link to="/">
                    <CottageOutlinedIcon  sx={{mt: 1}} />
                </Link>
            </Fab>
            <Fab size="medium" color="primary" sx={{mb: 1}}>
                <Link to="/about">
                    <EmojiPeopleOutlinedIcon color="info" sx={{mt: 1}}  />
                </Link>
            </Fab>
            <Fab size="medium" color="primary" sx={{mb: 1}}>
                <Link to="/skills">
                    <FormatListBulletedOutlinedIcon color="success" sx={{mt: 1}} />
                </Link>
            </Fab>
            <Fab size="medium" color="primary" sx={{mb: 1}}>
                <Link to="/contact">
                    <EmailOutlinedIcon color="warning" sx={{mt: 1}} />
                </Link>
            </Fab>
        </AppBar>
    );
}

export default NavBarMobile;
