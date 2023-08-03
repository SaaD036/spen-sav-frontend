import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoutes = props => {
    const {
        user,
        auth,
        redirectIfNotLoggedIn,
        redirect,
        ...rest
    } = props;

    if (auth) {
        if (!user) {
            return <Navigate to={redirectIfNotLoggedIn} replace/>;
        }

        return <Route {...rest} />;
    } else {
        if (user) {
            return <Navigate to={redirect} replace />;
        }

        return <Route {...rest} />;
    }
};

ProtectedRoutes.propTypes = {
    children: PropTypes.any,
    redirect: PropTypes.string,
    auth: PropTypes.bool,
};

ProtectedRoutes.defaultProps = {
    children: <></>,
    redirect: '/',
    redirectIfNotLoggedIn: '/auth/login',
    auth: true,
};

const mapStateToProps = (state) => ({
    user: state.auth.loggedInUser,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);
