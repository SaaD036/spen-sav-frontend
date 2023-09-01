import React from 'react';
import PropTypes from 'prop-types';

import { Drawer } from '@mui/material';

import { drawerOpenDirection } from './constant';

const GenericDrawer = props => {
    const { children, isDrawerOpen, closeDrawer, ...rest } = props;

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        closeDrawer();
    };

    return (
        <div>
            <Drawer
                anchor={drawerOpenDirection.LEFT}
                open={isDrawerOpen}
                transitionDuration={250}
                onClose={toggleDrawer()}
                {...rest}
            >
                {children}
            </Drawer>
        </div>
    );
};

GenericDrawer.propTypes = {
    children: PropTypes.node.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    closeDrawer: PropTypes.func.isRequired,
};

export default GenericDrawer;
