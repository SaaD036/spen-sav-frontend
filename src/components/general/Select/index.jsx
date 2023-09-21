import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const SelectInput = props => {
    const { value, onChange, selectItems, className, ...rest } = props;

    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            className={`${styles.select} ${className}`}
            {...rest}
        >
            {selectItems.map(item => <option value={item.value}>{item.title}</option>)}
        </select>
    );
};

SelectInput.propTypes = {
    value: PropTypes.string,
    selectItems: PropTypes.array,
};

SelectInput.defaultProps = {
    selectItems: [],
};

export default SelectInput;
