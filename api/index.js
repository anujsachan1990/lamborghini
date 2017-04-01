import express from 'express';
import { MongoClient } from 'mongodb';
import {assert} from 'assert';
import config from '../config';
//import data from '../src/testData';

let mdb;

MongoClient.connect(config.mongodbUri,(err,db)=>{
//assert.equal(null,error);
mdb = db;
});



const router = express.Router();

// router.get("/friends/:id",(req,res)=>{
// 	let friendList = [];
// 		if(req.params.id!==null){
// 				req.params.id.split(",").map(function(i,v){
// 				friendList.push(data.friends[i-1]);
// 			});
// 		}else {
// 			friendList.push();
// 		}

// 	res.setHeader('Content-Type', 'application/json');
// 	res.send(JSON.stringify({friends:friendList}, null, 3));
// });

router.get("/friends",(req,res)=>{
	let friends = {};
	mdb.collection("friends").find({})
	.project({
		id:1,
		name:1,
		designation:1
	})
	.each((err,friend) =>{
		//assert.equal(null,error);
		if(!friend){
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({friends:[friends]}, null, 3));
			return;
		}
		friends[friend.id] = friend;

	});	
});

export default router;


