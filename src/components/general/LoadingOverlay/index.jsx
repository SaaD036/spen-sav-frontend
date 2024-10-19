import React from 'react';

import { Backdrop } from '@mui/material';

import styles from './styles.module.css';

const LoadingOverlay = () => {
    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
            <div className={styles.loader}></div>
        </Backdrop>
    );
};

export default LoadingOverlay;
