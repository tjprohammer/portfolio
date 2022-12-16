import React from 'react';
import Burger from './Burger';
import useOnClickOutside from '../../hooks/useOutsideClick'

import MenuItems from './MenuItems';

type Props = {};

function Menu({}: Props) {
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);

    useOnClickOutside(ref, () => setOpen(false));


    const canvasStyle = {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'left',
        margin: '1em 0 1em 1em',
        zIndex: '9999',
        width: '50%',
    };

    return (
        <div style={canvasStyle} ref={ref} >
            <Burger
                open={open}
                onClick={() => setOpen(!open)}
                strokeWidth="5"
                color="#3c5164"
                lineProps={{ strokeLinecap: 'round' }}
                transition={{ type: 'spring', stiffness: 300, damping: 50 }}
                width={28}
                height={24}
            />
            {
            open && 
                <MenuItems name="name" to="to" id={1} open={open} />
            }
        </div>
    );
}

export default Menu;
