import React, { useEffect, useState } from 'react';

import CustomTab from '../../components/general/CustomTabs';

import { getLoggedInUser } from '../../utilities/users';
import { useQuery } from '../../utilities/url';

import Entry from '../../components/entry';

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
            <CustomTab
                tabItems={tabItems}
                defaultTab={activeTab}
                selectedTab={activeTab}
                onTabSelect={tab => setActiveTab(tab)}
            />
            <div className={styles.mainContent}>
                <Entry selectedTab={activeTab}/>
            </div>
        </div>
    );
};

EntryPage.propTypes = {
    loggedInUser: getLoggedInUser(),
};

export default EntryPage;
