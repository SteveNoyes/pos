var express = require("express"),
  http = require("http"),
  port = 80,
  app = require("express")(),
  server = http.createServer(app),
  bodyParser = require("body-parser"),
  io = require("socket.io")(server),
  liveCart;

console.log("Real time POS running");
console.log("Server started");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(( extended: false )));

app.all("/*", function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); //restrict to required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // sET CUSTOM HEADERS FOR CORS
  res.header(
    "Access-Control-Allow-Headers", 
    "Content-type,Accept,X-Access-Token,X-Key"
  );
  if (req.method == "OPTIONS") {
  res.status(200).end();
  } else {
    next();
  }
        

};
