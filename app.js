var express = require('express');

var PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 80;
}

var app = express();
app.get('/', function (req, res) {
  res.send("Welcome to IBM Cloud DevOps with Tekton! Let's try the pipeline by committing a change in Github.");
});

app.listen(PORT);
console.log('Application Running on port' + PORT);
