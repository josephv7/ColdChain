const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const Request = require("request");
const rgbToHsl = require('rgb-to-hsl');


let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// function getHSL(){
// console.log(rgbToHsl(255, 192, 203));
// return rgbToHsl(255, 192, 203);
// }


app.get('/gethsl', async function(req, res) {
    

    console.log('inside gethsl');
console.log(req.query.r);
console.log(req.query.g);
console.log(req.query.b);

res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

var hsl = rgbToHsl(req.query.r,req.query.g,req.query.b)
console.log(hsl)
// var jsondata = JSON.parse(hsl);
console.log('HSL Main Value' + Math.round(hsl[0]));

res.send(rgbToHsl(req.query.r,req.query.g,req.query.b));

    
  })




let server = app.listen(4001, function() {
    console.log('Server is listening on port 4001')
});