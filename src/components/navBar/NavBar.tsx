import React from 'react';
import Burger from './Burger';
import { Transition } from 'framer-motion';

type Props = {
    open?: boolean;
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

    React.useEffect(() => {
      setOpen(!open);
    }, [open])

    return (
      open && (
        <div >
            <Burger open={open} height={height} width={width} onClick={onClick} />
        </div>
        )
    );
}

export default NavBar;
