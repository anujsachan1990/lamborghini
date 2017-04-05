import React from 'react';
import FriendTile from './FriendTile';

const ListComponent = ({friendsList,onFriendClick,onFriendEdit}) => {

	return (
		
		<div>
		{friendsList.map(friend => 
          <FriendTile {...friend}
          	key={friend._id} 
          	onClick={onFriendClick}
          	oneEditFriend={onFriendEdit}
          	/>  
        )}
		</div>

		)

}




export default ListComponent;