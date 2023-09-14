import React from 'react';
import { useLocation } from 'react-router-dom';

export const BASE_URL = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_PROD_URL;

export const buildURL = (path, variables = {}, params = {}) => {
    let url = `${BASE_URL}${path}`;

    console.log('SaaD : ', process.env);

    Object.keys(variables).forEach(key => {
        url = url.replace(`{${key}}`, variables[key]);
    });

    return url;
};

export const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
};
