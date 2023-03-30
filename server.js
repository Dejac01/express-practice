// Load express
const express = require("express");

// Create our express app
const app = express();
const PORT = 3000;


//-----------------------------------------

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});


//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});



//------------------------------------
const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });



//middleware
app.get('/Home', (req, res) =>{
      res.send('<h1>Hello World!</h1>');
      });

// routes
// app.get("/:indexOfPlantsArray", (req, res) => {
//   res.send(plants[req.params.indexOfPlantsArray]);
// });

app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  });










//--------- {Main requirements}
const fs = require("fs"); // this engine requires the fs module like we did Saturday
app.engine("madeline", (filePath, options, callback) => {
  // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>");
    return callback(null, rendered);
  });
});
app.set("views", "./views"); // specify the views directory
app.set("view engine", "madeline"); // register the hypatia view engine

// --------- {Middleware}

// --------- {Routing}

  app.get('/another-one', (req, res) => {
    res.render('template',
{ title: 'We The Best',
message: 'Who!',
content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win'
})
})

app.get("/", (req, res) => {
  res.render("template", {
    title: "Hey",
    message: "Hello there!",
    content: "I am De`ja",
  });
});

app.get("/about-me", (req, res) => {
  res.render("template", {
    title: "Hey yall!",
    message: "Deja here!",
    content: "Im from New Orleans!",
  });
});

app.get("/colors", (req, res) => {
  res.render("template", {
    title: "Favorite Colors",
    message: "My favorite Colors!",
    content: "Red, Pink, and Blue!",
  });
});

app.get("/items", (req, res) => {
    res.render("template", {
      title: "Favorite items",
      message: "My favorite everyday items!",
      content: "Red, Pink, and Blue!",
    });
  });

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
app.listen(PORT, () => {
    console.log("CurrentlyListening on Port ${PORT}");
  });