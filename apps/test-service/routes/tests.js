var express = require('express');
var router = express.Router();

/* GET tests listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Get test by id */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/* Create test */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Update test */
router.put('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/* Delete test */
router.delete('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;