const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', async function(req, res) {
console.log('inside get method');
console.log(req.query.temperature);
console.log(req.query.location);
});

  let server = app.listen(4000, function() {
      console.log('Server is listening on port 4000')
  });
