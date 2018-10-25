var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
request('http://localhost:3000/html/register.html', function(error, response, body) {
	//console.log('body:', body); // Print the HTML for the Google homepage.
	const $ = cheerio.load(body);
	console.log($("#J_username"));
});

console.log("开始请求");