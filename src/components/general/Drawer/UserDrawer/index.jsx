import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GenericDrawer from '../../Drawer';

import { getSingleUser } from '../../../../redux/actions/userAction';

import styles from './styles.module.css';

const UserDrawer = props => {
    const { userId, user, isDrawerOpen, closeDrawer, getSingleUser } = props;

    useEffect(() => {
        getSingleUser(userId);
    }, [userId]);

    return (
        <GenericDrawer
            isDrawerOpen={isDrawerOpen}
            closeDrawer={closeDrawer}
        >
            <div className={styles.userDrawerContainer}>
                Fucker {user ? `${user.firstName} ${user.lastName}` : userId}
            </div>
        </GenericDrawer>
    );
};

UserDrawer.propTypes = {
    userId: PropTypes.string.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    getSingleUser: PropTypes.func,
    user: PropTypes.object,
};

const mapStateToProps = (state) => ({
    user: state.users.user,
});

const mapDispatchToProps = {
    getSingleUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDrawer);
