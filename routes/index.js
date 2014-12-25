var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) { 
	req.session.isnotLogged = req.session.isnotLogged === false ? false : true;
	var homePageInfo=["Welcome to Diego's Web Site", "this is a demo web application","written in Node.JS","a basic setup skeleton"];
	res.render('index', { homepageinfo: homePageInfo,isnotLogged: req.session.isnotLogged });	
});


module.exports = router;
