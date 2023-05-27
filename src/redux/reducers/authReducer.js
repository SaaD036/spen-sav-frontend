import {
    LOG_IN,
} from '../types/auth';

const initialState = {
    loggedInUser: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case LOG_IN:
        return {
            ...state,
            loggedInUser: action.payload,
        };
    default:
        return state;
    }
};

export default reducer;
