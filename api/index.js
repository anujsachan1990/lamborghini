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
	let friends = [];
	mdb.collection("friends").find()
	.project({
		id:1,
		name:1,
		designation:1,
		about:1
	})
	.each((err,friend) =>{
		//assert.equal(null,error);
		console.log(friend);

		if(!friend){
			res.send({friends:friends});
			return;
		}

		friends[friend.id -1] = friend;

	});	
});


router.post("/friends/add",(req,res)=>{

	mdb.collection("friends").insert(req.body);
	res.send({
		"status":200,
		"msg":"record inserted successfully"
	});
});


router.delete("/friends/removeFriend",(req,res)=>{

	mdb.collection("friends").remove({id: req.body.id});

	res.send({
		"status":200,
		"msg":"record deleted successfully"
	});

});


export default router;


