import config from './config';
import express from 'express';
import apiRouter from './api';
import axios from "axios";

const server = express();

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



