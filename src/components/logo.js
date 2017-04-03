import React from 'react';


const Logo = ({logoUrl}) =>{
	return (

			<img className="logo" src={logoUrl}/>

		)
}


Logo.propTypes = {
  message: React.PropTypes.string
}


export default Logo;