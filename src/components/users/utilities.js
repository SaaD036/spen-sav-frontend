import { min } from 'lodash';

export const getAvatarFromUserName = (firstName, lastName = null) => {
    let avatar = '';

    if (lastName) {
        avatar = `${firstName[0]}${lastName[0]}`;
    } else {
        avatar = firstName.substring(0, min(2, firstName.length));
    }

    return avatar.toUpperCase();
};
