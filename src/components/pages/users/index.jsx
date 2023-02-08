import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllUsers } from '../../../redux/actions/userAction';

import TabComponent from '../../general/Tabs';
import CustomList from '../../general/customList';

import { getTabItems } from './utilities';

import styles from './styles.module.css';

const UserPage = props => {
    const {
        getAllUsers,
    } = props;

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className='page'>
            <TabComponent tabs={getTabItems()}/>
        </div>
    );
};

UserPage.propTypes = {
    getAllUsers: PropTypes.func,
};

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = {
    getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
