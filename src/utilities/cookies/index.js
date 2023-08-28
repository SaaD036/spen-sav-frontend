import Cookie from 'js-cookie';

export const cookieName = {
    USER: 'user',
};

export const setCookie = (name, value, expire = null) => {
    Cookie.set(name, value, expire ? { expires: expire } : undefined);
};

export const getCookie = (name) => {
    return Cookie.get(name);
};
