var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

if (req.session.userName) {
	res.render('welcome', { name: "Diego Aldo Burlando",currentSession: req.session.userName});
  	}
  	else{
  		res.redirect('/login');
  	}
	
});

module.exports = router;
