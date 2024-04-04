import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

import { Tab, Tabs } from '@mui/material';

import styles from './styles.module.css';

const CustomTab = props => {
    const { selectedTab, tabItems, onTabSelect } = props;

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const onClickTabItem = tab => {
        onTabSelect(tab);

        if (tab !== selectedTab) {
            navigate(`${pathname}?tab=${tab}`);
        }
    };

    return (
        <div className={`${styles.tabContainer} center`}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={selectedTab}
                onChange={(event, newValue) => onClickTabItem(newValue)}
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
                        <Tab
                            label={item.label}
                            value={item.value}
                            onClick={() => onTabSelect(item.value)}
                        />
                    );
                })}
            </Tabs>
        </div>
    );
};

CustomTab.propTypes = {
    tabItems: PropTypes.array.isRequired,
    onTabSelect: PropTypes.func,
    selectedTab: PropTypes.string.isRequired,
};

export default CustomTab;
