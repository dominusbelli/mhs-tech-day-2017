var express = require('express');
var bodyParser = require('body-parser');
var twilio = require('twilio');
var config = require('./config.js');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.post('/resources', function(request, response) {
  console.log(request.body);
  response.send('<Response><Message>https://github.com/dominusbelli/mhs-tech-day-2017</Message></Response>');
});

app.listen(process.env.PORT || 8080);
