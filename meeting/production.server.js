
const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(4001, function () {
  console.log('Example app listening on port 4001!')
})