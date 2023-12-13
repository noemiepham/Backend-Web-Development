import express, { urlencoded } from "express";
import dirname from "path";
import { Send } from "express";

const app = express();
const port = 3000;
const __dirname = urlencoded({ extended: true });

app.get("/", (req, res) => {
  res.sendFile(__dirname, "public/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
