import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import axios from "axios";


axios.get("/api/friends")
    .then(res=> {
    
    ReactDOM.render(
	<App initialData={res.data.friends}/>,
	document.getElementById("root")
)


    })
    .catch(console.error);





