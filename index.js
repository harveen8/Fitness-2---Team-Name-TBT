// A static server using Node and Express
const express = require("express");
const app = express();

// make all the files in 'public' available on the Web
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/fitnessLog.html");
});

// instead of older body-parser 
app.use(express.json());

// handle pastActivity post requests
app.post('/pastActivity', function(request, response, next) {
  console.log(
    "Server recieved a post request for /pastActivity with body: ",
    request.body
  );
  response.send({
    message: "I recieved your POST request at /pastActivity"
  });
});

// handle futureActivity post requests
app.post('/futureActivity', function(request, response, next) {
  console.log(
    "Server recieved a post request /futureActivity with body: ",
    request.body
  );
  response.send({
    message: "I recieved your POST request at /futureActivity"
  });
});

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("The static server is listening on port " + listener.address().port);
});
