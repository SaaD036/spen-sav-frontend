import { setCookie, cookieName } from '../../utilities/cookies';

import {
    LOG_IN,
} from './../types/auth';

export const login = (email, name) => async dispatch => {
    try {
        const userInfo = {
            email,
            name,
        };

        setCookie(cookieName.USER, JSON.stringify(userInfo));

        dispatch({
            type: LOG_IN,
            payload: userInfo,
        });
    } catch (error) {}
};
