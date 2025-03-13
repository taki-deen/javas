//app.js

import express from "express"; //import the required package
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/taqi", (req, res) => {
  res.send("Hello, taqi!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
