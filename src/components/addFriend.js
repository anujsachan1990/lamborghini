import React from 'react';

class AddFriend extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
      	<form className="addFriend" action="/addFriend">
      		<fieldset className="form-group">
      			<label>Name: </label>
      			<input type="text" name= "friendname" className="form-control"/>
      		</fieldset>
      		<fieldset className="form-group">
      			<label>Role: </label>
      			<input type="text" name= "role" className="form-control"/>
      		</fieldset>
 			<fieldset className="form-group">
      			<label>About: </label>
      			<textarea name= "about" className="form-control" rows="8"/>
      		</fieldset>
      		<button className="btn btn-success">Save Details</button>
      	</form>
      </div>
    );
  }
}

export default AddFriend;