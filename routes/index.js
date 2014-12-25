var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {	
	var alpHa="This is an important test";
	var myArray=[1,2,"Hello from",4,5,6,7,8,"This is a test"];
	res.render('index', { list: myArray});	
});


module.exports = router;
