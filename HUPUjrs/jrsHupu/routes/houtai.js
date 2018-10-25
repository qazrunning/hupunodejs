var express = require('express');
var cheerio = require('cheerio');
var router = express.Router();
var multer = require('multer');

router.post('/news', function(req, res, next) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'jrsname'
	});
	connection.connect();
	//
	function xiangtong() {
		return new Promise(function(resolve, reject) {
			connection.query('select * from news', function(error, results, fields) {
				if(error) throw error;
				resolve();
			});
		})
	}
	//
	function isINser() {
		return new Promise(function(resolve, reject) {
			connection.query('INSERT INTO news SET ?', [{
				author: req.body.author,
				title: req.body.title,
				content: req.body.content,
				img: req.body.img
			}], function(error, results, fields) {
				if(error) throw error;
				res.send("success");

				connection.end();
			});
		});
	}
	xiangtong().then(isINser);
});

//根据用户名修改数据库头像表格
router.post('/imgchange', function(req, res, next) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'jrsname'
	});
connection.connect();
	
connection.query('update jrsname set picture = ? where username = ?',[req.body.picture,req.body.username] ,function(error, results, fields) {
		if(error) throw error;
		res.send(req.body.username);
		console.log(results)
		connection.end();
	});
	
});



//上传图片
var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹会自动创建。
	destination: function(req, file, cb) {
		//console.log(file)
		cb(null, './public/img') //上传文件夹
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});
var upload = multer({
	storage: storage
});

//多图上传到临时文件夹存储
router.post('/uploads', upload.any('logo'), function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
	let imgg = req.files[0].filename;
	//console.log(imgg);
	res.send(imgg);
});



//update 表名 set 字段=新值,… where 条件;
module.exports = router;