var express = require('express');
var cheerio = require('cheerio');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/zhuce', function(req, res, next) {
	/*console.log(req.body)*/
	var mysql = require('mysql');
	
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'jrsname'
	});
	connection.connect();
	//查询相同用户名，使用Promiss函数，按顺序执行，消除异步
	function xiangtong() {
		return new Promise(function(resolve, reject) {
			connection.query('select * from jrsname where ?', [{
				username: req.body.username,
			}], function(error, results, fields) {
				if(error) throw error;
				if(results.length > 0) {
					connection.end();
					res.send("youl");
				} else {
					resolve();
				}
			});
		})
	}
//插入新用户名
	function isINser() {
		return new Promise(function(resolve, reject) {
			connection.query('INSERT INTO jrsname SET ?', [{
				username: req.body.username,
				passwords: req.body.passwords
			}], function(error, results, fields) {
				if(error) throw error;
				res.send("success");
				
				connection.end();
			});
		});
	}
xiangtong().then(isINser);
});


module.exports = router;