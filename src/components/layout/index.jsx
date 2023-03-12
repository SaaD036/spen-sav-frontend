import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from './sidebar';

import styles from './styles.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.children}>
                { children }
            </div>
            <Sidebar />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
};

const mapDispatchToProps = state => ({});

const mapStateToProps = {};

export default connect(mapDispatchToProps, mapStateToProps)(Layout);
