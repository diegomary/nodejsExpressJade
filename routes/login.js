var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	console.log(req);
if (req.session.userName) {
	res.redirect('/welcome')
	 	}
  	else{
  		res.render('login', { name: "Diego login page"});
  	}	
});

router.post('/',function(req,res){ 
  req.session.userName = req.body.username;
  req.session.password = req.body.password; 
  req.session.isnotLogged = false; 
  res.redirect('/welcome')
});

module.exports = router;
