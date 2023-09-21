import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Grid } from '@mui/material';

import EntryList from './entryList';
import Input from '../general/Input';
import CustomModal from '../general/CustomModal';
import AddEntry from './addEntry';

import { addEntryModalTitle } from './constant';
import styles from './styles.module.css';

const Entry = props => {
    const { selectedTab } = props;

    const [userName, setUserName] = useState('');
    const [amount, setAmount] = useState();
    const [openAddEntryModal, setOpenAddEntryModal] = useState(false);

    const renderAddEntryModal = () => {
        return (
            <CustomModal
                title={addEntryModalTitle}
                open={openAddEntryModal}
                onClose={() => setOpenAddEntryModal(false)}
            >
                <AddEntry closeModal={() => setOpenAddEntryModal(false)} />
            </CustomModal>
        );
    };

    const renderFilters = () => {
        return (
            <Grid className={styles.filterContainer}>
                <Input
                    label='Amount'
                    value={amount}
                    style={{ width: '180px', marginRight: '5px' }}
                    onChange={e => setAmount(e.target.value)}
                    type='number'
                    className={styles.filterInputs}
                />
                <Input
                    label='Search name'
                    value={userName}
                    style={{ width: '250px' }}
                    onChange={e => setUserName(e.target.value)}
                    className={styles.filterInputs}
                />
            </Grid>
        );
    };

    const renderTopElements = () => {
        return (
            <div className={styles.topContainer}>
                <Grid container className={styles.gridContainer}>
                    <Button
                        className='button'
                        onClick={() => setOpenAddEntryModal(true)}
                    >
                        Add Entry
                    </Button>
                    {renderFilters()}
                </Grid>
            </div>
        );
    };

    return (
        <div>
            {renderAddEntryModal()}
            {renderTopElements()}
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
