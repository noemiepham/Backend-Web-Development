import express from "express";
const app = express();
const port = 3000;

const custom = (req, res, nex) => {
  next();
};

app.get("/", (req, res) => {
  res.send("hello Quy");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
