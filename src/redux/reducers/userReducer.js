import {
    GET_ALL_USER,
} from '../types/user';

const initialState = {
    users: [],
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
    default:
        return state;
    }
};

export default reducer;
