import React from 'react';
import BurgerMenu from './BurgerMenu';

type Props = { 
    open: boolean; 
    setOpen: (v: boolean) => void };

function NavBar({}: Props) {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <BurgerMenu open={open} setOpen={setOpen} />
        </div>
    );
}

export default NavBar;
