import React from 'react';
import axios from 'axios';

class AddFriend extends React.Component {

  constructor(props) {
    super(props); 
    this.sumitHandler = this.sumitHandler.bind(this);

  }
  componentDidMount() {
if(this.props.currenpage==="Edit Page"){
  this.setState({
    name: "anuj",
    designation:"sachan",
    about:"1"
    });
  }
}
  
state = {
  name: "",
  designation:"",
  about:""
}

  sumitHandler = (e)=> {
  //e.preventDefault();

   axios.post("api/friends/add",{
  
    params: {
      "name" : this.refs.friendname.value,
      "designation":this.refs.role.value,
      "about":this.refs.about.value
    }

   }).
   then(resp=>{
      console.log("success");
  });


  }

  render() {

    return (
      <div>
      	<form className="addFriend" onSubmit={this.sumitHandler}>
      		<fieldset className="form-group">
      			<label>Name: </label>
      			<input type="text" name= "friendname" className="form-control" value={this.state.name}/>
      		</fieldset>
      		<fieldset className="form-group">
      			<label>Role: </label>
      			<input type="text" name= "role" className="form-control" ref={"role"} value={this.state.designation}/>
      		</fieldset>
 			<fieldset className="form-group">
      			<label>About: </label>
      			<textarea name= "about" className="form-control" rows="8" ref={"about"} value={this.state.about}/>
      		</fieldset>
      		<button className="btn btn-success">Save Details</button>
      	</form>
      </div>
    );
  }
}

export default AddFriend;