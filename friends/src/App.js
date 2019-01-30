import React, { Component } from 'react';
import './App.css';
import Friends from "./components/Friends";
import AddFriendForm from "./components/AddFriendForm"
import {connect} from "react-redux";
import{getFriends, postAFriend} from "./actions";


class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.getFriends();
  }
  render() {
    console.log(this.props.friends)
    return (
      <div className="App">
        {this.props.friends.map(friend => <Friends key={friend.name} friend={friend}/>
        )}
        <AddFriendForm postAFriend={this.props.postAFriend}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  updatingFriend: state.postFriendsReducer.updatingFriend,
  friendUpdated: state.postFriendsReducer.friendUpdated,
  fetchingFriends: state.friendsReducer.fetchingFriends,
  friendsFetched: state.friendsReducer.friendsFetched,
  error: state.friendsReducer.error,
});

export default connect(
   mapStateToProps,
  {
    getFriends,
    postAFriend
  }
)(App);