var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

	console.log("***********AUTHENTICATION LOGGING***************************");
    var authenticatedReport = { status:req.session.isnotLogged, userName:req.session.userName, passWord:req.session.password };   
    res.send(authenticatedReport);
    var status = req.session.isnotLogged == true ? "Not Authenticated" : "Authenticated"; 
    console.log("Authentication status: ".concat(status));

});

module.exports = router;