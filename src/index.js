import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import data from './testData.json';



ReactDOM.render(
	<App friends={data.friends}/>,
	document.getElementById("root")
)

