import { GET_ALL_ENTRY } from '../types/entry';

const initialState = {
    entries: [],
    entry: null,
    totalEntry: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_ALL_ENTRY:
        return {
            ...state,
            entries: action.payload.entries,
            totalEntry: action.payload.count,
        };
    default:
        return state;
    }
};

export default reducer;
