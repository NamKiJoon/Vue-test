const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

const memos = [];
app.use(bodyParser.json());

app.get("/api/memos", (req, res) => {
  res.send(memos);
});

app.post("/api/memos", (req, res) => {
  // console.log(req.body);
  memos.push(req.body.content);
  res.send(memos);
});

app.listen(port, () => {
  console.log(`Example app listening at http:localhost:${port}`);
});

//실행 --- node .\index.js
