var express = require('express');
var router = express.Router();
var oracle = require('oracle');

// first way to connect using tnsnames.ora
//var connectData = { "tns": "XE", "user": "diego", "password": "atreius" };

// second way to connect 
var connectData = {
    hostname: "localhost",
    port: 1521,
    database: "xe", // System ID (SID)
    user: "diego",
    password: "atreius"
}

/* GET home page. */
router.get('/', function(req, res) { 
	req.session.isnotLogged = req.session.isnotLogged === false ? false : true;
	var homePageInfo=["Welcome to Diego's Web Site", "this is a demo web application","written in Node.JS","a basic setup skeleton"];
	
	oracle.connect(connectData, function(err, connection) {
	    if (err) { console.log("Error connecting to db:", err); return; }
	    connection.execute("SELECT systimestamp FROM dual", [], function(err, results) {
	        if (err) {
	             console.log("Error executing query:", err);
	         	 connection.close(); // call only when query is finished executing
				 res.render('index', { homepageinfo: homePageInfo,isnotLogged: req.session.isnotLogged, fromOracle:[{ SYSTIMESTAMP:"not available" }]});		          
	         }
	        else {
	        console.log(results);
	        connection.close(); // call only when query is finished executing
	        res.render('index', { homepageinfo: homePageInfo,isnotLogged: req.session.isnotLogged, fromOracle:results });	       
	    	}
	    });
	});
	
});
module.exports = router;
