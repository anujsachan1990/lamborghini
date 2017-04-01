import config from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';



const server = express();


server.use(sassMiddleware({
	src: path.join(__dirname,'sass/stye.scss'),
	dist:path.join(__dirname,'public/style.css')

}));



server.use(express.static('public'));
server.use("/api",apiRouter);



server.set("view engine",'ejs');


server.get("/:id",(req,res) => {
	console.log(req.params.id);
	serverRender(req.params.id).
	then(friends =>{
		res.render('index',{
			friends
	});

	})
	.catch(console.error);
});	
server.get("/",(req,res) => {
	
	serverRender().
	then(friends =>{
		res.render('index',{
			friends
	});

	})
	.catch(console.error);
});



server.listen(config.port,()=>{
	console.log("express server is listing on configured port "+config.port);
});



