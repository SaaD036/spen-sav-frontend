import React, { useState } from 'react';

import { Tab, Tabs } from '@mui/material';

import Users from '../../components/users';

import { getLoggedInUser } from '../../utilities/users';
import { tabTypes, tabLabels } from './constants';
import styles from './styles.module.css';

const UserPage = props => {
    const [value, setValue] = useState(tabTypes.ENTRY);

    const renderTabs = () => {
        return (
            <div className={`${styles.tabContainer} center`}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    className={styles.tabs}
                    sx={{
                        '& button.Mui-selected': { color: '#158901' },
                    }}
                    TabIndicatorProps={{
                        style: { background: '#158901' },
                    }}
                >
                    <Tab label={tabLabels.ENTRY} classes={{ label: { color: '#158901' } }}value={tabTypes.ENTRY} />
                    <Tab label={tabLabels.COMMENTS} value={tabTypes.COMMENTS} />
                </Tabs>
            </div>
        );
    };

    return (
        <div className='page'>
            { renderTabs() }
            <Users />
        </div>
    );
};

UserPage.propTypes = {
    loggedInUser: getLoggedInUser(),
};

export default UserPage;
