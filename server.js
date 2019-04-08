const express = require('express');

//init express
const app = express();

//create endpoints/route handlers
app.get('/', function(request,response){
  response.send('Hello Cha Cu');
});

//listen on port
app.listen(5000);

console.log('Server is running...')
