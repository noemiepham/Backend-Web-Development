import express from "express";
import __dirname from "path";
const __dirname = ur;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname, "public/index.html");
});
