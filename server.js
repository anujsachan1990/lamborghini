import config from './config';
import express from 'express';
import apiRouter from './api';
const server = express();

server.use(express.static('public'));
server.use("/api",apiRouter);


server.listen(config.port,()=>{
	console.log("express server is listing on configured port "+config.port);
});



