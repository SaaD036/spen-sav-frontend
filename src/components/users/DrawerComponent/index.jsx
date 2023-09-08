import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserInfo from './UserInfo';
import Nav from '../../general/Nav';

import { getNavComponents } from '../utilities';

export const UserDrawerComponent = props => {
    const { user } = props;

    return (
        <div>
            <UserInfo
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                role={user.role}
            />
            <Nav navItems={getNavComponents(user._id)} />
        </div>
    );
};

UserDrawerComponent.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserDrawerComponent);
