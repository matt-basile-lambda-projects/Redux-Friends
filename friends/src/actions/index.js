import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL"; 

export const POST_NEW_FRIEND = "ADD_NEW_FRIEND"
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS"
export const POST_FRIEND_FAIL = "POST_FRIEND_FAIL"

export const getFriends = () => {
    dispatch({type: FETCH_FRIENDS_START});
    axios.get('https://localhost:5000/')
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
// .then(res => dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res}))
// .catch(err => dispatch({type: FETCH_FRIENDS_FAIL, payload: err}));


export const postAFriend = friend =>{
    dispatch({type: POST_NEW_FRIEND});
    axios.post('http://localhost:5000/', friend)
    .then(res => console.log(res))
    .catch(err =>console.log(err))
}


// .then(res => dispatch({type: POST_FRIEND_SUCCESS, payload: res}))
// .catch(err => dispatch({type: POST_FRIEND_FAIL, payload: err}));