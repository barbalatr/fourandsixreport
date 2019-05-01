const express = require('express');
const path = require('path');
//init express
const app = express();

//create endpoints/route handlers
app.get('/', function(request,response){
  // response.send('Hello Cha Cu');
    response.sendFile(path.join(__dirname,'../public/browser.html'))
});

app.get('/browser.js', function(request,response){
  // response.send('Hello Cha Cu');
    response.sendFile(path.join(__dirname,'../public/browser.js'))
});

//listen on port
var PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
  console.log('Server is running...');
});
