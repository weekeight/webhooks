var express = require('express');
var bodyParser = require('body-parser');
var childProcess = require('child_process');

var app = express();

app.use(function(req, res, next){
	console.log(req.body);
});
app.post(bodyParser.json());
app.use(function(req, res, next){
	console.log(req.body);
});
app.post('/deploy', function(req, res){
	console.log(req);
	res.status(200).send('Hello World!');
});

var server = app.listen(3000, function(req, res){
	var host = server.address().address,
		port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});