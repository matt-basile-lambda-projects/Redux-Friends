import {FETCH_FRIENDS_FAIL, FETCH_FRIENDS_START,FETCH_FRIENDS_SUCCESS} from "../actions"

const initialState ={
    fetchingFriends: false,
    friendsFetched: false,
    friends: [],
    error: null
  }
  
  


export const friendsReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_FRIENDS_START:
        return{
            ...state,
            error: '',
            fetchingFriends: true
        };
        case FETCH_FRIENDS_SUCCESS:
        return{
            ...state,
            error: '',
            fetchingFriends: false,
            friends: action.payload,
            friendsFetched: true
        };
        case FETCH_FRIENDS_FAIL:
        return{
            ...state,
            error: action.payload,
            friendsFetched: false,
            fetchingFriends: false
        };
        default:
        return state
    }
}