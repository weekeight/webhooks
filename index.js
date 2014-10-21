var express = require('express');
var bodyParser = require('body-parser');
var childProcess = require('child_process');

var app = express();

app.use(bodyParser.json());

app.post('/deploy', function(req, res){
	res.status(200).send('get deploy message, I will do it...');
	var body = req.body,
		name = body.repository.name,
		branch = body.ref.split('/')[2];
	if(name === 'docs.kissyui.com' && branch === '5.0'){
		childProcess.exec('cd /alidata/www/docs.kissyui.com/kissyteam.github.com/5.0;git pull');
		console.log('deploy task done...');
	}
});

var server = app.listen(3000, function(req, res){
	var host = server.address().address,
		port = server.address().port;

	console.log('listen on port:' + port + ', when I get deploy message, I will do it...');
});