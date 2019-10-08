const http = require('http');
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const router = require('./routes/routes');
const port = process.env.PORT || 3000;

const app = express();

// * set the templating engine
app.set('view engine', 'hbs');

//* configure views directoty
const viewPath = path.join(__dirname, '../templates/views');
app.set('views', viewPath);

// * Express middleware that creates a proxy server and sets response header
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

// * configure the express app to parse json data
app.use(express.json());

// * register our routes
app.use(router);

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Server up and running on port ${port}`);
});
