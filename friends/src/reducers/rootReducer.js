import { combineReducers } from 'redux';

import friendsReducer from './friendsReducer';

const rootReducer = combineReducers({
    friends: friendsReducer //[]
});

export default rootReducer;

//application state !== component state