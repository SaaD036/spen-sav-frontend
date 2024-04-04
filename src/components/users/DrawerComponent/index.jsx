import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserInfo from './UserInfo';
import Nav from '../../general/Nav';

import { getNavComponents } from '../utilities';

const style = {
    drawerContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'none',
    },
    navContainer: {
        flexGrow: 1,
    },
};

export const UserDrawerComponent = props => {
    const { user } = props;

    return (
        <div style={style.drawerContainer}>
            <UserInfo
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                role={user.role}
            />
            <div style={style.navContainer}>
                <Nav navItems={getNavComponents(user._id)} />
            </div>
        </div>
    );
};

UserDrawerComponent.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserDrawerComponent);
