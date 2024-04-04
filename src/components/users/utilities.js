import { min } from 'lodash';

import { navComponents } from './constants';

export const getAvatarFromUserName = (firstName, lastName = null) => {
    let avatar = '';

    if (lastName) {
        avatar = `${firstName[0]}${lastName[0]}`;
    } else {
        avatar = firstName.substring(0, min(2, firstName.length));
    }

    return avatar.toUpperCase();
};

export const getNavComponents = (userId) => {
    const navComponentsArray = [];

    Object.keys(navComponents).forEach(nav => {
        const RenderComponent = navComponents[nav];

        navComponentsArray.push({
            title: nav,
            renderComponent: () => <RenderComponent userId={userId} />,
        });
    });

    return navComponentsArray;
};
