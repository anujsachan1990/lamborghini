import React from 'react';
import Header from './Header';
import ListComponent from './ListComponent';
import FriendDetails from './friendDetails';
import AddFriend from './AddFriend';

const pushState = (obj,url) =>
  window.history.pushState(obj,'',url);


class App extends React.Component {

  state = {
        description : "it's state full component !",
        friends: this.props.initialData,
        pageHeader:"You Friends and Roles"
      };
    
  componentDidMount(){

  	console.log("did mount");
  }

 componentWillUnmount(){

 	console.log("will un Mount");
  }


  fetchFriendsDetails = (friendID) =>{
   
    pushState({friendID:friendID},
          `/${friendID}`
        );

    this.setState({

      currentFriendId : friendID
    })

  };

  currentFriend = () =>{

      if(this.state.currentFriendId!==undefined){

        return (
          <div>
            <ListComponent 
            friendsList= {[this.state.friends[this.state.currentFriendId-1]]}/>
            <FriendDetails id={this.state.friends[this.state.currentFriendId-1]}/ >
          </div>
          )
      }

     return(

        <ListComponent 
        onFriendClick={this.fetchFriendsDetails} 
        friendsList= {this.state.friends}/>
        )
  }

  addFriend = () => {

    return(

      <AddFriend/>

      )
    
  }

  render() {

    return (
			<div  className="text-center">
				<Header message={this.state.pageHeader}/>
        <p>{this.state.description}</p>
		    {this.currentFriend()}
         <button onClick={this.addFriend} className="btn btn-success">add more friend</button>
         
         <AddFriend/>
       
    	</div>
		)
  }
}


export default App;