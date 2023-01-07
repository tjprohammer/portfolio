import React from 'react';
import AppBar from '@mui/material/AppBar';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import { motion, Variants } from 'framer-motion';

type Props = {
    defaultIndex?: number;
};

const tabs = [
    {
        title: 'Home',
        id: 'home',
        icon: (
            <Fab size="medium" color="secondary" sx={{ mb: 1 }}>
                <Link to="/">
                    <CottageOutlinedIcon color="primary" sx={{ mt: 1 }} />
                </Link>
            </Fab>
        )
    },
    {
        title: 'About',
        id: 'about',
        icon: (
            <Fab size="medium" color="secondary" sx={{ mb: 1 }}>
                <Link to="/about">
                    <EmojiPeopleOutlinedIcon color="info" sx={{ mt: 1 }} />
                </Link>
            </Fab>
        )
    },
    {
        title: 'Skills',
        id: 'skills',
        icon: (
            <Fab size="medium" color="secondary" sx={{ mb: 1 }}>
                <Link to="/skills">
                    <FormatListBulletedOutlinedIcon color="warning" sx={{ mt: 1 }} />
                </Link>
            </Fab>
        )
    },
    {
        title: 'Contact',
        id: 'contact',
        icon: (
            <Fab size="medium" color="secondary" sx={{ mb: 1 }}>
                <Link to="/contact">
                    <EmailOutlinedIcon color="secondary" sx={{ mt: 1 }} />
                </Link>
            </Fab>
        )
    }
];

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

function NavBarMobile({ defaultIndex = 0 }: Props) {
    const [activeIndex, setActiveIndex] = React.useState(defaultIndex);

    const handleClick = (i) => {
        setActiveIndex(i);
        console.log(activeIndex);
    };

    return (
        <AppBar
            color="primary"
            sx={{
                top: 'auto',
                bottom: 0,
                pt: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
            {tabs.map((tab, i) => (
                <motion.div
                    key={tab.id}
                    onClick={() => handleClick(i)}
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring',
                        duration: 2,
                        bounce: 0.6,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                    }}
                    variants={itemVariants}>
                    {tab.icon}
                </motion.div>
            ))}
        </AppBar>
    );
}

export default NavBarMobile;
