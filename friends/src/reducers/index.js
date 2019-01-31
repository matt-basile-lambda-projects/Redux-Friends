import {combineReducers} from "redux";
import {friendsReducer} from "./friendsReducer"
import {postFriendsReducer} from "./postFriendsReducer"


export default combineReducers({
    friendsReducer,
    postFriendsReducer
})