import express from 'express';
import data from '../src/testData';
const router = express.Router();

router.get("/friends",(req,res)=>{
	res.send({friends:data.friends});
});


export default router;


