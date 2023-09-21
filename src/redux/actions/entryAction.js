import axios from 'axios';

import { buildURL } from '../../utilities/url';
import entryAPI from '../../apiServices/entry.json';

import {
    GET_ALL_ENTRY,
} from './../types/entry';

export const getAllEntries = (params = {}) => async dispatch => {
    try {
        const { path, method } = entryAPI.GET_ALL_ENTRY;
        const URL = buildURL(path, {}, params);

        const response = await axios({
            method,
            url: URL,
        });

        dispatch({
            type: GET_ALL_ENTRY,
            payload: response.data,
        });
    } catch (error) {}
};

export const createEntry = (data) => async dispatch => {
    try {
        const { path, method } = entryAPI.GET_ALL_ENTRY;
        const URL = buildURL(path);

        await axios({
            method,
            url: URL,
            data,
        });
    } catch (error) {}
};
