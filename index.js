const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/index.html`);
});

server.listen(3001, () => {
  console.log("Listening at port 3001");
});
