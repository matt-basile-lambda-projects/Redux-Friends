import {POST_NEW_FRIEND,
        POST_FRIEND_SUCCESS,
        POST_FRIEND_FAIL,
        FETCH_FRIENDS_FAIL,
        FETCH_FRIENDS_START,
        FETCH_FRIENDS_SUCCESS,
        DELETE_FRIEND,
        DELETE_FRIEND_FAIL,
        DELETE_FRIEND_SUCCESS
 } from '../actions'


  
const initialState ={
    updatingFriend: false,
    friendUpdated: false,
    newFriend: {
        name: '',
        age: null,
        email: '',
    },
    friends: [],
    error: null,
    fetchingFriends: false,
    friendsFetched: false,
    isDeletingFriend: false
  }  


const friendsReducer = (state=initialState, action)=>{
    switch(action.type){
        case POST_NEW_FRIEND:
        return{
            ...state,
            updatingFriend: true,
            error: '',
            fetchingFriends: false,
        };
        case POST_FRIEND_SUCCESS:
        return{
            ...state,
            error: '',
            friends: action.payload,
            updatingFriend: false,
            friendUpdated: true
        };
        case POST_FRIEND_FAIL:
        return{
            ...state,
            error: action.payload,
            updatingFriend: false,
            friendUpdated: false
        };
        case FETCH_FRIENDS_START:
        return{
            ...state,
            error: '',
            fetchingFriends: true,
            
        };
        case FETCH_FRIENDS_SUCCESS:
        return{
            ...state,
            error: '',
            fetchingFriends: false,
            friends: action.payload,
            friendsFetched: true,
            isDeletingFriend: false,
        };
        case FETCH_FRIENDS_FAIL:
        return{
            ...state,
            error: action.payload,
            friendsFetched: false,
            fetchingFriends: false,
            isDeletingFriend: false,
        };
        case DELETE_FRIEND:
        return{
            ...state,
            error: '',
            isDeletingFriend: true
        };
        case DELETE_FRIEND_SUCCESS:
        return{
            ...state,
            error: '',
            friends: action.payload,
            isDeletingFriend: true
        };
        case DELETE_FRIEND_FAIL:
        return{
            ...state,
            error: action.payload,
            isDeletingFriend: false,
        };
        default:
        return state
    }
}

export default friendsReducer