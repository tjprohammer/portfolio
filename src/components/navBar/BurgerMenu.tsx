import React from 'react';
import { Burger, BurgerLine } from './navBarStyles';

type Props = { 
    open: boolean; 
    setOpen: (v: boolean) => void };

function BurgerMenu({open, setOpen}: Props) {
    return (
        <Burger onClick={() => setOpen(!open)}>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
        </Burger>
    );
}

export default BurgerMenu;
