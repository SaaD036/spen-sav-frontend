import axios from 'axios';

import {
    GET_ALL_USER,
} from './../types/user';

export const getAllUsers = () => async dispatch => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:8000/api/user',
        });

        dispatch({
            type: GET_ALL_USER,
            payload: response.data,
        });
    } catch (error) {}
};
