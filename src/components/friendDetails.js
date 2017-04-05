import React,{Component,propTypes} from 'react';

export default class FriendDetails extends Component {
 
  render() {
    return (
      <p>
      	{this.props.id[0].about}
      </p>
    );
  }
}


