import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND ="ADD_FRIEND";

function getFriends() {

    const friendsEndpoint = 'http://localhost:5000/friends';
    const friendsRequest = axios.get(friendsEndpoint);

    return {
        type: GET_FRIENDS,
        payload: friendsRequest,
    };
}

export function addFriend(friend) {
    const addFriendEndpoint = "http://localhost:5000/new-friend";
    const addFriendRequest = axios.post(addFriendEndpoint, friend); //second argument is how we pass data to the server

    return {
        type: ADD_FRIEND,
        payload: addFriendRequest,
    };
}
// Middleware is the axios
// payload -- promise

// all actions flow through the reducer
// Middleware sees the actions before they hit the reducers
//      - can even fire a new action
// action creators > Middleware -- Redux-Promise > reducers 