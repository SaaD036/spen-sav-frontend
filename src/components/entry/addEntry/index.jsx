import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DriveFileRenameOutline as EntryIcon } from '@mui/icons-material';
import { Button } from '@mui/material';

import Input from '../../general/Input';
import SelectInput from '../../general/Select';

import { entryType } from '../../../constants/entry';
import styles from './styles.module.css';

const selectItems = [
    {
        title: 'Spending',
        value: entryType.SPENDING,
    },
    {
        title: 'Earning',
        value: entryType.EARNING,
    },
];

export const AddEntry = props => {
    const { closeModal } = props;

    const [amount, setAmount] = useState();
    const [type, setType] = useState(entryType.SPENDING);
    const [date, setDate] = useState(new Date());

    const renderEntryIcon = () => {
        return (
            <div className={styles.iconContainer}>
                <EntryIcon className={styles.icon} />
            </div>
        );
    };

    const renderSelectType = () => {
        return (
            <div className={styles.entryContainer}>
                <div>Entry type : </div>
                <SelectInput
                    value={type}
                    onChange={value => {
                        setType(value);
                        console.log(value);
                    }}
                    selectItems={selectItems}
                    className={styles.entryType}
                />
            </div>
        );
    };

    const renderButtonSection = () => {
        return (
            <div className={styles.buttonSection}>
                <Button className='button-cancel' onClick={closeModal}>
                    Cancel
                </Button>
                <Button className='button'>
                    Save
                </Button>
            </div>
        );
    };

    return (
        <div>
            {renderEntryIcon()}
            <Input
                label='amount'
                value={amount}
                type='number'
                onChange={e => setAmount(e.target.value)}
                style={{ marginTop: '20px' }}
            />
            {renderSelectType()}
            {renderButtonSection()}
        </div>
    );
};

AddEntry.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddEntry);
