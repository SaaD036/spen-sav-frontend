import {
    GET_ALL_USER,
} from '../types/user';

const initialState = {
    users: [{name: 'SaaD'}, {name: 'SaaD II'}],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USER:
            return {
                ...state,
                users: [],
            };
        default:
            return state;
    }
}

export default reducer;
