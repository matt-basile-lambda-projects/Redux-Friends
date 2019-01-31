import React from 'react';

class AddFriendForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            newFriend: {
                name: '',
                age: null,
                email: '',
            }
        }
    }
    handleChange = e =>{
        this.setState({newFriend: {
            ...this.state.newFriend,
            [e.target.name]: e.target.value
        }}
        )
    }
    submitNewFriend = e =>{
        console.log('Submitting')
        e.preventDefault();
        this.props.postAFriend(this.state.newFriend);
        
        this.setState({newFriend: {
                name: '',
                age: null,
                email: '',
        }})
        e.target.reset();
    }
    componentDidUpdate(prevProps){
        if(prevProps.friends.length !== this.props.friends.length){
            // this.props.getFriends()
        }
    }
    render(){
    return(
     <form onSubmit={this.submitNewFriend}>
         <input onChange={this.handleChange} placeholder="Name" type="text" name="name"/>
         <input onChange={this.handleChange} placeholder="Age" type="number" name="age"/>
         <input onChange={this.handleChange} placeholder="Email" type="text" name="email"/>
         <button>Add Friend</button>
     </form>
    )
    
    }

}

export default AddFriendForm