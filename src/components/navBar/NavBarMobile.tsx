import React from 'react';
import AppBar from '@mui/material/AppBar';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLinkTo } from './MenuItems';

type Props = {};

function NavBarMobile({}: Props) {
    return (
        <AppBar
            sx={{
                top: 'auto',
                bottom: 0,
                pt: 1
            }}>
            <Container
                sx={{
                    top: 'auto',
                    bottom: 0,
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    display: 'flex'
                }}>
                <Button>
                    <NavLinkTo to="/">
                        <CottageOutlinedIcon 
                            sx={{ color: 'secondary.light', marginRight: '.5em' }}
                        />
                    </NavLinkTo>
                </Button>

                <Button>
                    <NavLinkTo to="/about">
                        <EmojiPeopleOutlinedIcon
                            sx={{ color: 'secondary.light', marginRight: '.5em' }}
                        />
                    </NavLinkTo>
                </Button>
                <Button>
                    <NavLinkTo to="/skills">
                        <FormatListBulletedOutlinedIcon
                            sx={{ color: 'secondary.light', marginRight: '.7em' }}
                        />
                    </NavLinkTo>
                </Button>
                <Button>
                    <NavLinkTo to="/contact">
                        <EmailOutlinedIcon sx={{ color: 'secondary.light', marginRight: '.3em' }} />
                    </NavLinkTo>
                </Button>
            </Container>
        </AppBar>
    );
}

export default NavBarMobile;
