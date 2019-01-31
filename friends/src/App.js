import React, { Component } from 'react';
import './App.css';
import Friends from "./components/Friends";
import AddFriendForm from "./components/AddFriendForm"
import {connect} from "react-redux";
import{getFriends, postAFriend, deleteFriend} from "./actions";


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
      {this.props.isDeletingFriend ? (<h1>So Long Old Friend...</h1>) : this.props.updatingFriend ? (<h1>Welcome to my new friends list Matey!</h1>) :    this.props.fetchingFriends ? (<h1>Loading Friends...</h1>) :   
      (
        this.props.friends.map(friend => <Friends key={friend.name} getFriends={this.props.getFriends} friend={friend} deleteFriend={this.props.deleteFriend}/>
        )
      )}
        <AddFriendForm friends={this.props.friends} getFriends={this.props.getFriends} postAFriend={this.props.postAFriend}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  friends: state.friends,
  updatingFriend: state.updatingFriend,
  friendUpdated: state.friendUpdated,
  fetchingFriends: state.fetchingFriends,
  friendsFetched: state.friendsFetched,
  error: state.error,
  isDeletingFriend : state.isDeletingFriend
});

export default connect(
   mapStateToProps,
  {
    deleteFriend,
    getFriends,
    postAFriend
  }
)(App);