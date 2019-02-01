import axios from 'axios';


export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL"; 

export const POST_NEW_FRIEND = "POST_NEW_FRIEND"
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS"
export const POST_FRIEND_FAIL = "POST_FRIEND_FAIL"

export const DELETE_FRIEND = "DELETE_FRIEND"
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS"
export const DELETE_FRIEND_FAIL = "DELETE_FRIEND_FAIL"

export const getFriends = () => dispatch =>{
    dispatch({type: FETCH_FRIENDS_START});
    axios 
    .get(
       'http://localhost:5000/api/friends'
    )
    .then(res => dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_FRIENDS_FAIL, payload: err}));
}
// dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res})


export const postAFriend = friend => dispatch =>{
    dispatch({type: POST_NEW_FRIEND});
    axios.post('http://localhost:5000/api/friends', friend)
    .then(res => dispatch({type: POST_FRIEND_SUCCESS, payload: res.data}))
    .catch(err =>dispatch({type: POST_FRIEND_FAIL, payload: err}))
}

// .then(res => dispatch({type: POST_FRIEND_SUCCESS, payload: res}))
// .catch(err => dispatch({type: POST_FRIEND_FAIL, payload: err}));

export const deleteFriend = id => dispatch =>{
    console.log(id)
    dispatch({type: DELETE_FRIEND});
    axios.delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => dispatch({type: DELETE_FRIEND_SUCCESS, payload: res.data}))
    .catch(err =>dispatch({type: DELETE_FRIEND_FAIL, payload: err}))
}