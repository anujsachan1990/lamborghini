import React from 'react';
import FriendsDetails from './friendsDetail';

const ListComponent = ({friendsList,onFriendClick}) => {

	return (
		<div>
		{friendsList.map(friend => 
          <FriendsDetails {...friend}  key={friend.id} onClick={onFriendClick}/>  
        )}
		</div>

		)

}




export default ListComponent;