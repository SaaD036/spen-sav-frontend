import React from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs } from '@mui/material';

import styles from './styles.module.css';

const GenericTab = props => {
    const { selectedTabValue, tabItems, onTabSelect } = props;

    return (
        <div className={`${styles.tabContainer} center`}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={selectedTabValue}
                onChange={(event, newValue) => onTabSelect(newValue)}
                className={styles.tabs}
                sx={{
                    '& button.Mui-selected': { color: '#158901' },
                }}
                TabIndicatorProps={{
                    style: { background: '#158901' },
                }}
            >
                {(tabItems || []).map(item => {
                    return (
                        <Tab label={item.label} value={item.value} />
                    );
                })}
                {/* <Tab label={tabLabels.ENTRY} classes={{ label: { color: '#158901' } }}value={tabTypes.ENTRY} />
                <Tab label={tabLabels.COMMENTS} value={tabTypes.COMMENTS} /> */}
            </Tabs>
        </div>
    );
};

GenericTab.propTypes = {
    tabItems: PropTypes.array.isRequired,
    onTabSelect: PropTypes.func,
    selectedTabValue: PropTypes.string.isRequired,
};

export default GenericTab;
