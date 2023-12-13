import express from "express";
import __dirname from "path";
var bodyParser = require("body-parser");

const __dirname = ur;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname, "public/index.html");
});
