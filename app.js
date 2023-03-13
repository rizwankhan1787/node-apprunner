const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  const SERVICE = process.env.SERVICE; // here to demo env variables
  res.send({ message: `💯 yaaay! its working (content updated)! - ${SERVICE}` });
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
