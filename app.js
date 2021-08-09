const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  const SERVICE = process.env.SERVICE; // here to demo env variables
  res.send(`😉 yaaay! it works! - ${SERVICE}`);
});

app.listen(3000, "localhost", () => {
  console.log("Listening on 3000");
});
