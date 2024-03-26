import React from 'react';
import PropTypes from 'prop-types';

import TypeIcon from '@mui/icons-material/ClosedCaptionDisabled';
import CommentIcon from '@mui/icons-material/RateReview';
import EntryIcon from '@mui/icons-material/NoteAlt';

import styles from './styles.module.css';

const EntryListBody = props => {
    const { entry } = props;

    const getCommentText = () => {
        let commentText = 'No comment';

        if (entry.totalComment === 1) {
            commentText = '1 comment';
        } else if (entry.totalComment >= 2) {
            commentText = `${entry.totalComment} comments`;
        }

        return commentText;
    };

    const getName = () => {
        const { firstName, lastName } = entry.user;
        let name = '';

        if (firstName) {
            name = firstName;
        }

        if (lastName) {
            name = `${name} ${lastName}`;
        }

        return (firstName || lastName) ? name.trim() : 'Unknown user';
    };

    return (
        <div className={styles.entryBody}>
            <div className={styles.entryItemWrapper}>
                <TypeIcon className='icon' />
                <div style={{ marginLeft: '10px' }}>{entry.type}</div>
            </div>
            <div className={styles.entryItemWrapper}>
                <CommentIcon className='icon' />
                <div style={{ marginLeft: '10px' }}>{getCommentText()}</div>
            </div>
            <div className={styles.entryItemWrapper}>
                <EntryIcon className='icon' />
                <div style={{ marginLeft: '10px' }}>{getName()}</div>
            </div>
        </div>
    );
};

EntryListBody.propTypes = {
    entry: PropTypes.object,
};

export default EntryListBody;
