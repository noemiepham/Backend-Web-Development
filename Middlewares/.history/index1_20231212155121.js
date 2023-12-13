import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/submit", (req, res) => {
  console.log(req.body);
  res.sendFile();
});

app.listen(port, console.log(`listening on port ${port}`));
