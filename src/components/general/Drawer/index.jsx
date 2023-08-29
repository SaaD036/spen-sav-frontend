import React, { useState } from 'react';

import { Drawer } from '@mui/material';

const GenericDrawer = props => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsSidebarOpen(open);
    };

    return (
        <div>
            <Drawer
                anchor='right'
                open={isSidebarOpen}
                transitionDuration={250}
                onClose={toggleDrawer('left', false)}
            >
                Hello Man, Fuck Man
            </Drawer>
        </div>
    );
};

export default GenericDrawer;
