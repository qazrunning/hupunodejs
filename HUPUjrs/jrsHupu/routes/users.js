var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var db = require('../lib/db.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});


router.post('/jrs', function(req, res, next) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'jrsname'
	});

	connection.query('select * from jrsname where ?', [{
		username: req.body.username
	}], function(error, results, fields) {
		if(error) throw error;
		if(results.length > 0) {
					
					res.send('youl');
				}
	});

	connection.end();
});

//登入判断是否有该用户。如果没有返回字符串"meiyou"
router.post('/login', function(req, res, next) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'jrsname'
	});

	connection.query('select * from jrsname where ?', [{
		username: req.body.username
	}], function(error, results, fields) {
		if(error) throw error;
		if(results.length > 0) {
			res.send(results);
		}else{
			//数据库里没有该用户名时，返回数据"meiyou"给前端判定
			res.send("meiyou");
		}
	});

	connection.end();
});

router.post('/shouye', function(req, res, next) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'jrsname'
	});

	connection.query('select * from news',function(error, results, fields) {
		if(error) throw error;
		res.send(results);
	});

	connection.end();

});


router.post('/detail', function(req, res, next) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'jrsname'
	});

	connection.query('select * from news where ?',[{
		id:req.body.id
	}],function(error, results, fields) {
		if(error) throw error;
		res.send(results);
	});

	connection.end();


});

module.exports = router;