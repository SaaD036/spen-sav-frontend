import React from 'react';

import { Backdrop } from '@mui/material';

import ComponentOverlay from './ComponentOverlay';

const LoadingOverlay = () => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            onClick={() => {}}
        >
            <ComponentOverlay />
        </Backdrop>
    );
};

export default LoadingOverlay;
