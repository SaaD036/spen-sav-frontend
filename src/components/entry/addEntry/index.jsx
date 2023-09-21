import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DriveFileRenameOutline as EntryIcon } from '@mui/icons-material';
import { Button } from '@mui/material';

import Input from '../../general/Input';
import SelectInput from '../../general/Select';

import { createEntry } from '../../../redux/actions/entryAction';

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
    const { closeModal, createEntry } = props;

    const [amount, setAmount] = useState();
    const [type, setType] = useState(entryType.SPENDING);
    const [date, setDate] = useState(new Date());

    const disableSaveButton = () => {
        const isAmountValid = !isNaN(parseInt(amount)) && parseInt(amount) > 0;
        const isTypeValid = (type || '').length > 0 && (type === entryType.SPENDING || type === entryType.EARNING);

        return !(isAmountValid && isTypeValid);
    };

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
                <Button className='button' disabled={disableSaveButton()}>
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

const mapDispatchToProps = {
    createEntry,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEntry);
