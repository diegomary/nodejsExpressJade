var express = require('express');
var router = express.Router();
var oracle = require('oracle');
var bcrypt = require('bcrypt');

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

	res.render('register', { name: "Diego Aldo Burlando"}); 	
	
});

  router.post('/',function(req,res){ 
  req.session.userName = req.body.username;
  req.session.password = req.body.password;
  req.session.Email = req.body.email;
  req.session.firstName = req.body.firstName;
  req.session.lastName = req.body.lastName;
  req.session.isnotLogged = true;

  bcrypt.genSalt(10, function(err, salt) {

    bcrypt.hash(req.session.password, salt, function(err, hash) {
    oracle.connect(connectData, function(err, connection) {
	   if (err) {
	    console.log("Error connecting to db:", err); return;
	    }
	    connection.execute(
        "INSERT INTO DMUSERS (USERNAME,PASSWORD,EMAIL,FIRSTNAME,LASTNAME,PASWDSALT,PASSBRIGHT) VALUES (:1,:2,:3,:4,:5,:6,:7) RETURNING ID INTO :8",
        [req.session.userName,hash,req.session.Email,req.session.firstName,req.session.lastName,salt,req.session.password, new oracle.OutParam()],
        function(err, results) {
            if ( err ) {console.log("ERROR!");
			connection.close();
			return;
        } 
            // results.updateCount = 1
            console.log(results.returnParam);// = the id of the person just inserted
            connection.close();
            console.log(hash);
        }
    );
	}); 

    });
});  

  res.redirect('/welcome');

});

module.exports = router;


