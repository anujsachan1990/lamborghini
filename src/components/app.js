import React from 'react';
import Header from './Header'


const App = (props) => {
	return (
			<div  className="text-center">
				<Header message="Naming Contest heading"/>
				<div>
					<p> this is simple description </p>
				</div>
			</div>
		)
};


App.propTypes = {
  message: React.PropTypes.string
}


export default App;