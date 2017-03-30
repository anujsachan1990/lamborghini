import React from 'react';
import Header from './Header'
import FriendsDetails from './friendsDetail'
import data from '../testData.json';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    	description : "it's state full component !",
    	friends:data.friends

    }
  }

  componentDidMount(){

  	console.log("did mount");
  }

 componentWillUnmount(){

 	console.log("will un Mount");
  }

  render() {
  	
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