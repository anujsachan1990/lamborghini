import React from 'react';

class FriendsDetails extends React.Component {
  

  constructor(props) {
    super(props);
  }

  handleClick = () =>{

  	console.log(this.props.name);


  }
  render() {
    return (

	<div className="FriendsDetails" onClick={this.handleClick}>
		<div>{this.props.name}</div>
		<div>{this.props.designation}</div>
	</div>

		)
  }
}



export default FriendsDetails;