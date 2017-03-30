import React from 'react';
import Header from './Header';
import FriendsDetails from './friendsDetail';
import axios from "axios";

class App extends React.Component {

    state = {
        description : "it's state full component !",
        friends:[]
      };


  componentDidMount(){
    axios.get("/api/friends")
    .then(res=> {
      this.setState({
          friends:res.data.friends
      })

    })
    .catch(console.error);

  	console.log("did mount");
  }

 componentWillUnmount(){

 	console.log("will un Mount");
  }

  render() {
  	 console.log(3);
    return (
			<div  className="text-center">
				<Header message="Friends and Roles"/>
				<div>
					<p>  {this.state.description} </p>
				</div>

				{this.state.friends.map(friend => 
				
					<FriendsDetails {...friend}  key={friend.id}/>	
					
				)}
			</div>
		)
  }
}



App.propTypes = {
  message: React.PropTypes.string
}


export default App;