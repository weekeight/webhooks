var express = require('express');
var bodyParser = require('body-parser');
var childProcess = require('child_process');

var app = express();
app.use(bodyParser.urlencoded({
	extended : false,
	type : 'application/x-www-form-urlencoded'
}));
app.use(bodyParser.json());
app.post('/deploy', function(req, res){
	debugger;
        res.status(200).send('get deploy message, I will do it...');
        var body = JSON.parse(req.body.payload),
                name = body.repository.name,
                branch = body.ref.split('/')[2];
        if(name === 'docs.kissyui.com' && branch === '5.0'){
                childProcess.exec('cd /alidata/www/docs.kissyui.com/kissyteam.github.com/5.0;git pull');
                console.log('deploy task done...');
        }
});

var server = app.listen(9999, function(req, res){
        var host = server.address().address,
                port = server.address().port;

        console.log('listen on port:' + port + ', when I get deploy message, I will do it...');
});