import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import config from './config';
import axios from 'axios';


const serverRender = (id="") =>
	axios.get("http://localhost:8080/api/friends/"+id).
	then(resp=>{
		return ReactDOMServer.renderToString(
				<App initialData={resp.data.friends}/>
			)
	});



export default serverRender;