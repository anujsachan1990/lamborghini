import React from 'react';

const FriendsDetails = (friend) =>{

return (

	<div className="friendsDetail">
		<div>{friend.name}</div>
		<div>{friend.designation}</div>
	</div>

		)
}


export default FriendsDetails;