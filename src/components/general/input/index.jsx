import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

import styles from './styles.module.css';

const Input = props => {
    const { label, value, ...rest } = props;

    return (
        <TextField
            label={label}
            value={value}
            variant="outlined"
            size='small'
            fullWidth
            InputLabelProps={{
                classes: {
                    root: styles.cssLabel,
                    focused: styles.cssLabel,
                },
            }}
            InputProps={{
                classes: {
                    root: styles.notchedOutline,
                    focused: styles.notchedOutline,
                    notchedOutline: styles.notchedOutline,
                },
            }}
            onChange={() => console.log()}
            {...rest}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
};

export default Input;
