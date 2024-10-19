import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ComponentOverlay = (props) => {
    const { message } = props;

    return <div></div>;
};

ComponentOverlay.propTypes = {
    message: PropTypes.string,
};

ComponentOverlay.defaultProps = {};

export default ComponentOverlay;
