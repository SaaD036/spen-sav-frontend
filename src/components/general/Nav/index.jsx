import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Nav = props => {
    const { navItems, ...rest } = props;

    const [navItem, setNavItem] = useState(null);

    const onNavItemClick = (item) => {
        setNavItem(item);
    };

    const renderNavItems = () => {
        return (
            <div className={styles.navComponents}>
                {(navItems || []).map(item => {
                    let className = `${styles.navComponent}`;

                    if (navItem && navItem.title === item.title) {
                        className = `${className} ${styles.selectedNavComponent}`;
                    }

                    return (
                        <div
                            className={className} onClick={() => onNavItemClick(item)}>
                            {item.title}
                        </div>
                    );
                })}
            </div>
        );
    };

    useEffect(() => {
        if ((navItems || []).length >= 1) {
            setNavItem(navItems[0]);
        }
    }, [navItems]);

    return (
        <div className={styles.navContainer} {...rest}>
            {renderNavItems()}
            <div>{navItem && navItem.renderComponent()}</div>
        </div>
    );
};

Nav.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.object),
};

export default Nav;
