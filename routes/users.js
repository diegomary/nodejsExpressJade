var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

// from the users root we can navigate to /review
// the full address will be /users/review
router.get('/review', function(req, res) {
  res.send('Hit review');
});

module.exports = router;
