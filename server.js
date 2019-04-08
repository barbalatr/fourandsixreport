const express = require('express');

//init express
const app = express();

//create endpoints/route handlers
app.get('/', function(request,response){
  response.send('Hello Cha Cu');
});

//listen on port
var PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
  console.log('Server is running...');
});
