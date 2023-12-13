import express from "express";
const app = express();

const custom = (req, res, nex) => {
  next();
};

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
