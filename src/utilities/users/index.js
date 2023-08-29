import { cookieName, getCookie } from '../cookies';

export const getLoggedInUser = () => {
    const loggedInUser = getCookie(cookieName.USER);

    return loggedInUser ? JSON.parse(loggedInUser) : null;
};
