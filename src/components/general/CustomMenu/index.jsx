import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from '@mui/material';

import styles from './styles.module.css';

const CustomMenu = props => {
    const { anchorEl, menuItemList, handleClose } = props;

    return (
        <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {(menuItemList || []).map((menuItem, index) => {
                const { label, onClick } = menuItem;

                return (
                    <div
                        key={`menu-id-${index}`}
                        className={styles.menuItemsWrapper}
                        style={index === 0 ? {} : { borderTop: '1px solid #158901' }}
                    >
                        <div
                            className={styles.menuItems}
                            onClick={onClick}
                        >
                            {label}
                        </div>
                    </div>
                );
            })}
        </Menu>
    );
};

CustomMenu.propTypes = {
    anchorEl: PropTypes.any,
    menuItemList: PropTypes.array,
    handleClose: PropTypes.func,
};

CustomMenu.defaultProps = {
    anchorEl: null,
    menuItemList: [],
};

export default CustomMenu;
