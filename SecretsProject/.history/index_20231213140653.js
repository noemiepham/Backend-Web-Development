//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { urlencoded } from "body-parser";
import dirname from "path";

const app = express();
const port = 3000;
const __dirname = dirname();

const logger = (req, res, next) => {
  console.log(req.body);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.sendFile(__dirname, "/public/secret.html");
});
