var 
	express = require('express'),
	app = express(),
	responseTime = require('response-time'),
	morgan = require('morgan'),
	favicon = require('serve-favicon');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

	if (req.query.someKey && req.query.someKey === 'someValue') {
			console.log('Rendering alternative view')
			res.render('index2');
		}

		console.log('Rendering main view')
		res.render('index');
})

app.get('/book', function (req, res) {
	res.render('book');
})

app.get('/about', function (req, res) {
	res.render('about');
})

app.get('/company', function (req, res) {
	res.render('company');
})

app.get('/team', function (req, res) {
	res.render('team');
})

app.use(morgan('dev')); // log every request to the console
app.use(express.static('public'))
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(responseTime())

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})