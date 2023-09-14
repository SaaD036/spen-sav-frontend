import React, { useEffect } from 'react';

import GenericTab from '../../components/tabs';

import { getLoggedInUser } from '../../utilities/users';
import { useQuery } from '../../utilities/url';

import { tabItems } from './constants';

const TITLE = 'Entry | Spen-Sav';

const EntryPage = () => {
    const query = useQuery();
    const tabName = query.get('tab');

    useEffect(() => {
        document.title = TITLE;
    }, []);

    return (
        <div>
            <GenericTab
                tabItems={tabItems}
            />
        </div>
    );
};

EntryPage.propTypes = {
    loggedInUser: getLoggedInUser(),
};

export default EntryPage;
