import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserInfo from './UserInfo';

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
        </div>
    );
};

UserDrawerComponent.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserDrawerComponent);
