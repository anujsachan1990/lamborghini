import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get("/friends/:id",(req,res)=>{
	let friendList = [];
		if(req.params.id!==null){
				req.params.id.split(",").map(function(i,v){
				friendList.push(data.friends[i-1]);
			});
		}else {
			friendList.push();
		}

	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({friends:friendList}, null, 3));
});

router.get("/friends",(req,res)=>{
	
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({friends:data.friends}, null, 3));
});

export default router;


