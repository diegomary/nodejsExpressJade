var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {	
	res.render('login', { name: "Diego Aldo Burlando"});	
});


router.post('/',function(req,res){
  var user_name=req.body.username;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes it is authenticated");
});

module.exports = router;
