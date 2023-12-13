import bodyParser from "body-parser";
import express, { urlencoded } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<div>
     <h1> Your band name is </h1>
     <span>${req.body.name}</span>
     <span>${req.body.pet}</span>
     </div>`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
