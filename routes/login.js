var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	console.log(req);
if (req.session.userName) {
	res.redirect('/welcome')
	 	}
  	else{
  		res.render('login', { name: "Diego Aldo Burlando",currentSession: "Session Uninitialized" });
  	}	
});


router.post('/',function(req,res){
  var user_name=req.body.username;
  var password=req.body.password;
  req.session.userName = user_name;
  console.log("User name = "+user_name+", password is "+password);
  res.redirect('/welcome')
});

module.exports = router;
