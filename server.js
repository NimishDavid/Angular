var express  = require('express');
var bodyParser = require('body-parser');
var app      = express();
var path = require('path');
var port     = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// app.set('view engine', 'ejs'); // Set up ejs for templating

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname)+'/index.html');
});

// Start Server
app.listen(port);
console.log('Server listening on port #' + port);
