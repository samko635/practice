'use strict';

const
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    port = 3002;
const Credstash = require('credstash');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
	console.log('ENV ::: ', process.env);
app.get('/', (req, res) => res.send("I am healthy~~~"));
app.get('/env', (req, res) => {
	console.log('ENV ::: ', process.env);
    res.send('Env value is ' + process.env.PROFILE+' and start with'+process.env.START+', '+process.env.TEST+', '+process.env.TEST2);
})
var credstash = new Credstash({ 'table': 'credential-store', 'awsOpts' : { 'region': 'ap-southeast-2' }, 'kmsOpts': { 'region' : 'ap-southeast-2'}} )
credstash.get('test.var', (e, secret) => {
  console.log('do not share the secret', secret);
});
console.log('Env value is ' + process.env.PROFILE);
app.listen(port, () => console.log(`Listening on ${port}`));

module.exports = app;