import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GenericDrawer from '../../Drawer';
import DrawerComponent from '../../../users/DrawerComponent';

import { getSingleUser, clearSingleUser } from '../../../../redux/actions/userAction';

const UserDrawer = props => {
    const {
        userId,
        user,
        isDrawerOpen,
        closeDrawer,
        getSingleUser,
        clearSingleUser,
    } = props;

    const onCloseDrawer = () => {
        clearSingleUser();
        closeDrawer();
    };

    useEffect(() => {
        getSingleUser(userId);
    }, [userId]);

    return (
        <GenericDrawer
            isDrawerOpen={isDrawerOpen}
            closeDrawer={onCloseDrawer}
            PaperProps={{
                sx: {
                    height: 'calc(100% - 55px)',
                    top: 50,
                    borderRadius: '0px 10px 10px 0px',
                    overflow: 'hidden',
                },
            }}
        >
            {user ? <DrawerComponent user={user} /> : <>Loading data</>}
        </GenericDrawer>
    );
};

const reduxProps = {
    user: PropTypes.object,
    getSingleUser: PropTypes.func,
    clearSingleUser: PropTypes.func,
};

UserDrawer.propTypes = {
    userId: PropTypes.string.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    ...reduxProps,
};

const mapStateToProps = (state) => ({
    user: state.users.user,
});

const mapDispatchToProps = {
    getSingleUser,
    clearSingleUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDrawer);
