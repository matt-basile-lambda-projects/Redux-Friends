import React, { Component } from 'react';
import './App.css';
import Friends from "./components/Friends"
import {connect} from "react-redux";
import{getFriends} from "./actions";

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
      </div>
    );
  }
}


const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
});

export default connect(
   mapStateToProps,
  {
    getFriends
  }
)(App);