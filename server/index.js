const express = require("express");
const port = 3000;
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use(express.json());

app.post("/body", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.send("Hello Shivam");
});

app.get("/profile/:start/:end", function (req, res) {
  console.log("Starting Page: ", req.params["start"]);
  console.log("Ending Page: ", req.params["end"]);
  res.send('OK');
});

app.listen(3000, console.log("Server listening on port " + port));
