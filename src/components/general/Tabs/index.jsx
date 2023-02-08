import React, { useEffect, useState } from "react";

import { Tabs, Tab, Box } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';

import styles from './styles.module.css';

const TabComponent = props => {
    const {
        tabs,
    } = props;
    const [value, setValue] = useState('');

    const onTabChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setValue(tabs[0].value || '');
    }, [tabs]);

    return (
            <Box className={styles.tabs}>
                <TabContext value={value} className={styles.tabs}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={onTabChange}
                        className={styles.tab}
                    >
                        {(tabs || []).map((tab, index) => <Tab
                            label={tab.label}
                            sx={{
                                backgroundColor: index%2 === 0 ? '#F7F7F7' : '#FFFFFF',
                                margin: '2px 4px',
                            }}
                        />)}
                    </Tabs>
                    {(tabs || []).map(tab => {
                        return (
                            <TabPanel index={tab.value}>
                                Item
                            </TabPanel>
                        );
                    })}
                </TabContext>
            </Box>
      );
};

export default TabComponent;
