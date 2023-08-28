import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getLoggedInUser } from '../utilities/users';

const RequiredNotAuthRoute = props => {
    const {
        component,
        user,
        redirect,
    } = props;

    if (user) {
        return <Navigate to={redirect} replace />;
    }

    return component;
};

RequiredNotAuthRoute.propTypes = {
    component: PropTypes.any.isRequired,
    redirect: PropTypes.string,
};

RequiredNotAuthRoute.defaultProps = {
    redirect: '/',
};

const mapStateToProps = (state) => ({
    user: getLoggedInUser(),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RequiredNotAuthRoute);
