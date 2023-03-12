import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

import styles from './styles.module.css';

const CustomListItem = props => {
    const {
        listItem,
    } = props;

    return (
        <Container
            className={styles.customListContainer}
            disableGutters
        >
            <Container className={styles.listHeader}>
                { listItem.Header }
            </Container>
            <Container className={styles.listBody}>
                { listItem.Body }
            </Container>
        </Container>
    );
};

CustomListItem.propTypes = {
    listItem: PropTypes.object.isRequired,
};

CustomListItem.defaultProps = {};

export default CustomListItem;
