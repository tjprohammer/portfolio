import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';

type MenuItemsProps = {
    name: string;
    to: string;
    id: number;
    open: boolean;
};

const MenuItems = (props: MenuItemsProps) => {
    return (
        <NavBarWrapper>
            <NavCircle>
                <NavCircleBehind>
                    <FlexContainer>
                        <AnimatedFontWrap>
                            <FontWrap>
                                <CottageOutlinedIcon
                                    sx={{ color: '#3c5164', marginRight: '.5em' }}
                                />
                                <NavLinkTo to="/">
                                    <TypoText variant="h5" color="text.primary">
                                        Home
                                    </TypoText>
                                </NavLinkTo>
                            </FontWrap>

                            <FontWrap>
                                <EmojiPeopleOutlinedIcon
                                    sx={{ color: '#3c5164', marginRight: '.5em' }}
                                />
                                <NavLinkTo to="/about">
                                    <TypoText variant="h5" color="text.primary">
                                        About
                                    </TypoText>
                                </NavLinkTo>
                            </FontWrap>
                            <FontWrap>
                                <FormatListBulletedOutlinedIcon
                                    sx={{ color: '#3c5164', marginRight: '.7em' }}
                                />
                                <NavLinkTo to="/skills">
                                    <TypoText variant="h5" color="text.primary">
                                        Skills
                                    </TypoText>
                                </NavLinkTo>
                            </FontWrap>
                            
                            <FontWrap>
                                <EmailOutlinedIcon sx={{ color: '#3c5164', marginRight: '.3em' }} />
                                <NavLinkTo to="/contact">
                                    <TypoText variant="h5" color="text.primary">
                                        Contact
                                    </TypoText>
                                </NavLinkTo>
                            </FontWrap>
                        </AnimatedFontWrap>
                    </FlexContainer>
                </NavCircleBehind>
            </NavCircle>
        </NavBarWrapper>
    );
};

//KEYFRAMES
const menuWrapperIn = keyframes`
0% {
  transform: translateY(-20px);
  width: 10px;
  height: 10px;
}
100% {
  transform: translateY(-20px);
  width: 380px;
  height: 380px;
}
`;

const menuWrapperChildInMd = keyframes`
0% {
  transform: translateY(-20px);
  width: 10px;
  height: 10px;
}
100% {
  transform: translateY(-10px);
  width: 400px;
  height: 400px;
}
`;
const menuTextChildsIn = keyframes`
    0% {
  display: none;
  visibility: hidden;
  transform: translateY(45.9036px);
}
50% {
  visibility: visible;
}
100% {
  visibility: visible;
  transform: translateY(0px);
  display: block;
}
`;
const FlexContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-around;
    -moz-box-align: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    z-index: 9999;
    visibility: hidden;
`;
const AnimatedFontWrap = styled.div`
    display: inline-flex;
    padding: 150px 0px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: 1.8s cubic-bezier(0.29, -0.1, 0.8, 1.1) 0.88s 1 normal forwards running
        ${menuTextChildsIn};
`;
const FontWrap = styled.div`
    margin: 0.5em 0.5em 0.5em 0.5em;
    display: inline-flex;
    text-align: justify;
    align-items: center;
    justify-content: space-between;
`;

export const NavLinkTo = styled(Link)`
    text-decoration: none;
    color: white;
`;

const TypoText = styled(Typography)`
    cursor: pointer;
    position: relative;
    text-decoration: none;
    vertical-align: middle;

    :hover {
        font-size: 1.6em;
        text-decoration: underline;
    }
`;
const NavBarWrapper = styled.div`
    height: 100vh;
    position: fixed;
    top: 2.2392px;
    left: 8.9568px;
`;

const NavCircle = styled.div`
    width: 400.986px;
    height: 400.986px;
    transform: rotate(45deg) translateY(-10.0764px);
    border-radius: 50%;
    position: relative;
    background-color: #577590;
    top: -51.5016px;
    right: 52.6212px;
    z-index: 99999;
    animation: 1s ease 0s 1 normal forwards running ${menuWrapperIn};
`;
const NavCircleBehind = styled.div`
    top: -30px;
    width: 400px;
    height: 400px;
    transform: rotate(45deg) translateY(-10.0764px);
    border-radius: 50%;
    background-color: rgba(87, 117, 144, 0.54);
    position: relative;
    right: -2.2392px;
    animation: 1.1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal forwards running
        ${menuWrapperChildInMd};
`;

export default MenuItems;
