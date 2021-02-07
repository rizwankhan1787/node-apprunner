const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  res.send("😉 yaaay! it works!");
});

app.listen(3000, "localhost", () => {
  console.log("Listening on 3000");
});
