require("dotenv").config()
const express = require("express");
const app = express();

const port = process.env.PORT; //  here we use virutal port for communication


// Handling a GET Request to the Root URL (/):
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Valid User");
});

app.get("/About_us", (req, res) => {
  res.send("<h1> We are Tech company </h1>");
});



//it starts the server and begins listening for incoming HTTP requests on the specified port.
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
