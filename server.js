import config from './config';
import express from 'express';
import apiRouter from './api';
import axios from "axios";
import sassMiddleware from 'node-sass-middleware';
import path from 'path';


const server = express();


console.log(path.join(__dirname,'sass'));

server.use(sassMiddleware({
	src: path.join(__dirname,'sass/stye.scss'),
	dist:path.join(__dirname,'public/style.css')

}));



server.use(express.static('public'));
server.use("/api",apiRouter);



server.set("view engine",'ejs');
server.get("/",(req,res) => {

	res.render('index',{

		name:"Anuj Sachan"

	});
});	

server.listen(config.port,()=>{
	console.log("express server is listing on configured port "+config.port);
});



