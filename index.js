'use strict';

const
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send("I am healthy~~~"));
app.get('/env', (req, res) => {
    res.send('Env value is ' + process.env.PROFILE+' and start with'+process.env.START+', '+process.env.TEST+', '+process.env.TEST2);
})
console.log('Env value is ' + process.env.PROFILE);
app.listen(port, () => console.log(`Listening on ${port}`));

module.exports = app;