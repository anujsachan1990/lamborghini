import React from 'react';
import axios from 'axios';

class FriendTile extends React.Component {
  

  constructor(props) {
    super(props);
     this.editFriend = this.editFriend.bind(this);
  }

  handleClick = () =>{

  	this.props.onClick(this.props._id);


  }

  removeFriend = (e) =>{
     e.stopPropagation();
     axios.post("api/friends/removeFriend",{
      _id: this.props._id
     }).
   then(resp=>{
      console.log("success");
      window.location.reload();
  });
     

  }

editFriend = (e) => {
 e.stopPropagation();
 
 this.props.oneEditFriend();

}

  render() {

    return (
	<div className="FriendTile" onClick={this.handleClick}>
		<div>{this.props.name}</div>
		<div>{this.props.designation}</div>
    <div className="remove" onClick={this.removeFriend}>X</div>
    <span className="glyphicon glyphicon-edit edit-icon" aria-hidden="true" onClick={this.editFriend}></span>
	</div>

		)
  }
}



export default FriendTile;