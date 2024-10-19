import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ComponentLoadingOverlay = (props) => {
    const { message } = props;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }

                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    border: '1px solid #158901',
                    height: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#158901',
                    },
                }}
            />
            <Box
                sx={{
                    width: '100%',
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                {message}
            </Box>
        </Box>
    );
};

ComponentLoadingOverlay.propTypes = {
    message: PropTypes.string,
};

ComponentLoadingOverlay.defaultProps = {};

export default ComponentLoadingOverlay;
