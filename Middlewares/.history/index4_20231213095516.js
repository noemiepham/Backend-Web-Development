import bodyParser from "body-parser";
import express, { urlencoded } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
let bandName = "";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

const logger = (req, res, nex) => {
  console.log(req.body);
  bandName = req.body["street "] + req.body["pet"];
  next();
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<div>
     <h1> Your band name is </h1>
     ${bandName}
     </div>`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
