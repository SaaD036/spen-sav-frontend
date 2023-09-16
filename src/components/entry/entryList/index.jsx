import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CustomList from '../../general/customList';

import { getAllEntries } from '../../../redux/actions/entryAction';

import { getCustomListToRender } from '../../../utilities/customListUtilities';

const EntryList = props => {
    const { amount, name, type, entries, getAllEntries } = props;

    const loadEntryData = async (filter = {}) => {
        await getAllEntries(filter);
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
            <CustomList
                lists={getCustomListToRender(
                    entries,
                    entry => <div>Total : {entry.amount}</div>,
                    entry => <div>List body here</div>,
                )}
            />
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
