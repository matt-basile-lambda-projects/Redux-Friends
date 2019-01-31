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
      {this.props.updatingFriend || this.props.fetchingFriends ? (<h1>Loading Friends...</h1>) : (
        this.props.friends.map(friend => <Friends key={friend.name} friend={friend}/>
        )
      )}
        <AddFriendForm getFriends={this.props.getFriends}postAFriend={this.props.postAFriend}/>
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
});

export default connect(
   mapStateToProps,
  {
    getFriends,
    postAFriend
  }
)(App);