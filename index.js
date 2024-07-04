
import express from "express";
const app = express();

const port = 9000; //  here we use virutal port for communication

// Handling a GET Request to the Root URL (/):
app.get("/", (req, res) => {
  res.json({ message: "Hello From Express App" });
});


//it starts the server and begins listening for incoming HTTP requests on the specified port.
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
