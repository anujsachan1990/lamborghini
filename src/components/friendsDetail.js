import React from 'react';

class FriendsDetails extends React.Component {
  

  constructor(props) {
    super(props);
  }

  handleClick = () =>{

  	this.props.onClick(this.props.id);


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