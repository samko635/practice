'use strict';

const 
	express = require("express"),
	bodyParser = require("body-parser"),
	app = express(),
	port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send("I am healthy~~~"));
app.get('/env', (req, res) => {
	res.send('Env value is '+process.env.DB_URL);
})
app.listen(port, () => console.log(`Listening on ${port}`));

module.exports = app;
