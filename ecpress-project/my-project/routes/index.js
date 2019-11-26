var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 获取通信录写本地还是地址好
router.post('/tonngxin', function(req, res, next) {
 res.append('Access-Control-Allow-Origin', '*');
	console.log(req.body)
	res.json(888)
});

router.post('/get-location', function(req, res, next) {
 res.append('Access-Control-Allow-Origin', '*');
	console.log(req.body)
	res.json(999)
});
module.exports = router;
