var express = require('express');
var app = express();

const accountSid = 'ACf5566ab9e38d13007b998a1296b19516';
const authToken = 'api_token_here';
const client = require('twilio')(accountSid, authToken);

app.get('/', function (req, res) {
  console.log('Hello World!');

  client.messages
        .create({
          body: 'Hello there!',
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+918289940688'
        })
        .then(message => console.log(message.sid))
        .done();



});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
