import {POST_NEW_FRIEND, POST_FRIEND_SUCCESS, POST_FRIEND_FAIL } from '../actions'

const initialState ={
    updatingFriend: false,
    friendUpdated: false,
  
    friends: [],
    error: null
  }  


export const postFriendsReducer = (state=initialState, action)=>{
    switch(action.type){
        case POST_NEW_FRIEND:
        return{
            ...state,
            updatingFriend: true,
            error: '',
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
        default:
        return state
    } 

}