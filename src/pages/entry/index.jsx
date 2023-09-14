import React, { useEffect, useState } from 'react';

import GenericTab from '../../components/general/Tabs';

import { getLoggedInUser } from '../../utilities/users';
import { useQuery } from '../../utilities/url';

import EntryList from '../../components/entry/entryList';

import { tabItems, tabValueItem } from './constants';
import styles from './styles.module.css';

const TITLE = 'Entry | Spen-Sav';

const EntryPage = () => {
    const query = useQuery();
    const tabName = query.get('tab') || tabValueItem.ALL;

    const [activeTab, setActiveTab] = useState(tabName);

    useEffect(() => {
        document.title = TITLE;
    }, []);

    return (
        <div className={styles.entryPageContainer}>
            <GenericTab
                tabItems={tabItems}
                defaultTab={activeTab}
                selectedTab={activeTab}
                onTabSelect={tab => setActiveTab(tab)}
            />
            <div className={styles.mainContent}>
                <EntryList />
            </div>
        </div>
    );
};

EntryPage.propTypes = {
    loggedInUser: getLoggedInUser(),
};

export default EntryPage;
