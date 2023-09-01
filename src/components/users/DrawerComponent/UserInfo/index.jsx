import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.css';

export const UserInfo = props => {
    const { name } = props;

    return (
        <div className={styles.userInfoContainer}>
            <h1>{name}</h1>
        </div>
    );
};

UserInfo.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
