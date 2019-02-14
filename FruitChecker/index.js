const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const Request = require("request");
const rgbToHsl = require('rgb-to-hsl');
const IPFS = require('ipfs')


let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




// function getHSL(){
// console.log(rgbToHsl(255, 192, 203));
// return rgbToHsl(255, 192, 203);
// }

app.get('/ipfs',async function(req,res){

console.log('inside ipfs');
console.log(req.query.red);
console.log(req.query.green);

var fileHash;

res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


const node = new IPFS()
node.on('ready', async () => {
    console.log('iniside sample code')

    

    // const version = await node.version()

    
    
    // console.log('Version:', version.version)

    var date = new Date();
    var timeStampString = date.getDate() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds() + '.txt';
    console.log('trial')
    console.log(timeStampString);
  
    const filesAdded = await node.add({
        path: timeStampString,
    // content: Buffer.from('Hello World 101222244')
      // path: timestamp,
      content: Buffer.from('Red Count : ' + req.query.red + ' & Green Count : ' + req.query.green + '. Timestamp : ' + Date.now().toString())
    })
  
    console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)

    fileHash = filesAdded[0].hash;
    console.log('test')
    console.log(fileHash)
    res.send(fileHash);
    try {
        await node.stop()
        console.log('Node stopped!')
      } catch (error) {
        console.error('Node failed to stop cleanly!', error)
      }

  
  })
  

})


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

if(Math.round(hsl[0]) > 0 && Math.round(hsl[0]) < 65 ){
    res.send('red');
    console.log('red')
}else if(Math.round(hsl[0]) > 100 && Math.round(hsl[0]) < 180){
    res.send('green');
    console.log('green')
}
   
})


let server = app.listen(5001, function() {
    console.log('Server is listening on port 5001')
});