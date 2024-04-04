import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MoreVert as VerticalDotIcon } from '@mui/icons-material';

import CustomMenu from '../../general/CustomMenu';
import CustomList from '../../general/CustomList';
import LoadingOverlay from '../../general/LoadingOverlay';
import EntryListBody from './EntryListBody';

import { getAllEntries } from '../../../redux/actions/entryAction';

import { getCustomListToRender } from '../../../utilities/customListUtilities';

import styles from './styles.module.css';

const EntryList = props => {
    const { amount, name, type, entries, getAllEntries } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const loadEntryData = async (filter = {}) => {
        setIsLoading(true);
        await getAllEntries(filter);
        setIsLoading(false);
    };

    const getMenuItemsArray = () => {
        const menuItems = [
            {
                label: 'Edit entry',
                onClick: () => console.log('SaaD edit entry'),
            },
            {
                label: 'See details',
                onClick: () => console.log('SaaD see details'),
            },
            {
                label: 'Delete',
                onClick: () => console.log('SaaD delete'),
            },
        ];

        return menuItems;
    };

    const renderEntryListHeader = (entry) => {
        return (
            <div className={styles.entryHeader}>
                <b style={{ cursor: 'pointer' }}>
                    <div>Total : {entry.amount}</div>
                </b>
                <div onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <VerticalDotIcon className={styles.headerOptionIcon}/>
                </div>
            </div>
        );
    };

    useEffect(() => {
        const filter = {};

        if (amount) {
            filter.amount = amount;
        }

        if (name) {
            filter.name = name;
        }

        if (type) {
            filter.type = type;
        }

        loadEntryData(filter);
    }, [amount, name, type]);

    useEffect(() => {
        loadEntryData();
    }, []);

    return (
        <div>
            <CustomMenu
                anchorEl={anchorEl}
                handleClose={() => setAnchorEl(null)}
                menuItemList={getMenuItemsArray()}
            />
            {isLoading
                ? <LoadingOverlay />
                : <CustomList
                    lists={getCustomListToRender(
                        entries,
                        entry => renderEntryListHeader(entry),
                        entry => <EntryListBody entry={entry}/>,
                    )}
                />
            }
        </div>
    );
};

const reduxProps = {
    entries: PropTypes.array,
    getAllEntries: PropTypes.func,
};

EntryList.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    ...reduxProps,
};

EntryList.defaultProps = {
    type: 'all',
};

const mapStateToProps = (state) => ({
    entries: state.entries.entries,
    totalEntry: state.entries.totalEntry,
});

const mapDispatchToProps = {
    getAllEntries,
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
