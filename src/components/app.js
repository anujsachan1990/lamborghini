import React from 'react';
import Header from './Header';
import ListComponent from './ListComponent';
import FriendDetails from './friendDetails';
import AddFriend from './AddFriend';
import Logo from './Logo';

const pushState = (obj,url) => window.history.pushState(obj,'',url);

class App extends React.Component {

  state = {
        description : "it's state full component !",
        friends: this.props.initialData,
        pageHeader:"You Friends and Roles",
        addNewFriend : 0,
        currentPage:"home",
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
        let currentFriendId = this.state.currentFriendId;

          let currentFriend = this.state.friends.filter(function (el) {
              return el._id === currentFriendId
          });

        return (
          <div>
            <ListComponent 
            friendsList= {currentFriend}/>
            <FriendDetails id={currentFriend}/ >
          </div>
          )
      }

     return(

        <ListComponent 
        onFriendClick={this.fetchFriendsDetails} 
        friendsList= {this.state.friends}
        onFriendEdit={this.editFriend}/>
        )
  }


editFriend =() =>{

this.setState({
    description : "it's state full component !",
    friends: [],
    pageHeader:"Edit  Friend",
    addNewFriend : 1,
    currentPage: "Edit Page"

    });

  }


  addFriend = () => {

    this.setState({
       description : "it's state full component !",
        friends: [],
        pageHeader:"add new Friend",
        addNewFriend : 1,
        currentPage: "listing"
    });
  }

  addnewFriend = () =>{

    if(this.state.addNewFriend){
      return(
        <AddFriend currenpage={this.state.currentPage}/>
      )
    }

    if(this.state.currentPage==="home"){
      return(
        <button onClick={this.addFriend} className="btn btn-success"> Add more friend </button>
      )
    }
    
  }


  render() {
    return (
			<div  className="text-center">
        <Logo logoUrl="http://icons.iconarchive.com/icons/searchallwreckers/car/256/Lamborghini-icon.png"/>
				<Header message={this.state.pageHeader}/>
        <p>{this.state.description}</p>
		    {this.currentFriend()}
        {this.addnewFriend()}
    	</div>
		)
  }
}


export default App;