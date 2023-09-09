import axios from 'axios';

import { buildURL } from '../../utilities/url';
import userAPI from '../../apiServices/user.json';

import {
    GET_ALL_USER,
    GET_SINGLE_USER,
    CLEAR_SINGLE_USER,
    GET_USER_COMMENT,
} from './../types/user';

export const getAllUsers = () => async dispatch => {
    try {
        const { path, method } = userAPI.GET_ALL_USER;
        const URL = buildURL(path);

        const response = await axios({
            method,
            url: URL,
        });

        dispatch({
            type: GET_ALL_USER,
            payload: response.data,
        });
    } catch (error) {}
};

export const getSingleUser = (userId) => async dispatch => {
    try {
        const { path, method } = userAPI.GET_SINGLE_USER;
        const URL = buildURL(path, { userId });

        const response = await axios({
            method,
            url: URL,
        });

        dispatch({
            type: GET_SINGLE_USER,
            payload: response.data,
        });
    } catch (error) {}
};

export const clearSingleUser = () => dispatch => {
    dispatch({
        type: CLEAR_SINGLE_USER,
        payload: null,
    });
};

export const getUserComments = (userId, params) => async dispatch => {
    try {
        const { path, method } = userAPI.GET_USER_COMMENT;
        const URL = buildURL(path, { userId });

        const response = await axios({
            method,
            url: URL,
        });

        dispatch({
            type: GET_USER_COMMENT,
            payload: response.data,
        });
    } catch (error) {}
};
