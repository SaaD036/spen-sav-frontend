import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUserComments } from '../../../../redux/actions/userAction';

const CommentsDrawer = props => {
    const { userId, getUserComments } = props;

    useEffect(() => {
        getUserComments(userId);
    }, [userId]);

    return (
        <div>index</div>
    );
};

const reduxProps = {
    getUserComments: PropTypes.func,
};

CommentsDrawer.propTypes = {
    userId: PropTypes.string.isRequired,
    ...reduxProps,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    getUserComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsDrawer);
