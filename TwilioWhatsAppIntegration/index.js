var express = require('express');
var app = express();

const accountSid = 'sid';
const authToken = 'token';
const client = require('twilio')(accountSid, authToken);

app.get('/temperature', function (req, res) {
  console.log('Temperature Change');
  console.log(req.query.temperature)
  console.log(req.query.location)

  client.messages
        .create({
          body: 'Tampered!' + req.query.temperature,
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+918289940688'
        })
        .then(message => console.log(message.sid))
        .done();



});


app.get('/location', function (req, res) {
  console.log('Location Change');
  console.log(req.query.temperature)
  console.log(req.query.location)

  client.messages
        .create({
          body: 'Location changed!',
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+918289940688'
        })
        .then(message => console.log(message.sid))
        .done();



});


pp.get('/destination', function (req, res) {
  console.log('Location Change');
  console.log(req.query.temperature)
  console.log(req.query.location)

  client.messages
        .create({
          body: 'Destination Reached',
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+918289940688'
        })
        .then(message => console.log(message.sid))
        .done();



});



app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
