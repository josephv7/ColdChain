var express = require('express');
var app = express();

const accountSid = 'id_here';
const authToken = 'token_here';
const client = require('twilio')(accountSid, authToken);

app.get('/temperature', function (req, res) {
  console.log('Temperature Change');

  client.messages
        .create({
          body: 'Tampered!',
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+918289940688'
        })
        .then(message => console.log(message.sid))
        .done();



});


app.get('/location', function (req, res) {
  console.log('Location Change');

  client.messages
        .create({
          body: 'Location changed!',
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+918289940688'
        })
        .then(message => console.log(message.sid))
        .done();



});



app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
