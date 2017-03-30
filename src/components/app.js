import React from 'react';
import Header from './Header';
import FriendsDetails from './friendsDetail';


class App extends React.Component {

  constructor(props) {
    super(props);
  
   this.state = {
        description : "it's state full component !",
        friends: this.props.initialData
      };

  }
    


  componentDidMount(){



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
          
        )};

			</div>
		)
  }
}




export default App;