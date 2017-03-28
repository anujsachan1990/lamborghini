import https from 'https';

https.get("https://www.sunsuper.com.au",res=>{
	console.log("response code",res.statusCode);
	res.on('data',chuck=>{
		console.log(chuck.toString());
	})
});

