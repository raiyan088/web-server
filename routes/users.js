var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('respond with a test');
});

router.get('/test/akash', function(req, res, next) {
  res.send('respond with a akash');
});


module.exports = router;
