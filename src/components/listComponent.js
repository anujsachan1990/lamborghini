import React from 'react';
import FriendsDetails from './friendsDetail';

const ListComponent = (props) => {
	console.log(props.friendsList);

	return (
		<div>
		{props.friendsList.map(friend => 
          <FriendsDetails {...friend}  key={friend.id}/>  
        )}
		</div>

		)

}

export default ListComponent;