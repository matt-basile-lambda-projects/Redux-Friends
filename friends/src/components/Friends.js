import React, { Component } from 'react'

export class Friends extends Component {

  deleteAFriend(e, friend){
    e.preventDefault();
    this.props.deleteFriend(friend);
    this.props.getFriends();
  }
  editAFriend(e,friend){
    e.preventDefault();
    this.props.editFriend(friend);
    this.props.getFriends();
  } 
  
  
  render() {
    return (
      <>
      <div className="py-2 w-full px-4 my-2 bg-indigo-darker items-center text-indigo-lightest leading-none rounded-full flex lg:inline-flex" role="alert">
        
        <span className="font-semibold mr-2 text-left flex-auto">{this.props.friend.name} - <a className="font-semibold text-grey-lightest hover:text-indigo-lighter"href="#">{this.props.friend.email}</a> </span>

        <span onClick={(e)=>{this.editAFriend(e,  this.props.friend.id)}} className="flex rounded-full bg-indigo uppercase px-2 py-1 text-xs font-bold mr-3 cursor-not-allowed ">Edit Friend</span>
        <span onClick={(e)=>{this.deleteAFriend(e,  this.props.friend.id)}} className="flex rounded-full bg-indigo hover:bg-red hover:text-white uppercase px-2 py-1 text-xs font-bold mr-3 hover:cursor-pointer">Delete Friend</span>     
      </div>
      </>
    )
  }
}

export default Friends
