import React from 'react';

class FriendTile extends React.Component {
  

  constructor(props) {
    super(props);
  }

  handleClick = () =>{

  	this.props.onClick(this.props.id);


  }
  render() {

    return (
	<div className="FriendTile" onClick={this.handleClick}>
		<div>{this.props.name}</div>
		<div>{this.props.designation}</div>
	</div>

		)
  }
}



export default FriendTile;