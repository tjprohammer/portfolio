import React from 'react';
import AppBar from '@mui/material/AppBar';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import { motion } from 'framer-motion';

type Props = {
    defaultIndex?: number;
};

const tabs = [
    {
        title: 'Home',
        id: 'home',
        icon: (
            <Fab size="medium" color="primary" sx={{ mb: 1 }}>
                <Link to="/">
                    <CottageOutlinedIcon sx={{ mt: 1 }} />
                </Link>
            </Fab>
        )
    },
    {
        title: 'About',
        id: 'about',
        icon: (
            <Fab size="medium" color="primary" sx={{ mb: 1 }}>
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
            <Fab size="medium" color="primary" sx={{ mb: 1 }}>
                <Link to="/skills">
                    <FormatListBulletedOutlinedIcon color="success" sx={{ mt: 1 }} />
                </Link>
            </Fab>
        )
    },
    {
        title: 'Contact',
        id: 'contact',
        icon: (
            <Fab size="medium" color="primary" sx={{ mb: 1 }}>
                <Link to="/contact">
                    <EmailOutlinedIcon sx={{ mt: 1 }} />
                </Link>
            </Fab>
        )
    }
];

const variants = {
    visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
        },
      },
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    }

function NavBarMobile({ defaultIndex = 0 }: Props) {
    const [activeTab, setActiveTab] = React.useState(defaultIndex);

    const onTabClick = (tab) => {
        const tabIdClick = tabs.findIndex(
            (tab) => `#${tab.id}` === tab.id
        )
        setActiveTab(tabIdClick !== -1 ? tabIdClick : defaultIndex);
        console.log(tab.id)
    };
    //if current index is active then set styles to button
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
            {tabs.map((tab, index) => (
                <motion.div
                    key={tab.id}
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    variants={variants}
                    animate={activeTab === index ? 'active' : 'inactive'}
                    onClick={() => onTabClick(index)}>
                    {tab.icon}
                </motion.div>
            ))}
        </AppBar>
    );
}

export default NavBarMobile;
