import React from 'react';
import Burger from './Burger';
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

function NavBar({height, width}: Props) {
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);
    const onClick = () => {
        if (ref.current) {
        setOpen(!open)
        }
      };
    return (
        <div ref={ref}>
            <Burger open={open} setOpen={setOpen} height={height} width={width} onClick={onClick}  />
        </div>
    );
}

export default NavBar;
