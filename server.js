"use strict";

var express = require('express');
var app = express();
var puerto = 80;



app.use(express.static('public'));


app.listen(puerto, function(){

  
  console.log(`Server Express Ready at http://localhost:80 !`);
});
