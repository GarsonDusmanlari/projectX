var express = require('express');
var router = express.Router();
const Order = require('../model/order');

/* GET home page. */
router.get('/', function(req, res, next) {
  const o1 =Order();
  res.json(o1);
});
module.exports = router;
