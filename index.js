var express = require('express');
var app = express();

app.get('/payload', function(req, res){
	console.log(req);
	res.send('Hello World!');
});

var server = app.listen(3000, function(req, res){
	var host = server.address().address,
		port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})