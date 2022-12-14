import React from 'react';
import BurgerMenu from './Burger';
import { Transition } from 'framer-motion';

type Props = {
    open?: boolean;
    setOpen: (v: boolean) => void;
    color?: string;
    strokeWidth?: string | number;
    transition?: Transition;
    lineProps?: any;
    width: number;
    height: number;
    onClick: React.MouseEventHandler;
};

function NavBar({height, width, onClick}: Props) {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <BurgerMenu open={open} setOpen={setOpen} height={height} width={width} onClick={onClick} />
        </div>
    );
}

export default NavBar;
