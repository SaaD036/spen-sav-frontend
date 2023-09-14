import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllEntries } from '../../../redux/actions/entryAction';

const EntryList = props => {
    const { entries, getAllEntries } = props;

    useEffect(() => {
        getAllEntries();
    }, []);

    return (
        <div>entryList</div>
    );
};

const reduxProps = {
    entries: PropTypes.array,
    getAllEntries: PropTypes.func,
};

EntryList.propTypes = {
    ...reduxProps,
};

const mapStateToProps = (state) => ({
    entries: state.entries.entries,
    totalEntry: state.entries.totalEntry,
});

const mapDispatchToProps = {
    getAllEntries,
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
