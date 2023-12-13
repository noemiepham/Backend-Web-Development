//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const logger = (req, res, next) => {
  console.log("requesturl: ", req.url);
  console.log(("requestType", req.type));
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  res.sendFile(__dirname, "/public/secret.html");
});

app.listen(port, () => {
  console.log(`Lisening on port ${port}`);
});
