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
            this.props.getFriends()
        }
    }
    render(){
    return(
        <>
        <form onSubmit={this.submitNewFriend} className="w-full max-w-md mx-auto rounded overflow-hidden shadow-lg" >
        <div className="flex flex-wrap -mx-3 pt-8 px-12 ">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                Full Name
            </label>
            <input onChange={this.handleChange} class="appearance-none block w-full bg-grey-lighter text-grey-darker  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="name" placeholder="Tony Soprano"/>
            
            </div>
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                Age
            </label>
            <input onChange={this.handleChange} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-last-name" type="number" name="age" placeholder="21"/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 px-12  mb-12 mt-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                Email
            </label>
            <input onChange={this.handleChange} class=" block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"  type="type" name="email" placeholder="tonymeatballz@hotmail.com"/>
            <p class="text-grey-dark text-xs italic">Please enter a vaild Email Address</p>
            </div>
        </div>
        <div className="px-12 mb-8 mx-auto">
         <button className=" w-full text-center  bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">Add Friend</button>
        </div>
        
        </form>
    </>
    )
    
    }

}

export default AddFriendForm