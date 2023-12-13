import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("hello word");
});

app.listen(3000, () => console.log(" This server is running on port 3000"));
