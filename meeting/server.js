const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();

const key = fs.readFileSync('keys/server.key');
const cert = fs.readFileSync('keys/server.crt');


app.use(express.static('public'));


const server = https.createServer({
    key: key,
    cert: cert
}, app);

const port = 4001;

server.listen(port,'localhost', function(){
    console.log('listen on ' + port); 
});



