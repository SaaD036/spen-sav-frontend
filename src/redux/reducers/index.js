import { combineReducers } from 'redux';

import userReducer from './userReducer';
import authReducer from './authReducer';
import entryReducer from './entryReducer';

export default combineReducers({
    auth: authReducer,
    users: userReducer,
    entries: entryReducer,
});
