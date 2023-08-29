import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    Input,
    Grid,
    Tooltip,
    Container,
} from '@mui/material';
import {
    Email as EmailIcon,
    Visibility as ViewerIcon,
    SupervisorAccount as AdminIcon,
    NoteAlt as EntryIcon,
    MoreVert as VerticalDotIcon,
} from '@mui/icons-material';

import { getAllUsers } from '../../redux/actions/userAction';

import CustomList from '../general/customList';
import UserDrawer from '../general/Drawer/UserDrawer';

import { userRole } from './../../constants/user';
import { getCustomListToRender } from '../../utilities/customListUtilities';
import styles from './styles.module.css';

const Users = props => {
    const {
        users,
        getAllUsers,
    } = props;

    const [name, setName] = useState('');
    const [userId, setUserId] = useState();
    const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);

    const onNameTextChange = e => {
        // setName(e.target.value.trim());
        setName(name);
    };

    const renderUserDrawer = () => {
        return (
            <UserDrawer
                userId={userId}
                isDrawerOpen={isUserDrawerOpen}
                closeDrawer={() => {
                    setIsUserDrawerOpen(false);
                    setUserId();
                }}
            />
        );
    };

    const renderSearchFields = () => {
        return (
            <div className={styles.userListSearchField}>
                <Input
                    sx={{
                        border: '1px solid #158901',
                        width: '200px',
                    }}
                    onChange={onNameTextChange}
                />
            </div>
        );
    };

    const renderUserListHeader = user => {
        return (
            <div className={styles.userListHeader}>
                <b onClick={() => {
                    setUserId(user._id);
                    setIsUserDrawerOpen(true);

                    console.log('Clicked user name : ', user._id);
                }}>{`${user.firstName} ${user.lastName}`}</b>
                <VerticalDotIcon className={styles.headerOptionIcon}/>
            </div>
        );
    };

    const renderUserListBody = user => {
        return (
            <Grid direction='column' className={styles.userListBody}>
                <div className={styles.userListBodyItem}>
                    <EmailIcon fontSize='small' className={styles.userListEmailIcon} />
                    <span>
                        { user.email }
                    </span>
                </div>
                <div className={styles.userListBodyItem}>
                    <Tooltip title="User role">
                        {user.role === userRole.ADMIN
                            ? <AdminIcon fontSize='small' className={styles.userListEmailIcon} />
                            : <ViewerIcon fontSize='small' className={styles.userListEmailIcon} />
                        }
                    </Tooltip>
                    <span>
                        { user.role }
                    </span>
                </div>
                <div className={styles.userListBodyItem}>
                    <Tooltip title="Total entry">
                        <EntryIcon fontSize='small' className={styles.userListEmailIcon} />
                    </Tooltip>
                    <span>
                        { user.entryCount }
                    </span>
                </div>
            </Grid>
        );
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className={styles.usersPageContainer}>
            {userId && renderUserDrawer()}
            {renderSearchFields()}
            <Container className={styles.userListContainer}>
                <CustomList
                    lists={getCustomListToRender(users, renderUserListHeader, renderUserListBody)}
                />
            </Container>
        </div>
    );
};

Users.propTypes = {
    getAllUsers: PropTypes.func,
    users: PropTypes.array,
    totalUser: PropTypes.number,
};

Users.defaultProps = {
    users: [],
    totalUser: 0,
};

const mapStateToProps = state => ({
    users: state.users.users,
    totalUser: state.users.totalUser,
});

const mapDispatchToProps = {
    getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
