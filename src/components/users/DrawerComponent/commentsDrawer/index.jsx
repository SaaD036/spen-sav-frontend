import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Container, Grid } from '@mui/material';

import { getUserComments } from '../../../../redux/actions/userAction';

import styles from './styles.module.css';

const CommentsDrawer = props => {
    const { userId, comments, getUserComments } = props;

    const renderComment = (comment, index) => {
        const style = index === 0
            ? {}
            : {
                marginTop: '4px',
                borderTop: '1px solid #158901',
            };

        return (
            <Grid item className={styles.commentCotainer} style={style} >
                <div className={styles.comment}>{comment.content}</div>
                <div className={styles.entry}>
                    <b>Entry</b> : {comment.entryId.amount} BDT
                </div>
                <div className={styles.entry}>
                    <b>Name</b> : {comment.entryId.userId.firstName} {comment.entryId.userId.lastName}
                </div>
            </Grid>
        );
    };

    const renderComments = () => {
        return (
            <Grid spacing={5}>
                {(comments || []).map((comment, index) => renderComment(comment, index))}
            </Grid>
        );
    };

    useEffect(() => {
        getUserComments(userId);
    }, [userId]);

    return (
        <Container className={styles.container}>
            {renderComments()}
        </Container>
    );
};

const reduxProps = {
    getUserComments: PropTypes.func,
};

CommentsDrawer.propTypes = {
    userId: PropTypes.string.isRequired,
    ...reduxProps,
};

const mapStateToProps = (state) => ({
    comments: state.users.userComment,
});

const mapDispatchToProps = {
    getUserComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsDrawer);
