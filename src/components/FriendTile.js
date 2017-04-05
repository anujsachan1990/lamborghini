import React from 'react';
import axios from 'axios';

class FriendTile extends React.Component {
  

  constructor(props) {
    super(props);
  }

  handleClick = () =>{

  	this.props.onClick(this.props._id);


  }

  removeFriend=(e)=>{
     axios.post("api/friends/removeFriend",{
      _id: this.props._id
     }).
   then(resp=>{
      console.log("success");
      window.location.reload();
  });
      e.stopPropagation();

  }

  render() {

    return (
	<div className="FriendTile" onClick={this.handleClick}>
		<div>{this.props.name}</div>
		<div>{this.props.designation}</div>
    <div className="remove" onClick={this.removeFriend}>X</div>
	</div>

		)
  }
}



export default FriendTile;