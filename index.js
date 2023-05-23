const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world my god");
});

app.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(`name is ${name} and email is ${email}`);
  res.send("received");
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
