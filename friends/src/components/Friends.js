import React, { Component } from 'react'

export class Friends extends Component {

  deleteAFriend(e, friend){
    e.preventDefault();
    this.props.deleteFriend(friend);
    this.props.getFriends();
  }
  
  render() {
    return (
      <>
      <div className="friend">
        <h1>{this.props.friend.name}</h1> 
        <button onClick={(e)=>{this.deleteAFriend(e,  this.props.friend.id)}}> Goodbye Friend</button>
      </div>
      </>
    )
  }
}

export default Friends
