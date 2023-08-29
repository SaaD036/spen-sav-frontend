import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GenericDrawer from '../../Drawer';

import styles from './styles.module.css';

const UserDrawer = props => {
    const { userId, isDrawerOpen, closeDrawer } = props;

    return (
        <GenericDrawer
            isDrawerOpen={isDrawerOpen}
            closeDrawer={closeDrawer}
        >
            <div className={styles.userDrawerContainer}>Fucker {userId}</div>
        </GenericDrawer>
    );
};

UserDrawer.propTypes = {
    userId: PropTypes.string.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    closeDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserDrawer);
