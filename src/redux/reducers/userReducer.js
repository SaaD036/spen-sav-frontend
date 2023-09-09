import {
    GET_ALL_USER,
    GET_SINGLE_USER,
    CLEAR_SINGLE_USER,
    GET_USER_COMMENT,
} from '../types/user';

const initialState = {
    users: [],
    user: null,
    totalUser: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_ALL_USER:
        return {
            ...state,
            users: action.payload.users,
            totalUser: action.payload.count,
        };
    case GET_SINGLE_USER:
        return {
            ...state,
            user: action.payload.user,
        };
    case CLEAR_SINGLE_USER:
        return {
            ...state,
            user: null,
        };
    case GET_USER_COMMENT:
        return {
            ...state,
            userComment: action.payload.comments,
        };
    default:
        return state;
    }
};

export default reducer;
