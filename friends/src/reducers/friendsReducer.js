import { GET_FRIENDS } from '../actions';

function friendsReducer(state = [], action) {
    
    switch(action.type) {
        case GET_FRIENDS:
            return action.payload.data;
        default:
            return state;
    }
}

export default friendsReducer;