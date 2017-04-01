import React from 'react';
import Header from './Header';
import ListComponent from './ListComponent';

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
      pageHeader : this.state.friends[friendID-1].name,
      currentFriendId : friendID-1
    })

  };

  currentFriend = () =>{
      if(this.state.currentFriendId){

        return (
            <ListComponent 
        onFriendClick={this.fetchFriendsDetails} 
        friendsList= {[this.state.friends[this.state.currentFriendId]]}/>
        
          )
          
      }

     return(

        <ListComponent 
        onFriendClick={this.fetchFriendsDetails} 
        friendsList= {this.state.friends}/>
        )
  }

  render() {

    return (
			<div  className="text-center">
				<Header message={this.state.pageHeader}/>
        <p>{this.state.description}</p>
		    {this.currentFriend()}
    	</div>
		)
  }
}


export default App;