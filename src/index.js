import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import axios from "axios";

const url = window.location.pathname;


axios.get("/api/friends"+url)
    .then(res=> {
    
    ReactDOM.render(
	<App initialData={res.data.friends}/>,
	document.getElementById("root")
)

}).catch(console.error);





