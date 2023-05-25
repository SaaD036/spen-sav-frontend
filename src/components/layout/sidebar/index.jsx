import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton } from '@mui/material';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import { sideBarItems } from './utilities';

import styles from './styles.module.css';

const Sidebar = props => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsSidebarOpen(open);
    };

    const list = (anchor) => (
        <Box
            className={styles.sidebarBox}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {(sideBarItems || []).map((item, index) => (
                    <Link to={item.route} className='links' onClick={() => setIsSidebarOpen(false)}>
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {<item.icon />}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <div className={styles.sibebarContainer}>
            <Button
                onClick={toggleDrawer('right', true)}
                className={styles.sidebarOpenButton}
            >
                <ArrowCircleLeftIcon className={styles.sidebarOpenIcon}/>
            </Button>
            <Drawer
                anchor='right'
                open={isSidebarOpen}
                transitionDuration={850}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
};

export default Sidebar;
