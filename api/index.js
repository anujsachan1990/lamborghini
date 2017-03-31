import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get("/friends",(req,res)=>{
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({friends:data.friends}, null, 3));
});


export default router;


