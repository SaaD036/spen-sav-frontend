import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EntryList from './entryList';
import Input from '../general/input';

import styles from './styles.module.css';

const Entry = props => {
    const { selectedTab } = props;

    const [userName, setUserName] = useState('');
    const [amount, setAmount] = useState();

    const renderFilters = () => {
        return (
            <div className={styles.filterContainer}>
                <Input
                    label='Amount'
                    value={amount}
                    style={{ width: '180px' }}
                    onChange={e => setAmount(e.target.value)}
                    type='number'
                />
                <Input
                    label='Search name'
                    value={userName}
                    style={{ width: '250px' }}
                    onChange={e => setUserName(e.target.value)}
                />
            </div>
        );
    };

    return (
        <div>
            {renderFilters()}
            <EntryList
                amount={amount}
                name={userName}
                type={selectedTab}
            />
        </div>
    );
};

Entry.propTypes = {
    selectedTab: PropTypes.string,
};

export default Entry;
