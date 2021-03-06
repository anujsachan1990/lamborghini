import express from 'express';
import mongodb from 'mongodb';
import {assert} from 'assert';
import config from '../config';
//import data from '../src/testData';

let mdb;

mongodb.MongoClient.connect(config.mongodbUri,(err,db)=>{
//assert.equal(null,error);
mdb = db;
});



const router = express.Router();

router.get("/friends/:id",(req,res)=>{

	let friends = [];	
		mdb.collection("friends").find()
	.project({
		id:1,
		_id:1,
		name:1,
		designation:1,
		about:1
	})
	.each((err,friend) =>{

		if(!friend){
			
			var z= friends.filter(function (el) {
 				 return el._id ==req.params.id
			});
			res.send({friends:z});
			return;
		}
		friends[friend._id] = friend;
		friends.push(friends[friend._id]);
	});	

});


router.get("/friends",(req,res)=>{
	let friends = [];
	mdb.collection("friends").find()
	.project({
		id:1,
		_id:1,
		name:1,
		designation:1,
		about:1
	})
	.each((err,friend) =>{
		//assert.equal(null,error);
		//console.log(friend);

		if(!friend){
			console.log(friends)

			res.send({friends:friends});

			return;
		}

		friends[friend._id] = friend;
		friends.push(friends[friend._id]);
		

	});	
});


router.post("/friends/add",(req,res)=>{

	console.log(req.body.params);

	mdb.collection("friends").insert(req.body.params);
	res.send({
		"status":200,
		"msg":"record inserted successfully"
	});
});


router.post("/friends/removeFriend",(req,res)=>{
	console.log(req.body);

	mdb.collection("friends").remove({_id: new mongodb.ObjectID(req.body._id)});

	res.send({
		"status":200,
		"msg":"record deleted successfully"
	});

});


export default router;


