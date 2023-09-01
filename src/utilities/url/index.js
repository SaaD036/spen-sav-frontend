export const BASE_URL = 'http://localhost:8000/api/';

export const buildURL = (path, variables = {}, params = {}) => {
    let url = `${BASE_URL}${path}`;

    Object.keys(variables).forEach(key => {
        url = url.replace(`{${key}}`, variables[key]);
    });

    return url;
};
