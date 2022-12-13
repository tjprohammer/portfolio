import React from 'react';
import {BurgerMenu} from './BurgerMenu';

type Props = { 

};


function NavBar({}: Props) {
    const [open, setOpen] = React.useState(false);

    const canvasStyle = {
      display: "flex",
      width: "100vw",
      height: "100vh",
      alignItems: "start",
      justifyContent: "left",
      marginLeft: '1em'
    };
  

  
    return (
      <div style={canvasStyle}>
        <BurgerMenu 
          open={open}
          onClick={() => setOpen(!open)}
          strokeWidth="5"
          color='teal'
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          width={28}
          height={24}
        />
      </div>
    );
  }

export default NavBar;
