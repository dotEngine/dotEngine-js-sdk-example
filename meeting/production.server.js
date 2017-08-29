const createServer = require('auto-sni');
const express = require('express');

const app = express();

app.use(express.static('public'));


const server = createServer({
    email: 'notedit@gmail.com', // Emailed when certificates expire.
    agreeTos: true, // Required for letsencrypt.
    debug: false, // Add console messages and uses staging LetsEncrypt server. (Disable in production)
    domains: ['meeting.dot.cc'], // List of accepted domain names. (You can use nested arrays to register bundles with LE).
    ports: {
        http: 80, // Optionally override the default http port.
        https: 443 // // Optionally override the default https port.
    }
},app);



server.once('listening', ()=> {
  console.log('We are ready to go.');
});