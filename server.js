// Load express
const express = require('express');

// Create our express app
const app = express();
const PORT = 3000

//--------- {Main requirements}




//--------- {Middleware}



//--------- {Routing}
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
  });

  app.get('/about', function (req, res) {
    res.send('<h1>About Me!</h1>');
  });

  app.get('/cars', function (req, res) {
    res.send('<h1>Vroom Vroom!</h1>');
  });



  // -------- Server Info




// Tell the app to listen on port 3000 for HTTP requests from clients
//Asynchronous callback function
app.listen(PORT,()=>{
console.log('CurrentlyListening on Port ${PORT}');
});