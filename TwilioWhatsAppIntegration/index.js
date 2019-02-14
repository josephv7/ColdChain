var express = require('express');
var app = express();

const accountSid = 'Account_ID';
const authToken = 'Auth_Token';
const client = require('twilio')(accountSid, authToken);

app.get('/temperature', function (req, res) {
  console.log('Temperature Change');
  console.log(req.query.temperature)
  console.log(req.query.location)

  client.messages
        .create({
          body: 'Your package was tampered at ' + req.query.location + ' and the temperature has changed to ' + req.query.temperature + ' Degree Celcius.',
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
          body: 'Your package has arrived at ' + req.query.location + ' with temperature ' + req.query.temperature + ' Degree Celcius.',
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+918289940688'
        })
        .then(message => console.log(message.sid))
        .done();



});


app.get('/destination', function (req, res) {
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
