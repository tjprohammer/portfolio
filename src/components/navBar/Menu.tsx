import React from 'react';
import Burger  from './Burger';

import MenuItems from './MenuItems';

type Props = {};

function Menu({}: Props) {
    const [open, setOpen] = React.useState(true);

    const canvasStyle = {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'left',
        margin: '1em 0 1em 1em',
        zIndex: '9999'
    };

    return (
        <div style={canvasStyle}>
            <Burger
                open={open}
                setOpen={setOpen}
                onClick={() => setOpen(!open)}
                strokeWidth="5"
                color="teal"
                lineProps={{ strokeLinecap: 'round' }}
                transition={{ type: 'spring', stiffness: 300, damping: 50 }}
                width={28}
                height={24}
            />
            {open && <MenuItems name="name" to="to" id={1} open={open} />}
        </div>
    );
}

export default Menu;