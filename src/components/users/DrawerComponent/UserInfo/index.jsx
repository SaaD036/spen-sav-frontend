import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Tooltip } from '@mui/material';

import {
    Email as EmailIcon,
    Visibility as ViewerIcon,
    AdminPanelSettings as AdminIcon,
    // SupervisorAccount as AdminIcon,
    // NoteAlt as EntryIcon,
    // MoreVert as VerticalDotIcon,
} from '@mui/icons-material';

import { getAvatarFromUserName } from '../../utilities';

import { userRole } from '../../../../constants/user';
import styles from './styles.module.css';

export const UserInfo = props => {
    const { firstName, lastName, email, role } = props;

    const roleIcon = {
        [userRole.ADMIN]: <AdminIcon fontSize='small' className={styles.icon} />,
        [userRole.VIEWER]: <ViewerIcon fontSize='small' className={styles.icon} />,
    };

    const renderEmail = () => {
        return (
            <div className={styles.userEmailRoleContainer}>
                <div className={styles.nameRoleContainer}>
                    <EmailIcon fontSize='small' className={styles.icon} />
                    <div>{email}</div>
                </div>
                <Tooltip
                    title={`${firstName} ${lastName} is ${role}`}
                    className={styles.roleIconTooltip}
                    onClick={() => console.log('Fuck')}
                >
                    {roleIcon[role]}
                </Tooltip>
            </div>
        );
    };

    const renderNameAndAvatar = () => {
        return (
            <div className={styles.userInfoContainer}>
                <div className={`${styles.userAvatar} center`}>
                    <b>{getAvatarFromUserName(firstName, lastName)}</b>
                </div>
                <div>
                    <h1 className={styles.userName}>{`${firstName} ${lastName}`}</h1>
                    {renderEmail()}
                </div>
            </div>
        );
    };

    return (
        <div>
            {renderNameAndAvatar()}
        </div>
    );
};

UserInfo.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
