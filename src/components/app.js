import React from 'react';
import Header from './Header';
import ListComponent from './ListComponent';



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

    return (
			<div  className="text-center">
				<Header message="Friends and Roles"/>
        <p>{this.state.description}</p>
        <ListComponent friendsList= {this.state.friends} />
			</div>
		)
  }
}




export default App;