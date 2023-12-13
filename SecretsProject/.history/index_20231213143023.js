//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const check = false;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

const checkPassword = (req, res, next) => {
  if (req.body.password == "IloveProgramming") {
    console.log(req.body);
  }
  next();
};

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (check) {
    res.sendFile(__dirname + "/public/secret.html");
  }
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Lisening on port ${port}`);
});
