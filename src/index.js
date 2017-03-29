import React from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {
	return (
			<div  className="text-center">
				<h2>
					{props.appName}
				</h2>
				<div>
					<p> this is simple description </p>
				</div>
			</div>
		)
};



App.defaultProps = {

  appName: `It's purely react component`
}


App.propTypes = {
  appName: React.PropTypes.string
}



ReactDOM.render(
	<App/>,
	document.getElementById("root")
)