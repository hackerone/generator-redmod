var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var fs = require('fs');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('/data/:page', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	var content = fs.readFileSync(path.join(__dirname, 'dev', 'data' , req.params['page']));
	res.write(content);
	res.end();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/assets/:page', function(req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'assets', req.params['page']));
});


app.get('/:page', function(req, res) {
	res.sendFile(path.join(__dirname, 'dev', req.params['page']));
});
  
app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
